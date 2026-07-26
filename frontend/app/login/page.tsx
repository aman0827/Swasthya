"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900 p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-center">Welcome Back</h1>

        <p className="mt-2 text-center text-zinc-400">
          Login to your Swasthya account
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-blue-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 pr-16 outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-zinc-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}