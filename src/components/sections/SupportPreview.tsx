import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCards } from "@/components/ContactCards";

export function SupportPreview() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Support"
          title="Need Help? We're Here."
          description="Our support team is available to help with setup, subscriptions and general questions."
        />
        <div className="mt-12">
          <ContactCards />
        </div>
      </div>
    </section>
  );
}
