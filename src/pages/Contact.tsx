import { useState } from "react";
import StaticPageLayout from "../layouts/StaticPageLayout";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please complete the required fields.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    toast.success("Thank you for reaching out!", {
      description: "We will respond within two business days.",
    });
    setFormState({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <StaticPageLayout
      title="Contact"
      description="Reach our collector support, artist relations, or press team. We respond within 48 hours on business days."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
    >
      <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Send us a message</h2>
            <p className="mt-2 text-base text-gray-600">
              Use the form below for commission inquiries, order questions, or partnership proposals. Our concierge team monitors requests around the clock.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1">
                <span className="text-sm font-medium text-gray-700">Full name *</span>
                <Input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-medium text-gray-700">Email *</span>
                <Input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label className="space-y-1">
              <span className="text-sm font-medium text-gray-700">Subject</span>
              <Input
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="How can we help?"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm font-medium text-gray-700">Message *</span>
              <Textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your project or question"
                rows={6}
                required
              />
            </label>
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </section>

        <aside className="space-y-8 rounded-xl bg-white p-6 shadow-sm">
          <section>
            <h3 className="text-lg font-semibold text-gray-900">Collector support</h3>
            <p className="mt-2 text-sm text-gray-600">
              <span className="block">support@paajuuprints.com</span>
              <span className="block">+254 712 000 000</span>
              <span className="block">Mon to Fri, 9am – 6pm EAT</span>
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-gray-900">Artist relations</h3>
            <p className="mt-2 text-sm text-gray-600">
              <span className="block">artists@paajuuprints.com</span>
              <span className="block">Portfolio reviews every first Monday</span>
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-gray-900">Press & media</h3>
            <p className="mt-2 text-sm text-gray-600">
              <span className="block">press@paajuuprints.com</span>
              <span className="block">Request lookbooks, interviews, and event passes.</span>
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-gray-900">Studio & showroom</h3>
            <p className="mt-2 text-sm text-gray-600">
              54 Riverside Drive, Suite 3B<br />Nairobi, Kenya
            </p>
          </section>
        </aside>
      </div>
    </StaticPageLayout>
  );
};

export default Contact;
