import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { devices } from "@/lib/data/devices";
import { installGuides } from "@/lib/data/installation";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV 4NET Installation Guides | Device Setup Help",
  description:
    "Step-by-step IPTV 4NET installation guides for Fire TV, Smart TV, Android, iPhone & iPad, Apple TV, Windows & Mac and Android TV boxes.",
  path: "/installation",
  keywords: ["iptv4net setup", "iptv 4net installation", "streaming device setup"],
});

export default function InstallationPage() {
  return (
    <>
      <PageHero
        eyebrow="Installation"
        crumbs={[{ label: "Installation", href: "/installation" }]}
        title="Setup Guides for Every Device"
        description="Follow a clear, step-by-step guide to get IPTV 4NET running on your compatible device."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {installGuides.map((guide) => {
              const Icon = devices.find((d) => d.id === guide.id)?.icon;
              return (
                <Link
                  key={guide.id}
                  href={`/installation/${guide.id}`}
                  className="group glass-panel flex flex-col gap-4 rounded-3xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-white/[0.05]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-secondary/25 text-primary-soft">
                    {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : null}
                  </span>
                  <h2 className="text-lg font-semibold text-text">{guide.device}</h2>
                  <p className="text-sm leading-relaxed text-text-muted">{guide.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View Guide
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-border bg-white/[0.02] p-10 text-center">
            <h2 className="text-xl font-semibold text-text">Don&apos;t see your device listed?</h2>
            <p className="max-w-lg text-sm leading-relaxed text-text-muted">
              Message our team and we&apos;ll help you find the right setup for your specific
              device.
            </p>
            <Button href={siteConfig.whatsapp.link} external variant="whatsapp">
              Ask on WhatsApp
            </Button>
            <p className="text-xs text-text-dim">
              You can also visit our{" "}
              <Link href="/support" className="font-semibold text-accent hover:underline">
                Support page
              </Link>{" "}
              or check the{" "}
              <Link href="/faq" className="font-semibold text-accent hover:underline">
                FAQ
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
