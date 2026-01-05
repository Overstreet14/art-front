import StaticPageLayout from "../layouts/StaticPageLayout";

const clauses = [
  {
    title: "Using our platform",
    body: "You must be at least 18 years old to create an account. Provide accurate information and maintain the confidentiality of your login credentials. We reserve the right to suspend accounts that violate policies or misuse content.",
  },
  {
    title: "Purchases & payments",
    body: "Prices are listed in Kenyan Shillings unless otherwise stated. Taxes and shipping fees are calculated at checkout. Once an edition is sold out, PaaJuu Prints is not obligated to restock or reproduce the work.",
  },
  {
    title: "Intellectual property",
    body: "All artworks, imagery, and editorial content remain the copyright of their respective creators. You may not reproduce, modify, or distribute any content without prior written permission.",
  },
  {
    title: "Liability",
    body: "We take reasonable steps to ensure the accuracy of information on our platform. However, PaaJuu Prints is not liable for indirect damages arising from your use of the site beyond the purchase price of the artwork in question.",
  },
];

const Terms = () => {
  return (
    <StaticPageLayout
      title="Terms of Service"
      description="Effective January 2026. Please review the terms that govern your use of PaaJuu Prints services."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Terms of Service" }]}
    >
      <div className="space-y-12">
        {clauses.map((clause) => (
          <section key={clause.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">{clause.title}</h2>
            <p className="mt-3 text-sm text-gray-600">{clause.body}</p>
          </section>
        ))}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
          <p className="mt-3 text-sm text-gray-600">
            Questions about the Terms of Service can be directed to legal@paajuuprints.com. We provide at least 30 days' notice before material changes take effect.
          </p>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Terms;
