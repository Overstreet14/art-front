import StaticPageLayout from "../layouts/StaticPageLayout";

const ReturnPolicy = () => {
  return (
    <StaticPageLayout
      title="Returns & Exchanges"
      description="Your satisfaction matters. Review the steps below to request returns, exchanges, or damage claims."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Returns" }]}
    >
      <div className="space-y-12">
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Eligibility</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li>Unframed prints can be returned within 14 days of delivery.</li>
            <li>Items must remain in their original packaging with the certificate of authenticity intact.</li>
            <li>Framed works and bespoke commissions are final sale unless damaged in transit.</li>
            <li>Return shipping costs are covered by PaaJuu Prints for documented quality issues.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">How to request a return</h3>
          <ol className="mt-4 space-y-3 text-sm text-gray-600">
            <li>1. Email support@paajuuprints.com with your order number and reason for return.</li>
            <li>2. Attach clear photos of the artwork, packaging, and certificate if damage is involved.</li>
            <li>3. We will share a prepaid return label or schedule a courier pickup within 48 hours.</li>
            <li>4. Refunds are issued within 5 business days after the artwork arrives at our studio.</li>
          </ol>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Exchange options</h3>
          <p className="mt-3 text-sm text-gray-600">
            Prefer a different size or edition? We can credit the value of your original purchase toward another work. Exchanges are confirmed once the original piece is received in pristine condition.
          </p>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default ReturnPolicy;
