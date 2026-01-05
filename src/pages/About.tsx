import StaticPageLayout from "../layouts/StaticPageLayout";

const About = () => {
  return (
    <StaticPageLayout
      title="About PaaJuu Prints"
      description="We amplify African creatives by connecting their work with collectors worldwide, blending fine-art craftsmanship with modern print technology."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
    >
      <section className="space-y-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Story</h2>
            <p className="text-base leading-relaxed text-gray-600">
              PaaJuu Prints began as a collective of Nairobi-based artists who wanted better access to archival-quality printing and global audiences. What started as a studio project has grown into a platform that commissions, curates, and distributes contemporary African artwork in limited editions.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              We invest in long-term partnerships with artists, offer equitable revenue splits, and provide the production infrastructure needed to present each piece at museum-grade standards. Today we collaborate with more than 120 painters, photographers, illustrators, and digital illustrators across six countries.
            </p>
          </div>
          <div className="rounded-xl bg-gray-900 p-8 text-gray-100 shadow-lg">
            <h3 className="text-xl font-semibold">Impact Snapshot</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                <div>
                  <p className="text-lg font-semibold">120+ artists represented</p>
                  <p className="text-sm text-gray-300">Each artist receives transparent dashboards and quarterly royalty statements.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                <div>
                  <p className="text-lg font-semibold">15 print partners</p>
                  <p className="text-sm text-gray-300">We collaborate with archival-grade print labs and framers that use FSC-certified materials.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                <div>
                  <p className="text-lg font-semibold">40% repeat collectors</p>
                  <p className="text-sm text-gray-300">Collectors join quarterly previews, studio visits, and private viewing rooms.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Mission</h3>
            <p className="text-base text-gray-600">
              Empower African storytellers by giving them the tools, resources, and audience reach to thrive sustainably.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Vision</h3>
            <p className="text-base text-gray-600">
              Be the most trusted platform for discovering, commissioning, and collecting contemporary African art and design.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Values</h3>
            <ul className="space-y-2 text-base text-gray-600">
              <li>Transparency in artist contracts and collector pricing</li>
              <li>Sustainable sourcing across paper, ink, and framing</li>
              <li>Inclusive programming and creative education</li>
              <li>Bold experimentation with heritage narratives</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">What We Offer</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Limited Editions</h3>
              <p className="mt-3 text-base text-gray-600">
                Each release is catalogued with certificates of authenticity, edition numbering, artist statements, and framing options curated by our specialists.
              </p>
            </article>
            <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Bespoke Commissions</h3>
              <p className="mt-3 text-base text-gray-600">
                Our team facilitates custom commissions for hospitality, corporate collections, and private residences, aligning briefs with artists whose practice matches your vision.
              </p>
            </article>
            <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Education & Programming</h3>
              <p className="mt-3 text-base text-gray-600">
                We host studio visits, panel talks, and digital workshops focused on collecting practices, conservation, and creative entrepreneurship.
              </p>
            </article>
            <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Artist Services</h3>
              <p className="mt-3 text-base text-gray-600">
                Artists receive portfolio documentation, rights management support, and local fabrication resources to scale their practice responsibly.
              </p>
            </article>
          </div>
        </div>
      </section>
    </StaticPageLayout>
  );
};

export default About;
