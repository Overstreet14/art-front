import StaticPageLayout from "../layouts/StaticPageLayout";

const collections = [
  {
    title: "Modern Heritage",
    description:
      "Bold reinterpretations of folklore, textiles, and architectural motifs from across the continent, curated quarterly.",
    highlights: ["Mixed media on cotton rag", "6 limited editions per release", "Curated by guest art historians"],
  },
  {
    title: "Coastal Light",
    description:
      "Photography and illustration capturing the atmosphere of coastal cities from Lamu to Cape Town.",
    highlights: ["Archival pigment prints", "Matte and metallic finishes", "Frames handcrafted from reclaimed mvule"],
  },
  {
    title: "Future Forms",
    description:
      "Digital artists exploring Afrofuturist narratives, immersive 3D renderings, and motion-enabled prints.",
    highlights: ["Augmented reality companion app", "Animation-ready formats", "Collectors' roundtable access"],
  },
];

const Collections = () => {
  return (
    <StaticPageLayout
      title="Curated Collections"
      description="Discover rotating thematic releases built with curators, cultural institutions, and partner residencies."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Collections" }]}
    >
      <div className="space-y-12">
        <section className="space-y-8">
          {collections.map((collection) => (
            <article key={collection.title} className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-semibold text-gray-900">{collection.title}</h2>
                  <p className="mt-3 text-base text-gray-600">{collection.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {collection.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
        <section className="space-y-4 rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Upcoming drops</h3>
          <p className="text-sm text-gray-600">
            Join the newsletter to unlock early access, studio walkthroughs, and first-release pricing. Members receive 24-hour previews before editions go live.
          </p>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Collections;
