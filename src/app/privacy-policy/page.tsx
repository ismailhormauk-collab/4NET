import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV 4NET Privacy Policy",
  description:
    "Read the IPTV 4NET privacy policy to learn how we collect, use and protect your information when you use our streaming service.",
  path: "/privacy-policy",
  noindex: true,
});

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you contact us on WhatsApp or Telegram to inquire about or order a subscription, we may collect information you choose to share, such as your name, contact details, and information related to your order and device.",
      "We do not operate account registration forms on this website and do not collect payment card details through the site itself.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information you provide to process your order, deliver activation details, provide customer support, and communicate with you about your subscription.",
      "We do not use your information for purposes unrelated to providing and supporting your subscription.",
    ],
  },
  {
    title: "3. How We Protect Your Information",
    body: [
      "We take reasonable steps to protect information shared with us and use secure payment methods when processing orders.",
      "We do not sell your personal information, and we do not share it with third parties except where necessary to deliver our service or where required by law.",
    ],
  },
  {
    title: "4. Communication Channels",
    body: [
      `Support and order communication takes place through WhatsApp (${siteConfig.whatsapp.display}) and Telegram (${siteConfig.telegram.handle}). Messages sent through these platforms are also subject to the respective privacy policies of WhatsApp and Telegram.`,
    ],
  },
  {
    title: "5. Cookies & Website Analytics",
    body: [
      "This website may use basic, privacy-conscious analytics to understand overall site usage and improve the experience. We do not use this data to build individual advertising profiles.",
    ],
  },
  {
    title: "6. Your Choices",
    body: [
      "You can ask us at any time, via WhatsApp or Telegram, what information we hold related to your subscription or to have it removed, subject to any legal or operational requirements.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      "We may update this privacy policy from time to time. Changes will be reflected on this page with an updated effective date.",
    ],
  },
  {
    title: "8. Contact Us",
    body: [
      `If you have questions about this privacy policy, contact us on WhatsApp at ${siteConfig.whatsapp.display} or on Telegram at ${siteConfig.telegram.handle}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
        title="Privacy Policy"
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
