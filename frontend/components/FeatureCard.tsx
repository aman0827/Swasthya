type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 p-6 hover:border-blue-500 transition">
      <h3 className="mb-3 text-xl font-semibold">
        {icon} {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}