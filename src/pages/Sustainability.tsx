import StaticPageLayout from "../layouts/StaticPageLayout";

const initiatives = [
  {
    title: "Responsible materials",
    body: "We work exclusively with FSC-certified woods, recycled aluminium, and acid-free conservation boards. Our inks are water-based and free of volatile organic compounds.",
  },
  {
    title: "Circular framing program",
    body: "Collectors can return frames for refurbishment, resale, or donation. We offer credits toward future purchases when frames are reused.",
  },
  {
    title: "Artist studio grants",
    body: "A portion of every sale funds micro-grants for artist-led community initiatives across education, climate action, and cultural preservation.",
  },
];

const sustainabilityGoals = [
  "Achieve carbon-neutral operations by 2027 through local sourcing and verified offsets.",
  "Expand zero-plastic packaging to all product lines in 2026.",
  "Publish annual impact reports audited by independent cultural advisors.",
];

const Sustainability = () => {
  return (
    <StaticPageLayout
      title="Sustainability"
      description="Sustainable craft is at the heart of our promise to artists and collectors alike."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Sustainability" }]}
    >
      <div className="space-y-12">
        <section className="grid gap-8 md:grid-cols-3">
          {initiatives.map((item) => (
            <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
              <p className="mt-3 text-sm text-gray-600">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">2026 Goals</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            {sustainabilityGoals.map((goal) => (
              <li key={goal} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Sustainability;
