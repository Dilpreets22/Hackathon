// components/FinancialPulse.tsx
"use client";

import { useState, useEffect } from "react";

export default function FinancialPulse() {
  // Local state for score (default 50)
  const [score, setScore] = useState(50);

  // Example backend logic (commented out)
  /*
  useEffect(() => {
    async function fetchScore() {
      try {
        const res = await fetch("/api/score"); // Your backend API
        const data = await res.json();
        setScore(data.score); // Update score from backend
      } catch (error) {
        console.error("Error fetching score:", error);
      }
    }
    fetchScore();
  }, []);
  */

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
        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          className="w-full accent-green-500"
        />
        <span className="ml-4 text-sm font-semibold">{score}/100</span>
      </div>
    </div>
  );
}
