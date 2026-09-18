import { Rocket, MonitorSmartphone, SlidersHorizontal, LifeBuoy } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Simple Setup",
    description:
      "Get up and running with clear, guided steps for every supported device — no technical background required.",
  },
  {
    icon: MonitorSmartphone,
    title: "Compatible Devices",
    description:
      "Use IPTV 4NET across a wide range of compatible devices, from Smart TVs to phones, tablets and TV boxes.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Plans",
    description:
      "Pick a subscription length and device count that matches your household, with no long-term contracts.",
  },
  {
    icon: LifeBuoy,
    title: "Helpful Support",
    description:
      "Reach our team directly on WhatsApp or Telegram for setup help, billing questions and general support.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Why IPTV 4NET
            </span>
            <h2 className="text-3xl font-semibold text-text sm:text-4xl">
              Everything You Need for a Better Streaming Setup
            </h2>
            <p className="text-base leading-relaxed text-text-muted sm:text-lg">
              IPTV 4NET gives you a simple way to manage compatible streaming access across your
              supported devices — with transparent plans and a team that actually responds when you
              need help.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass-panel flex flex-col gap-3 rounded-2xl border border-border p-6 transition-colors hover:border-border-strong hover:bg-white/[0.05]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25 text-primary-soft">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-text">{title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
