import StaticPageLayout from "../layouts/StaticPageLayout";
import { Button } from "../components/ui/button";

const giftTiers = [
  {
    value: "KES 10,000",
    features: ["Digital delivery within minutes", "Personalised message card", "Valid on limited editions and framing"],
  },
  {
    value: "KES 25,000",
    features: ["Priority access to new releases", "Complimentary art consultation", "Redeemable online or in studio"],
  },
  {
    value: "KES 50,000+",
    features: ["Bespoke gifting concierge", "Custom packaging for physical cards", "Group gifting balance tracking"],
  },
];

const GiftCards = () => {
  return (
    <StaticPageLayout
      title="Gift Cards"
      description="Share the joy of collecting African art. Choose a preset amount or craft a custom balance for any occasion."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Gift Cards" }]}
    >
      <div className="space-y-12">
        <section className="grid gap-8 md:grid-cols-3">
          {giftTiers.map((tier) => (
            <article key={tier.value} className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">{tier.value}</h2>
              <ul className="mt-5 flex-1 space-y-3 text-sm text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6" variant="secondary">
                Purchase
              </Button>
            </article>
          ))}
        </section>

        <section className="rounded-xl bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">How it works</h3>
          <ol className="mt-4 space-y-3 text-sm text-gray-600">
            <li>1. Select a gift card value or request a custom denomination.</li>
            <li>2. Add a personal note and recipient email or choose a physical delivery kit.</li>
            <li>3. Redeemable instantly online or in-person at the PaaJuu Prints showroom.</li>
          </ol>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default GiftCards;
