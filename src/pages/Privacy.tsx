import StaticPageLayout from "../layouts/StaticPageLayout";

const sections = [
  {
    title: "Information we collect",
    items: [
      "Account details such as name, email, and password when you sign up.",
      "Order information including shipping address, payment method, and transaction history.",
      "Art preferences captured through wishlists, browsing activity, and saved collections.",
      "Communications you send to our support or artist relations teams.",
    ],
  },
  {
    title: "How we use your data",
    items: [
      "Process orders, fulfil deliveries, and provide collector support.",
      "Recommend artworks, exhibitions, and content tailored to your interests.",
      "Improve our platform through analytics, usability testing, and feedback loops.",
      "Meet legal obligations including tax, accounting, and compliance requirements.",
    ],
  },
  {
    title: "Your choices",
    items: [
      "Update profile information, notification preferences, and password inside your account settings.",
      "Opt out of marketing emails at any time via the unsubscribe link or by contacting support.",
      "Request access, correction, or deletion of your personal data by emailing privacy@paajuuprints.com.",
    ],
  },
];

const Privacy = () => {
  return (
    <StaticPageLayout
      title="Privacy Policy"
      description="Last updated: January 2026. We respect your privacy and explain how we handle personal information below."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
    >
      <div className="space-y-12">
        {sections.map((section) => (
          <section key={section.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Retention & security</h3>
          <p className="mt-3 text-sm text-gray-600">
            We store records only for as long as necessary to provide services or meet legal obligations. Payments are processed by PCI-DSS compliant providers, and sensitive data is encrypted in transit and at rest.
          </p>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Privacy;
