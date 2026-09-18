import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContactCards } from "@/components/ContactCards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  ShoppingCart,
  Wrench,
  Smartphone,
  RefreshCcw,
  HelpCircle,
  CreditCard,
  Zap,
  Clock,
  Star,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV 4NET Support | Setup & Customer Assistance",
  description:
    "Need help with IPTV 4NET? Get setup assistance, subscription support and answers to common questions through WhatsApp or Telegram.",
  path: "/support",
  keywords: ["iptv4net support", "iptv 4net support", "streaming setup help"],
});

const topics: {
  icon: typeof ShoppingCart;
  title: string;
  description: string;
  href?: string;
}[] = [
  { icon: ShoppingCart, title: "New Subscription", description: "Order a new subscription", href: "/pricing" },
  { icon: Wrench, title: "Technical Support", description: "Buffering, connection, or app issues" },
  { icon: Smartphone, title: "Setup Help", description: "Get help installing on your device", href: "/installation" },
  { icon: RefreshCcw, title: "Renewal", description: "Renew or upgrade your plan" },
  { icon: HelpCircle, title: "General Questions", description: "Ask anything about IPTV 4NET", href: "/faq" },
  { icon: CreditCard, title: "Billing", description: "Payment and subscription queries" },
];

const stats = [
  { icon: Zap, label: "Fast", sub: "WhatsApp & Telegram response" },
  { icon: Clock, label: "Responsive", sub: "We aim to reply the same day" },
  { icon: Star, label: "Real", sub: "Human support, every time" },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        crumbs={[{ label: "Support", href: "/support" }]}
        title="How Can We Help?"
        description="Our support team is available to help with setup, subscriptions and general questions. The fastest way to reach us is via WhatsApp or Telegram."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ContactCards />
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Support Topics" title="What Can We Help With?" />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map(({ icon: Icon, title, description, href }) => {
              const cardClasses =
                "glass-panel flex flex-col gap-3 rounded-2xl border border-border p-6 transition-colors";
              const content = (
                <>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-text">{title}</h3>
                  <p className="text-sm text-text-muted">{description}</p>
                </>
              );
              return href ? (
                <Link
                  key={title}
                  href={href}
                  className={`${cardClasses} hover:border-border-strong hover:bg-white/[0.05]`}
                >
                  {content}
                </Link>
              ) : (
                <div key={title} className={cardClasses}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-strong grid grid-cols-1 gap-8 rounded-3xl border border-border-strong p-10 sm:grid-cols-3 sm:p-14">
            {stats.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <p className="text-2xl font-bold text-gradient">{label}</p>
                <p className="text-sm text-text-muted">{sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-semibold text-text sm:text-4xl">Start a conversation now</h2>
            <p className="max-w-xl text-base leading-relaxed text-text-muted">
              Message us on WhatsApp or Telegram and we&apos;ll get back to you as soon as we can.
              You can also check our{" "}
              <Link href="/installation" className="font-semibold text-accent hover:underline">
                installation guides
              </Link>{" "}
              or{" "}
              <Link href="/faq" className="font-semibold text-accent hover:underline">
                FAQ
              </Link>{" "}
              for quick answers.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.whatsapp.link} external variant="whatsapp" size="lg">
                Chat on WhatsApp
              </Button>
              <Button href={siteConfig.telegram.link} external variant="telegram" size="lg">
                Contact on Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
