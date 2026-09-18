import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PricingSelector } from "@/components/PricingSelector";
import { DeviceCompatibility } from "@/components/sections/DeviceCompatibility";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV 4NET Pricing | Flexible Plans for 1–4 Devices",
  description:
    "Compare IPTV 4NET pricing for 1 to 4 devices. Flexible 1, 3, 6 and 12-month plans with transparent pricing and no hidden fees.",
  path: "/pricing",
  keywords: ["iptv4net pricing", "iptv 4net plans", "iptv subscription plans"],
});

const trustPoints = [
  {
    icon: Zap,
    title: "Fast Order Processing",
    description:
      "Once your payment is confirmed, we send your activation details via WhatsApp or Telegram.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description:
      "We use secure payment methods and never share your personal information with third parties.",
  },
  {
    icon: HeartHandshake,
    title: "Real Customer Support",
    description:
      "Our team is available on WhatsApp and Telegram for setup help and any questions you have.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        crumbs={[{ label: "Pricing", href: "/pricing" }]}
        title="IPTV 4NET Subscription Plans"
        description="Simple plans with no complicated setup. Choose the number of devices and the subscription length that fits your needs."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingSelector />

          <p className="mt-10 text-center text-sm text-text-muted">
            Not sure which plan is right for you?{" "}
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Chat with us on WhatsApp
            </a>{" "}
            and we&apos;ll help you decide, or check our{" "}
            <Link href="/faq" className="font-semibold text-accent hover:underline">
              FAQ
            </Link>{" "}
            for quick answers.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {trustPoints.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass-panel flex flex-col gap-3 rounded-2xl border border-border p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-text">{title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DeviceCompatibility />

      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            title="Still have questions about pricing?"
            description="Our team is available to help you compare plans and get set up."
          />
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={siteConfig.whatsapp.link} external variant="whatsapp" size="lg">
              Chat on WhatsApp — Get Help Choosing
            </Button>
            <p className="text-xs text-text-dim">
              Need setup help instead? Visit our{" "}
              <Link href="/support" className="font-semibold text-accent hover:underline">
                Support page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
