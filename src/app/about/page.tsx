import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target, Users, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About IPTV 4NET | Streaming Service & Support",
  description:
    "Learn about IPTV 4NET, a streaming subscription service focused on simple setup, flexible plans and real customer support via WhatsApp and Telegram.",
  path: "/about",
  keywords: ["iptv4net", "iptv 4net", "4net iptv"],
});

const values = [
  {
    icon: Target,
    title: "Straightforward Plans",
    description:
      "We keep pricing and features clear, with no confusing tiers or hidden charges.",
  },
  {
    icon: Users,
    title: "Real Human Support",
    description:
      "Every message on WhatsApp or Telegram reaches an actual person on our team, not a bot.",
  },
  {
    icon: ShieldCheck,
    title: "Respect for Your Privacy",
    description:
      "We use secure payment methods and never share your personal information with third parties.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        crumbs={[{ label: "About", href: "/about" }]}
        title="Streaming, Made Simple"
        description="IPTV 4NET was built around one idea: getting access to your streaming subscription shouldn't be complicated."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 text-base leading-relaxed text-text-muted sm:text-lg">
            <p>
              IPTV 4NET is a streaming subscription service focused on making access to compatible
              streaming content simple. Instead of complicated installs and confusing pricing, we
              offer clear{" "}
              <Link href="/pricing" className="font-semibold text-accent hover:underline">
                subscription plans
              </Link>
              , guided setup for your device, and a support team you can actually reach.
            </p>
            <p>
              Our plans are built around flexibility — choose a subscription length from 1 to 12
              months and a device count that matches your household. Whether you&apos;re setting up
              a single Smart TV or multiple devices across your home, our{" "}
              <Link href="/support" className="font-semibold text-accent hover:underline">
                support team
              </Link>{" "}
              is available on WhatsApp and Telegram to help you get started and stay online.
            </p>
            <p>
              We also work with individuals interested in reselling subscriptions through our{" "}
              <Link href="/reseller" className="font-semibold text-accent hover:underline">
                reseller program
              </Link>
              , giving them the tools and support to manage their own customer base.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Value" title="How We Approach Streaming Support" />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass-panel flex flex-col gap-3 rounded-2xl border border-border p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-text">{title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-semibold text-text sm:text-3xl">Have a question for us?</h2>
            <Button href={siteConfig.whatsapp.link} external variant="whatsapp" size="lg">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
