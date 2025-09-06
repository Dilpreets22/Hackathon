const User = require("../models/User");
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const { plaidClient } = require('../utils/plaid');

// We create a temporary "link_token" that the frontend will use to open the Plaid login popup.
/* exports.createLinkToken = async (req, res) => {
  try {
    // The request object that we send to Plaid
    const plaidRequest = {
      user: {
        // A unique ID for the user in your system.
        client_user_id: req.user.id,
      },
      client_name: 'Kairo', // The name of your app, which the user will see in the Plaid popup
      products: ['transactions'], // We're asking for permission to access transaction data
      country_codes: ['IN'], // Let's start with US, you can add more like 'IN', 'CA' etc.
      language: 'en', // The language for the Plaid popup
    };

    // Make the API call to Plaid to create the token
    const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);

    // Send the successful response back to the frontend
    res.json(createTokenResponse.data);

  } catch (error) {
    // Log any errors to the console for debugging
    console.error("Error creating link token:", error.response ? error.response.data : error.message);
    res.status(500).send("An error occurred while creating the link token.");
  }
}; */

exports.createLinkToken = async (req, res) => {
  try {
    const response = await plaidClient.linkTokenCreate({
      user: { client_user_id: req.user.id }, // must be a unique id per user
      client_name: "Kairo",
      products: [ "transactions"], // adjust as needed
      language: "en",
      country_codes: ["US"], // change based on your Plaid config
    });

    res.json({ link_token: response.data.link_token });
  } catch (err) {
    console.error("Error creating link token:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to create link token" });
  }
};

// This function exchanges a public_token for an access_token
exports.exchangePublicToken = async (req, res) => {
  try {
    // Get the public_token from the request body
    // The frontend will send this to us after the user successfully links their bank.
    const { public_token } = req.body;

    // Make the API call to Plaid to exchange the tokens
    const response = await plaidClient.itemPublicTokenExchange({
      public_token: public_token,
    });

    // Extract the tokens from Plaid's response
    const accessToken = response.data.access_token;
    const itemId = response.data.item_id;

    // Save the tokens to our database for the logged-in user
    await User.findByIdAndUpdate(req.user.id, {
      plaidAccessToken: accessToken,
      plaidItemId: itemId,
    });

    // success response back to the frontend
    res.json({ message: "Successfully linked bank account!" });
  } catch (error) {
    console.error("Error exchanging public token:", error.response ? error.response.data : error.message);
    res.status(500).send("An error occurred while linking the bank account.");
  }
};

// This function fetches transactions for a logged-in user
exports.getTransactions = async (req, res) => {
  try {
    // Find the logged-in user from the database
    const user = await User.findById(req.user.id);

    // Check if the user has linked a bank account
    if (!user || !user.plaidAccessToken) {
      return res.status(400).json({ message: "User has not linked a bank account." });
    }

    // Prepare the request to send to Plaid
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    const plaidRequest = {
      access_token: user.plaidAccessToken,
      start_date: thirtyDaysAgo.toISOString().split('T')[0], // Format as 'YYYY-MM-DD'
      end_date: today.toISOString().split('T')[0], // Format as 'YYYY-MM-DD'
    };

    // Make the API call to Plaid to get transactions
    const response = await plaidClient.transactionsGet(plaidRequest);
    const rawTransactions = response.data.transactions;

    // --- NEW: Transform the raw data into a clean, simple format ---
    const simplifiedTransactions = rawTransactions.map(t => ({
        id: t.transaction_id,
        name: t.merchant_name || t.name, // Use merchant name if available, otherwise the default name
        amount: t.amount,
        // currency: t.iso_currency_code,
        date: t.date,
        logo_url: t.logo_url // This is useful for the frontend UI
    }));

    // --- Send the NEW simplified list to the frontend ---
    res.json({ transactions: simplifiedTransactions });

  } catch (error) {
    console.error("Error fetching transactions:", error.response ? error.response.data : error.message);
    res.status(500).send("An error occurred while fetching transactions.");
  }
};