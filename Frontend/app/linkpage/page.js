'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import api from '../../services/api';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/login', { email, password });

      // ---- THIS IS THE MOST IMPORTANT PART ----
      // We get the token from the backend response.
      const { token, user } = response.data;

      // Save the token to localStorage. This is how the browser "remembers" the user.
      localStorage.setItem('token', token);

      // Optional: Save user details too
      localStorage.setItem('user', JSON.stringify(user));

      alert('Login Successful!');
      router.push('/getstarted');

    } catch (err) {
      console.error('Login error:', err.response?.data?.msg || err.message);
      setError(
        err.response?.data?.message ||
        err.response?.data?.msg ||
        'Failed to log in. Please check your credentials.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // Redirect the user to the backend's Google OAuth endpoint
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/chain.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <form onSubmit={handleLogin} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg w-[320px] p-8 flex flex-col items-center">
          <h2 className="text-2xl text-white mb-8 text-center">Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mb-4 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mb-6 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

          <button type="submit" disabled={loading} className="w-[270px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] disabled:opacity-50">
            {loading ? 'Logging In...' : 'Log In'}
          </button>

          <div className="text-white -mt-2 my-2">or</div>

          <button type="button" onClick={handleGoogleSignIn} className="cursor-pointer text-black flex gap-2 items-center bg-white px-4 py-3 rounded-lg font-medium text-sm hover:bg-zinc-300 transition-all ease-in duration-200 w-[270px] justify-center">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6">
               {/* Google SVG paths */}
              <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107" />
              <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00" />
              <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50" />
              <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2" />
            </svg>
            Continue with Google
          </button>

          <div className="mt-10 flex items-center space-x-2">
            <Image src="/logo.png" alt="Kairo" width={100} height={100} />
          </div>
        </form>
      </div>
    </div>
  );
}
