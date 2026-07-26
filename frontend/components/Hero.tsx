export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6 text-center">
      <span className="rounded-full border border-blue-500 px-4 py-1 text-sm text-blue-400">
        AI Powered Medical Report Analysis
      </span>

      <h1 className="mt-8 max-w-4xl text-6xl font-extrabold leading-tight">
        Understand Your
        <span className="text-blue-500"> Medical Reports </span>
        in Seconds
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Upload your blood test, prescription, or medical report and let AI
        explain every value in simple language.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-lg bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700">
          Upload Report
        </button>

        <button className="rounded-lg border border-gray-700 px-8 py-4 hover:bg-gray-800">
          Learn More
        </button>
      </div>
    </section>
  );
}