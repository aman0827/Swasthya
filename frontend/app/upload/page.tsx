"use client";

import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl bg-zinc-900 p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-center">
          Upload Medical Report
        </h1>

        <p className="mt-3 text-center text-zinc-400">
          Upload your Blood Test, X-Ray, MRI, CT Scan or Prescription.
        </p>

        <div className="mt-8">
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3"
          />
        </div>

        <button
          className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700 transition"
        >
          Upload Report
        </button>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-4 w-full rounded-lg border border-zinc-600 py-3 hover:bg-zinc-800 transition"
        >
          Back to Dashboard
        </button>
      </div>
    </main>
  );
}