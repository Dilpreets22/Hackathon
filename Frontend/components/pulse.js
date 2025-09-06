"use client";

import { useState, useEffect } from "react";
import api from "../services/api"; 

export default function FinancialPulse() {
  const [score, setScore] = useState(null); // backend se aayega
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch score from backend
  useEffect(() => {
    async function fetchPulse() {
      try {
        const res = await api.post("/ai/financial-pulse"); 
        setScore(res.data.pulse_score);
        setInsight(res.data.insight);
      } catch (error) {
        console.error("Error fetching pulse:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPulse();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading your Financial Pulse...</div>;
  }

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
          value={score ?? 0}
          readOnly 
          // onChange={(e) => setScore(Number(e.target.value))}
          className="w-full accent-green-500"
        />
        <span className="ml-4 text-sm font-semibold">{score}/100</span>
      </div>

      {insight && (
        <div className="mt-4 p-3 bg-gray-50 rounded-md text-gray-800 text-sm">
          <strong>Insight: </strong> {insight}
        </div>
      )}
    </div>
  );
}
