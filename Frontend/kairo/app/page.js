'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useSession } from 'next-auth/react' // Uncomment when using real auth

import Header from "@/components/Header";
import Second from "@/components/Second";
import Goals from "@/components/Goals";


export default function Home() {
const router = useRouter()

  // const { status } = useSession() // For real auth
  const isAuthenticated = false // 🔁 Set to true to test redirect

  useEffect(() => {
    if (isAuthenticated /* or status === 'authenticated' */) {
      router.replace('/dashboard')
    }
  }, [isAuthenticated]) // Add `status` to dependencies when using next-auth

  // Optionally render nothing or a loading screen while redirecting
  if (isAuthenticated) {
    return <div>Redirecting to dashboard...</div>
  }
  return (
    <div>
      <Header/>
      <Second/>
      <Goals/>
    </div>
  );
}
