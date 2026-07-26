import FeatureCard from "@/components/FeatureCard";

export default function Features() {
  return (
    <section className="px-8 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Why Choose Swasthya?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          icon="🤖"
          title="AI Analysis"
          description="AI explains your medical reports in simple language."
        />

        <FeatureCard
          icon="📊"
          title="Report Insights"
          description="Highlights abnormal values and important findings."
        />

        <FeatureCard
          icon="💬"
          title="AI Chat"
          description="Ask questions about your uploaded report."
        />

        <FeatureCard
          icon="🔒"
          title="Secure"
          description="Your reports remain private and protected."
        />
      </div>
    </section>
  );
}