import StaticPageLayout from "../layouts/StaticPageLayout";

const cookieCategories = [
  {
    title: "Essential cookies",
    description: "Required for core site functionality such as secure login, shopping cart persistence, and payment processing.",
  },
  {
    title: "Analytics cookies",
    description: "Help us understand how visitors interact with the site so we can improve navigation, search, and content relevance.",
  },
  {
    title: "Marketing cookies",
    description: "Allow us to deliver personalised recommendations and measure the performance of campaigns across platforms.",
  },
];

const Cookies = () => {
  return (
    <StaticPageLayout
      title="Cookie Policy"
      description="We use cookies to enhance your browsing experience. You can adjust preferences at any time."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Cookie Policy" }]}
    >
      <div className="space-y-12">
        <section className="grid gap-8 md:grid-cols-3">
          {cookieCategories.map((cookie) => (
            <article key={cookie.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">{cookie.title}</h2>
              <p className="mt-3 text-sm text-gray-600">{cookie.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Managing preferences</h3>
          <p className="mt-3 text-sm text-gray-600">
            Adjust cookie settings through the banner that appears on your first visit or by accessing Settings → Privacy. You may also clear cookies within your browser settings, though essential features may stop working as intended.
          </p>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Cookies;
