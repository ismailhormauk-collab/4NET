import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/lib/data/faqs";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV 4NET FAQ | Plans, Setup & Device Questions",
  description:
    "Find answers to common IPTV 4NET questions about plans, compatible devices, setup, subscriptions and customer support.",
  path: "/faq",
  keywords: ["iptv4net faq", "iptv 4net questions", "iptv4net questions"],
});

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="FAQ"
        crumbs={[{ label: "FAQ", href: "/faq" }]}
        title="Frequently Asked Questions"
        description="Everything you need to know about IPTV 4NET plans, setup and support."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion items={faqs} />

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-border bg-white/[0.02] p-10 text-center">
            <h2 className="text-xl font-semibold text-text">Still have questions?</h2>
            <p className="max-w-md text-sm leading-relaxed text-text-muted">
              Our team is available on WhatsApp and Telegram to help with anything not covered
              here.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.whatsapp.link} external variant="whatsapp">
                Chat on WhatsApp
              </Button>
              <Button href={siteConfig.telegram.link} external variant="telegram">
                Message on Telegram
              </Button>
            </div>
            <p className="mt-2 text-xs text-text-dim">
              Or explore{" "}
              <Link href="/pricing" className="font-semibold text-accent hover:underline">
                pricing plans
              </Link>
              ,{" "}
              <Link href="/installation" className="font-semibold text-accent hover:underline">
                installation guides
              </Link>{" "}
              or the{" "}
              <Link href="/support" className="font-semibold text-accent hover:underline">
                support page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
