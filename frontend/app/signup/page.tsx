"use client";

import { useState } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900 p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-center">Create Account</h1>
        <p className="mt-2 text-center text-zinc-400">
          Join Swasthya and manage your health reports.
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-blue-400"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-blue-500"
          />

          <label className="flex items-center gap-2 text-sm text-zinc-300">
            <input type="checkbox" />
            I agree to the Terms & Conditions
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}