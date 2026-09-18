import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactCards } from "@/components/ContactCards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact IPTV 4NET | WhatsApp & Telegram Support",
  description:
    "Contact IPTV 4NET on WhatsApp or Telegram for subscription orders, setup help, billing questions and general support.",
  path: "/contact",
  keywords: ["iptv4net support", "iptv 4net support", "contact iptv4net"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Contact", href: "/contact" }]}
        title="Get in Touch"
        description="Have a question about plans, setup or your subscription? Message our team directly — we typically respond quickly."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ContactCards />
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            title="Looking for something specific?"
            description={
              <>
                Check our{" "}
                <Link href="/faq" className="font-semibold text-accent hover:underline">
                  FAQ
                </Link>{" "}
                for quick answers, browse{" "}
                <Link href="/installation" className="font-semibold text-accent hover:underline">
                  installation guides
                </Link>{" "}
                for device-specific setup help, or view our{" "}
                <Link href="/pricing" className="font-semibold text-accent hover:underline">
                  subscription plans
                </Link>
                .
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
