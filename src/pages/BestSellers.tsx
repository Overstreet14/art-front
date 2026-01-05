import StaticPageLayout from "../layouts/StaticPageLayout";

const topSeries = [
  {
    name: "City Rhythms",
    artist: "Nia Okoye",
    details: "Edition of 50 · Giclee on Hahnemühle Photo Rag · 24 x 36 in",
    description:
      "A kinetic celebration of African megacities rendered through layered acrylic scans and neon graphite accents.",
  },
  {
    name: "Nomad Landscapes",
    artist: "Otieno Kariuki",
    details: "Edition of 35 · Hand-pulled screen print · 18 x 24 in",
    description:
      "Soft gradients overlap with precise line-work to document shifting desert terrain and migratory routes.",
  },
  {
    name: "Pulse of the Coast",
    artist: "Amina Diouf",
    details: "Edition of 75 · Archival pigment print · 30 x 40 in",
    description:
      "Long-exposure photography meets digital painting to capture coastal nightlife and ceremonial gatherings.",
  },
];

const perks = [
  "Concierge framing guidance for each best seller",
  "Certificate of authenticity signed by the artist",
  "Priority access to matching companion works",
  "Trade pricing available for hospitality and corporate installations",
];

const BestSellers = () => {
  return (
    <StaticPageLayout
      title="Best Sellers"
      description="Collector favourites that consistently sell out their editions. Limited restocks occur when artists release companion works."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Best Sellers" }]}
    >
      <div className="space-y-12">
        <section className="grid gap-8 md:grid-cols-2">
          {topSeries.map((series) => (
            <article key={series.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">{series.name}</h2>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gray-500">
                {series.artist}
              </p>
              <p className="mt-3 text-sm text-gray-500">{series.details}</p>
              <p className="mt-4 text-base text-gray-600">{series.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Collector perks</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default BestSellers;
