import StaticPageLayout from "../layouts/StaticPageLayout";

const licensingOptions = [
  {
    title: "Commercial campaigns",
    description:
      "License artworks for advertising, editorial features, and branded content. We negotiate usage duration, territories, and media formats tailored to your rollout plan.",
  },
  {
    title: "Hospitality & corporate",
    description:
      "Secure reproduction rights for hotels, co-working spaces, and corporate headquarters with custom sizing and framing support.",
  },
  {
    title: "Publishing & merchandise",
    description:
      "Collaborate with artists on book covers, album art, packaging, and limited-run merchandise backed by transparent royalty structures.",
  },
];

const processSteps = [
  "Share your brief, intended usage, timeline, and budget via licensing@paajuuprints.com.",
  "We shortlist suitable artists and confirm availability alongside preliminary fee estimates.",
  "Once approved, we draft agreements and coordinate deliverables, asset handovers, and reporting.",
];

const Licensing = () => {
  return (
    <StaticPageLayout
      title="Licensing"
      description="Partner with PaaJuu Prints artists for commissioned campaigns, brand collaborations, and reproduction rights."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Licensing" }]}
    >
      <div className="space-y-12">
        <section className="grid gap-8 md:grid-cols-3">
          {licensingOptions.map((item) => (
            <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
              <p className="mt-3 text-sm text-gray-600">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">How we work</h3>
          <ol className="mt-4 space-y-3 text-sm text-gray-600">
            {processSteps.map((step, index) => (
              <li key={step}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Usage rights</h3>
          <p className="mt-3 text-sm text-gray-600">
            All licensing agreements specify duration, geography, media channels, and exclusivity provisions. We ensure artists are properly credited wherever possible and provide guidance on renewals or extensions before contracts expire.
          </p>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Licensing;
