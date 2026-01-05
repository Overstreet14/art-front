import StaticPageLayout from "../layouts/StaticPageLayout";
import { Button } from "../components/ui/button";

const openings = [
  {
    title: "Curatorial Producer",
    location: "Nairobi, Kenya",
    type: "Full-time · Hybrid",
    description:
      "Develop exhibition programs, artist commissions, and editorial narratives across digital and physical channels.",
  },
  {
    title: "Senior Print Technician",
    location: "Nairobi, Kenya",
    type: "Full-time · On-site",
    description:
      "Oversee color management, print calibration, and finishing for archival editions in collaboration with artists.",
  },
  {
    title: "Growth Marketing Lead",
    location: "Remote, Africa",
    type: "Full-time · Remote",
    description:
      "Drive collector acquisition campaigns, CRM automation, and partnerships with cultural institutions.",
  },
];

const benefits = [
  "Health cover and wellness stipend",
  "Annual creative residency allowance",
  "Flexible work policy with remote options",
  "Collector discount on limited editions",
];

const Careers = () => {
  return (
    <StaticPageLayout
      title="Careers"
      description="Join a multidisciplinary team shaping the future of African art distribution and storytelling."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
    >
      <div className="space-y-12">
        <section className="space-y-6">
          <p className="text-base text-gray-600">
            PaaJuu Prints hires creatives, technologists, and operations experts who believe in elevating artists with integrity. We welcome applications from across the continent and diasporic communities.
          </p>
          <div className="grid gap-6">
            {openings.map((role) => (
              <article key={role.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 justify-between md:flex-row md:items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{role.title}</h2>
                    <p className="mt-1 text-sm text-gray-500">{role.location} · {role.type}</p>
                    <p className="mt-3 text-sm text-gray-600">{role.description}</p>
                  </div>
                  <Button variant="secondary">View role</Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Benefits & culture</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Careers;
