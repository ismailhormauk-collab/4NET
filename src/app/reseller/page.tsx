import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Wallet, Server, TrendingUp, Headset, UserPlus, Settings, Rocket } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV 4NET Reseller Program | Resell Streaming Subscriptions",
  description:
    "Learn about the IPTV 4NET reseller program — competitive pricing, a reliable platform and real support for building your own streaming business.",
  path: "/reseller",
  keywords: ["iptv4net reseller", "iptv 4net reseller", "iptv reseller program"],
});

const reasons = [
  {
    icon: Wallet,
    title: "Competitive Pricing",
    description:
      "Access reseller rates so you can set your own pricing for the customers you manage.",
  },
  {
    icon: Server,
    title: "Reliable Platform",
    description:
      "Built on the same infrastructure that powers every IPTV 4NET subscription.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Management",
    description: "Manage your customer base at your own pace, with tools that scale as you grow.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description: "Direct WhatsApp and Telegram access to our team for reseller questions and help.",
  },
];

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Contact Us",
    description: "Message our team on WhatsApp or Telegram to discuss the reseller program.",
  },
  {
    number: "2",
    icon: Settings,
    title: "Get Reseller Access",
    description: "We'll walk you through requirements and get you set up to manage customers.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Grow Your Business",
    description: "Manage your customers and grow your subscription business at your own pace.",
  },
];

export default function ResellerPage() {
  return (
    <>
      <PageHero
        eyebrow="Reseller Program"
        crumbs={[{ label: "Reseller", href: "/reseller" }]}
        title="Build Your Own Streaming Subscription Business"
        description="Start your own streaming subscription business with a reliable platform, competitive pricing and real support behind you."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={siteConfig.whatsapp.link} external variant="whatsapp" size="lg">
            Contact Us on WhatsApp
          </Button>
          <Button href={siteConfig.telegram.link} external variant="telegram" size="lg">
            Message on Telegram
          </Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Become a Reseller"
            title="Built for People Who Want to Run Their Own Business"
            description="IPTV 4NET gives you the tools and support to manage subscriptions for your own customers, without exaggerated promises."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass-panel flex items-start gap-4 rounded-2xl border border-border p-7"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25 text-primary-soft">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-text">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Getting Started" title="How It Works" />

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <div key={number} className="glass-panel flex flex-col gap-4 rounded-3xl border border-border p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full btn-gradient text-sm font-bold text-white">
                  {number}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-text">{title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-text sm:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            Message our team on WhatsApp or Telegram to discuss reseller pricing and access.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.whatsapp.link} external variant="whatsapp" size="lg">
              Chat on WhatsApp
            </Button>
            <Button href={siteConfig.telegram.link} external variant="telegram" size="lg">
              Message on Telegram
            </Button>
          </div>
          <p className="mt-6 text-xs text-text-dim">
            Looking for standard subscription plans instead? View our{" "}
            <Link href="/pricing" className="font-semibold text-accent hover:underline">
              pricing page
            </Link>{" "}
            or visit{" "}
            <Link href="/support" className="font-semibold text-accent hover:underline">
              Support
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
