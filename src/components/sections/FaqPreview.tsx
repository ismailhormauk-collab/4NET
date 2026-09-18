import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/data/faqs";

export function FaqPreview() {
  const featured = faqs.filter((faq) => faq.featured);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: featured.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers about how IPTV 4NET works. Can't find what you're looking for?"
        />

        <div className="mt-10">
          <Accordion items={featured} />
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors hover:text-text"
          >
            View all frequently asked questions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
