import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-zinc-800 px-8 py-5">
        <div>
          <h1 className="text-3xl font-bold">👋 Welcome, Aman</h1>
          <p className="text-zinc-400">
            Here's an overview of your health reports.
          </p>
        </div>

        <button className="rounded-lg bg-red-600 px-5 py-2 font-semibold transition hover:bg-red-700">
          Logout
        </button>
      </header>

      {/* Cards */}
      <div className="grid gap-6 p-8 md:grid-cols-3">
        {/* Upload Report */}
        <div className="rounded-xl bg-zinc-900 p-6 shadow-lg">
          <h2 className="text-xl font-semibold">📄 Upload Report</h2>

          <p className="mt-2 text-zinc-400">
            Upload your blood test, X-ray, MRI, or prescription.
          </p>

          <Link href="/upload">
            <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 transition hover:bg-blue-700">
              Upload PDF
            </button>
          </Link>
        </div>

        {/* Recent Reports */}
        <div className="rounded-xl bg-zinc-900 p-6 shadow-lg">
          <h2 className="text-xl font-semibold">📁 Recent Reports</h2>

          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>🩸 Blood Test.pdf</li>
            <li>❤️ ECG Report.pdf</li>
            <li>🫀 Liver Function.pdf</li>
          </ul>
        </div>

        {/* AI Summary */}
        <div className="rounded-xl bg-zinc-900 p-6 shadow-lg">
          <h2 className="text-xl font-semibold">🤖 AI Health Summary</h2>

          <p className="mt-4 text-zinc-400">
            Upload a report to receive an easy-to-understand explanation,
            highlighted abnormalities, and personalized health insights.
          </p>
        </div>
      </div>

      {/* Health Tip */}
      <section className="px-8 pb-8">
        <div className="rounded-xl bg-zinc-900 p-6">
          <h2 className="text-2xl font-semibold">💡 Daily Health Tip</h2>

          <p className="mt-3 text-zinc-400">
            Drink at least 2–3 liters of water daily and exercise regularly
            for better heart health.
          </p>
        </div>
      </section>
    </main>
  );
}