import StaticPageLayout from "../layouts/StaticPageLayout";
import { Button } from "../components/ui/button";

const features = [
  {
    outlet: "The Art Gazette",
    headline: "PaaJuu Prints Reimagines African Editions",
    date: "July 2025",
    summary: "A deep dive into our artist-first business model and how we support emerging talent with long-term royalties.",
  },
  {
    outlet: "Design Week Africa",
    headline: "Inside Nairobi's Fastest-Growing Print Studio",
    date: "April 2025",
    summary: "A photo tour of our production lab and framing facilities, highlighting sustainable materials sourcing.",
  },
  {
    outlet: "Creative Review",
    headline: "Collecting Afrofuturism: Platforms to Watch",
    date: "December 2024",
    summary: "Our digital exhibitions and augmented reality previews featured as a case study for immersive collecting experiences.",
  },
];

const Press = () => {
  return (
    <StaticPageLayout
      title="Press"
      description="Download our media kit, brand assets, and recent coverage. For interview requests, reach press@paajuuprints.com."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Press" }]}
    >
      <div className="space-y-12">
        <section className="grid gap-6">
          {features.map((feature) => (
            <article key={feature.headline} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{feature.outlet}</p>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">{feature.headline}</h2>
                  <p className="mt-1 text-sm text-gray-500">{feature.date}</p>
                  <p className="mt-4 text-sm text-gray-600">{feature.summary}</p>
                </div>
                <Button variant="outline">Read article</Button>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Media kit</h3>
          <p className="mt-3 text-sm text-gray-600">
            Download our logo suite, founder bios, brand guidelines, and high-resolution imagery for editorial use.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button>Download press kit</Button>
            <Button variant="secondary">Request interview</Button>
          </div>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Press;
