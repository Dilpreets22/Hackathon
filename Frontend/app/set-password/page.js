"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "../../services/api";

export default function SetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await api.post(
        "/auth/set-password",
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Save token and redirect
      localStorage.setItem("token", token);
      router.push("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to set password");
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <main className="flex items-center justify-center h-screen bg-black text-white">
        <p>Invalid or missing token.</p>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden object-cover">
      <div className="relative flex justify-center items-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/chain.mp4" type="video/mp4" />
        </video>

        {/* Password Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg w-[320px] p-8 my-10 flex flex-col items-center"
        >
          <h2 className="text-2xl text-white mb-6 text-center">
            Set Your Password
          </h2>

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full mb-6 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-[270px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Password"}
          </button>
        </form>
      </div>
    </main>
  );
}
