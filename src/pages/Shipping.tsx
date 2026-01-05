import StaticPageLayout from "../layouts/StaticPageLayout";

const regions = [
  {
    title: "Kenya & East Africa",
    timeline: "1-3 business days",
    details: "Fulfilled from our Nairobi print studio with next-day courier options in major cities.",
  },
  {
    title: "Rest of Africa",
    timeline: "4-7 business days",
    details: "Regional partners handle customs clearance with proactive tracking updates via SMS and email.",
  },
  {
    title: "Global",
    timeline: "5-10 business days",
    details: "DHL Express delivers worldwide. Framed works travel in custom-built crates for transit safety.",
  },
];

const packaging = [
  "Unframed prints ship flat between acid-free boards with corner guards.",
  "Framed works and canvas pieces are packed in foam-lined wooden crates.",
  "All shipments include humidity indicators and shock sensors to trace handling.",
];

const insurance = [
  "Complimentary transit insurance up to KES 150,000 per shipment.",
  "Collectors can request additional coverage at checkout for higher-value pieces.",
  "If damage occurs, document the packaging and artwork within 48 hours for a priority replacement review.",
];

const Shipping = () => {
  return (
    <StaticPageLayout
      title="Shipping"
      description="We ship archival prints and framed works with dedicated fine-art logistics partners across Kenya and worldwide."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Shipping" }]}
    >
      <div className="space-y-12">
        <section className="grid gap-8 md:grid-cols-3">
          {regions.map((region) => (
            <article key={region.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">{region.title}</h2>
              <p className="mt-2 text-sm text-gray-500">{region.timeline}</p>
              <p className="mt-3 text-sm text-gray-600">{region.details}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Packaging standards</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {packaging.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Insurance & tracking</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {insurance.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Customs & duties</h3>
          <p className="mt-3 text-sm text-gray-600">
            International orders may incur import duties or VAT based on your local regulations. We pre-fill all customs documentation with artwork descriptions and edition values. Customers are responsible for settling local taxes upon delivery.
          </p>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Shipping;
