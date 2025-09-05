// components/FinancialPulse.tsx
"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function FinancialPulse() {
  // Local state for score (default 0)
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchScore() {
      try {
        const res = await axios.get(" "); // Your backend API
        setScore(res.data.score); // Update score from backend
      } catch (error) {
        console.error("Error fetching score:", error);
      }
    }

    fetchScore();

    // Optional: poll the backend every 5s for live updates
    const interval = setInterval(fetchScore, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-black">Financial Pulse</h2>
      </div>

      <p className="text-gray-600 mb-4">
        Financial Pulse is the score which you earn after tracking your
        transactions.
      </p>

      <div className="mb-2 font-medium">Score</div>
      <div className="flex justify-between items-center">
        {/* Read-only slider (only backend controls value) */}
        <input
          type="range"
          min={0}
          max={100}
          value={score}
          readOnly
          className="w-full accent-green-500"
        />
        <span className="ml-4 text-sm font-semibold">{score}/100</span>
      </div>
    </div>
  );
}
