import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV 4NET Terms of Service",
  description:
    "Read the IPTV 4NET terms of service covering subscriptions, payments, acceptable use and support for our streaming service.",
  path: "/terms-of-service",
  noindex: true,
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By ordering or using an IPTV 4NET subscription, you agree to these terms of service. If you do not agree, please do not use our service.",
    ],
  },
  {
    title: "2. Our Service",
    body: [
      "IPTV 4NET provides streaming subscription access delivered through compatible third-party player applications on your own devices. We provide the subscription, activation details, and setup guidance for compatible devices.",
      "Service availability depends on your internet connection, device compatibility, and the compatible player application you use.",
    ],
  },
  {
    title: "3. Subscriptions & Payment",
    body: [
      "Subscriptions are offered as one-time payments for a fixed duration (1, 3, 6 or 12 months) and a selected device count. Orders are confirmed through WhatsApp or Telegram.",
      "Subscriptions do not renew automatically. To continue service after your subscription period ends, contact our team to renew.",
    ],
  },
  {
    title: "4. Acceptable Use",
    body: [
      "You agree to use your subscription for personal, lawful use in accordance with applicable laws in your jurisdiction. You are responsible for ensuring your use of any third-party player application complies with that application's own terms.",
      "You agree not to resell, redistribute, or share your subscription credentials outside of your own household without our authorization, except through our official reseller program.",
    ],
  },
  {
    title: "5. Reseller Program",
    body: [
      "Individuals participating in our reseller program are subject to separate terms discussed directly with our team and agreed to before reseller access is granted.",
    ],
  },
  {
    title: "6. Service Changes & Availability",
    body: [
      "We aim to provide consistent access to our channel and on-demand library, but content availability, channel lineups and service performance may change over time and are not guaranteed to be uninterrupted.",
    ],
  },
  {
    title: "7. Support",
    body: [
      `Support is available through WhatsApp (${siteConfig.whatsapp.display}) and Telegram (${siteConfig.telegram.handle}) for setup help, billing questions and general inquiries.`,
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "IPTV 4NET is not liable for interruptions caused by your internet connection, device compatibility issues, or third-party applications outside of our control.",
    ],
  },
  {
    title: "9. Changes to These Terms",
    body: [
      "We may update these terms from time to time. Continued use of the service after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      `Questions about these terms can be directed to us on WhatsApp at ${siteConfig.whatsapp.display} or on Telegram at ${siteConfig.telegram.handle}.`,
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumbs={[{ label: "Terms of Service", href: "/terms-of-service" }]}
        title="Terms of Service"
        description="Effective date: January 1, 2026"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-text">{section.title}</h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-text-muted sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
