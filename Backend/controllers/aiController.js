const { GoogleGenerativeAI } = require("@google/generative-ai");
const User = require('../models/User'); 
const { plaidClient } = require('../utils/plaid');

// Initialize the Google Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// This function takes a transaction description and returns its category
exports.categorizeTransaction = async (req, res) => {
  try {
    // transaction & description from the request body
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ message: "Transaction description is required." });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    // "Categorizer Prompt" 
    const prompt = `You are an automated financial service. Your only job is to categorize transactions. Based on the transaction name "${description}", select the best category from this list: ["Food & Drink", "Transport", "Shopping", "Bills & Utilities", "Entertainment", "Groceries", "Income", "Health", "Transfers", "Other"]. Respond with only the category name in JSON format, like {"category": "Transport"}.`;

    // Send prompt to the AI and await the result
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // The AI might return the JSON wrapped in markdown. We need to extract the pure JSON string.
    const startIndex = text.indexOf('{');
    const endIndex = text.lastIndexOf('}');
    const jsonString = text.substring(startIndex, endIndex + 1);

    // AI's response is a string, parse it into a real JSON object.
    const categoryJson = JSON.parse(jsonString);

    res.json(categoryJson);
  } catch (error) {
    console.error("Error categorizing transaction:", error);
    res.status(500).send("An error occurred while categorizing the transaction.");
  }
};

exports.generateFinancialPulse = async (req, res) => {
    try {
        // --- Part A: Get Transactions from Plaid ---
        const user = await User.findById(req.user.id);
        if (!user || !user.plaidAccessToken) {
            return res.status(400).json({ message: "User has not linked a bank account." });
        }

        const today = new Date();
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30);

        const plaidRequest = {
            access_token: user.plaidAccessToken,
            start_date: thirtyDaysAgo.toISOString().split('T')[0],
            end_date: today.toISOString().split('T')[0],
        };
        const plaidResponse = await plaidClient.transactionsGet(plaidRequest);
        const transactions = plaidResponse.data.transactions;

        // --- DEMO DATA INJECTION ---
        // Add a realistic, positive income transaction to ensure a good score for the demo.
        // Plaid income transactions have a negative amount.
        const simulatedIncome = { 
            name: 'Simulated Salary Deposit', 
            amount: -40000, // A negative amount signifies income
            date: new Date().toISOString().split('T')[0] 
        };
        transactions.unshift(simulatedIncome); // Add to the start of the list
/*
        // --- TEMPORARY TEST CODE START ---
        const transactions = [
            { name: 'Salary Deposit', amount: -5000, date: '2025-08-28' },
            { name: 'Rent Payment', amount: 1500, date: '2025-08-01' },
            { name: 'Starbucks Coffee', amount: 7.50, date: '2025-08-25' },
            { name: 'Netflix Subscription', amount: 15.99, date: '2025-08-15' },
            { name: 'Grocery Shopping', amount: 250.75, date: '2025-08-22' },
            { name: "Uber Ride", amount: 25.00, date: '2025-08-20' },
            { name: 'Freelance Payment', amount: -800, date: '2025-08-18' },
            { name: 'Amazon Purchase', amount: 125.50, date: '2025-08-10' },
        ];
        // --- TEMPORARY TEST CODE END ---
*/

        // --- Part B: Calculate Financial Metrics ---
        let totalIncome = 0;
        let totalSpending = 0;

        transactions.forEach(transaction => {
            // In Plaid, negative amounts are income (e.g., salary deposit)
            if (transaction.amount < 0) {
                totalIncome += -transaction.amount;
            } else {
                totalSpending += transaction.amount;
            }
        });

        // --- Part C: Calculate the Financial Pulse Score using our Formula ---
        let finalScore = 0;
        if (totalIncome > 0) {
            const savingsRate = (totalIncome - totalSpending) / totalIncome;
            const spendingRatio = totalSpending / totalIncome;
            
            // 1. Calculate savingsScore (weighted 70%)
            let savingsScore = (savingsRate / 0.30) * 70;
            savingsScore = Math.max(0, Math.min(savingsScore, 70)); // Clamp score between 0 and 70

            // 2. Calculate disciplineScore (weighted 30%)
            let disciplineScore = (1 - Math.min(1, spendingRatio)) * 30;
            disciplineScore = Math.max(0, disciplineScore); // Ensure it's not negative

            finalScore = Math.round(savingsScore + disciplineScore);
        }

        // --- Part D: Use AI to Generate an Insight based on the Score ---
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        
        const prompt = `You are Kairo, a friendly and encouraging financial AI assistant. Your user's "Financial Pulse" score for the last 30 days has been calculated as ${finalScore} out of 100. Their total income was ₹${totalIncome.toFixed(2)} and their total spending was ₹${totalSpending.toFixed(2)}. Based on these numbers, provide a one or two-sentence, encouraging, and insightful comment. If the score is high, praise their savings. If the score is low, be gentle and suggest a small area for improvement without being negative.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        /* const startIndex = text.indexOf('{');
        const endIndex = text.lastIndexOf('}');
        const jsonString = text.substring(startIndex, endIndex + 1); */

        // Send both the calculated score and the AI's insight
        res.json({
            pulse_score: finalScore,
            insight: text
        });

    } catch (error) {
        console.error("Error generating financial pulse:", error);
        res.status(500).send("An error occurred while generating the financial pulse.");
    }
};


exports.chatWithAI = async (req, res) => {
    try {
        // Get the user's question from the request body
        const { question, history } = req.body;
        if (!question) {
            return res.status(400).json({ message: "A question is required." });
        }

        const user = await User.findById(req.user.id);
        if (!user || !user.plaidAccessToken) {
            return res.status(400).json({ message: "User has not linked a bank account." });
        }
        const today = new Date();
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30);
        const plaidRequest = {
            access_token: user.plaidAccessToken,
            start_date: thirtyDaysAgo.toISOString().split('T')[0],
            end_date: today.toISOString().split('T')[0],
        };
        const plaidResponse = await plaidClient.transactionsGet(plaidRequest);
        const transactions = plaidResponse.data.transactions;

        // --- DEMO DATA INJECTION (for consistency in chat) ---
        const simulatedIncome = { 
            name: 'Simulated Salary Deposit', 
            amount: -40000, 
            date: new Date().toISOString().split('T')[0] 
        };
        transactions.unshift(simulatedIncome);
        //

/*
        // mock data
        const transactions = [
            { name: 'Salary Deposit', amount: -5000 }, { name: 'Rent Payment', amount: 1500 },
            { name: 'Starbucks Coffee', amount: 7.50 }, { name: 'Netflix Subscription', amount: 15.99 },
            { name: 'Grocery Shopping', amount: 250.75 }, { name: "Uber Ride", amount: 25.00 },
            { name: 'Freelance Payment', amount: -800 }, { name: 'Amazon Purchase', amount: 125.50 },
        ];
*/

        const simplifiedTransactions = transactions.map(t => ({ name: t.name, amount: t.amount, date: t.date }));
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        const chat = model.startChat({
            history: history || [],
        });

        const prompt = `
            CONTEXT:
            - You are Kairo, a friendly, optimistic, and insightful AI financial assistant.
            - Your user is in India, and all financial figures are in Indian Rupees (INR).
            - Here is a list of their recent transactions: ${JSON.stringify(simplifiedTransactions)}.
            - Use this live transaction data to answer the user's question with specific, concrete examples where possible.
            - Keep your answers concise, helpful, and encouraging (2-4 sentences). Do not respond in JSON format.
            
            USER'S NEW QUESTION: "${question}"
        `;
        // Generate the content and send the plain text response
        const result = await chat.sendMessage(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ answer: text });

    } catch (error) {
        console.error("Error in AI chat:", error);
        res.status(500).send("An error occurred during the AI chat.");
    }
};