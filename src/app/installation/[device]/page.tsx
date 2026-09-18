import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ListChecks } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { installGuides, getInstallGuideById } from "@/lib/data/installation";
import { devices } from "@/lib/data/devices";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return installGuides.map((guide) => ({ device: guide.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ device: string }>;
}): Promise<Metadata> {
  const { device } = await params;
  const guide = getInstallGuideById(device);
  if (!guide) return {};
  return buildMetadata({
    title: `${guide.device} Installation Guide | IPTV 4NET`,
    description: `${guide.summary} A step-by-step IPTV 4NET setup guide for ${guide.device}.`,
    path: `/installation/${guide.id}`,
    keywords: ["iptv4net setup", "iptv 4net installation", `${guide.device.toLowerCase()} setup`],
  });
}

export default async function InstallationGuidePage({
  params,
}: {
  params: Promise<{ device: string }>;
}) {
  const { device } = await params;
  const guide = getInstallGuideById(device);
  if (!guide) notFound();

  const deviceMeta = devices.find((d) => d.id === guide.id);
  const Icon = deviceMeta?.icon ?? ListChecks;

  return (
    <>
      <PageHero
        eyebrow="Installation Guide"
        crumbs={[
          { label: "Installation", href: "/installation" },
          { label: guide.device, href: `/installation/${guide.id}` },
        ]}
        title={`Set Up IPTV 4NET on ${guide.device}`}
        description={guide.summary}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="glass-panel flex flex-col gap-4 rounded-3xl border border-border p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-secondary/25 text-primary-soft">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-base font-semibold text-text">What you&apos;ll need</h2>
              <ul className="flex flex-col gap-2.5">
                {guide.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel flex flex-col gap-3 rounded-3xl border border-border p-7">
              <h2 className="text-base font-semibold text-text">Need a hand?</h2>
              <p className="text-sm leading-relaxed text-text-muted">
                Our team can walk you through setup live on WhatsApp or Telegram.
              </p>
              <div className="flex flex-col gap-2.5">
                <Button href={siteConfig.whatsapp.link} external variant="whatsapp" size="sm">
                  Chat on WhatsApp
                </Button>
                <Button href={siteConfig.telegram.link} external variant="telegram" size="sm">
                  Message on Telegram
                </Button>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl border border-border p-7 sm:p-9">
            <h2 className="text-lg font-semibold text-text">Step-by-step setup</h2>
            <ol className="mt-6 flex flex-col gap-6">
              {guide.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full btn-gradient text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center gap-3 px-4 text-center sm:px-6 lg:px-8">
          <Link href="/installation" className="text-sm font-semibold text-text-muted hover:text-text">
            ← Back to all installation guides
          </Link>
          <p className="text-xs text-text-dim">
            Ready to subscribe? View our{" "}
            <Link href="/pricing" className="font-semibold text-accent hover:underline">
              pricing plans
            </Link>{" "}
            or check the{" "}
            <Link href="/faq" className="font-semibold text-accent hover:underline">
              FAQ
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
