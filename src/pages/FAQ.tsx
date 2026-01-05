import StaticPageLayout from "../layouts/StaticPageLayout";

const faqs = [
  {
    question: "How are the prints produced?",
    answer:
      "We work with archival-certified printers using 12-color pigment technology on museum-grade cotton rag papers. Each piece is inspected, numbered, and signed before fulfillment.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. We currently deliver to more than 40 countries via DHL Express and trusted regional couriers. Shipping fees are calculated at checkout based on destination and framing options.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Unframed prints can be returned within 14 days of delivery in their original condition. Framed works and commissions are final sale, but we assist with any transit damage claims immediately.",
  },
  {
    question: "How are artists compensated?",
    answer:
      "Artists receive a guaranteed minimum per edition plus royalties on every sale. We settle payments quarterly with transparent statements available in the artist dashboard.",
  },
  {
    question: "Can I request a commission?",
    answer:
      "Yes. Submit your brief through the contact form, including desired medium, size, timeline, and budget. Our curatorial team will propose artists who fit your vision within five business days.",
  },
  {
    question: "Do you offer trade accounts?",
    answer:
      "Interior designers, hospitality groups, galleries, and corporate buyers can apply for trade pricing. We provide lookbooks, samples, and staging support for approved partners.",
  },
];

const FAQ = () => {
  return (
    <StaticPageLayout
      title="Frequently Asked Questions"
      description="Everything you need to know about sourcing, framing, and caring for PaaJuu Prints editions."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
    >
      <div className="space-y-12">
        <section className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="mt-3 text-base text-gray-600">{faq.answer}</p>
            </article>
          ))}
        </section>
        <section className="rounded-lg bg-gray-900 p-8 text-gray-100">
          <h3 className="text-xl font-semibold">Still have a question?</h3>
          <p className="mt-3 text-sm text-gray-300">
            Our concierge team is available via chat, email, or phone. We also schedule video consultations for custom framing or large-scale projects.
          </p>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default FAQ;
