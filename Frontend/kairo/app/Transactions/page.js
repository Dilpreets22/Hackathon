// app/transactions/page.js (Next.js 13 App Router)
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Figtree } from "next/font/google";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch transactions from backend
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("/api/transactions"); // Replace with your backend endpoint
        setTransactions(response.data.transactions); // Adjust based on your API response structure
        setUsername(response.data.username); // Assuming backend returns username
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-2">Transactions</h1>
      <p className="text-xl mb-8">Hi, {username || "UserName"}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg backdrop-blur-md"
          >
            <p className="text-gray-300">{transaction.name}</p>
            <p className="text-green-500 text-2xl font-bold">
              +${transaction.amount}
            </p>
            <p className="text-gray-300">{transaction.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
