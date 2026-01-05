import StaticPageLayout from "../layouts/StaticPageLayout";

const obligations = [
  "Provide accurate portfolio information and confirm that all submitted works are original creations.",
  "Maintain digital files at the specifications outlined by our production team to ensure consistent edition quality.",
  "Notify PaaJuu Prints of any exclusivity agreements or gallery representation that may affect distribution rights.",
];

const support = [
  "Royalty payments issued quarterly with detailed sales statements.",
  "Access to production specialists for proofing, framing, and colour calibration.",
  "Dedicated marketing support including social campaigns, newsletters, and editorial storytelling.",
];

const ArtistTerms = () => {
  return (
    <StaticPageLayout
      title="Artist Agreement"
      description="Outlines the working relationship between artists and PaaJuu Prints. Updated January 2026."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Artist Agreement" }]}
    >
      <div className="space-y-12">
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Artist commitments</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            {obligations.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">What we provide</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            {support.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Termination</h3>
          <p className="mt-3 text-sm text-gray-600">
            Both parties may terminate the agreement with 30 days' written notice. Existing orders will be fulfilled, and final royalties will be paid within 45 days of termination.
          </p>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default ArtistTerms;
