import { ClipboardList, CreditCard, PlayCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Choose Your Plan",
    description:
      "Compare subscription lengths and device counts on our Pricing page to find the option that fits your household.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Complete Your Order",
    description:
      "Confirm your plan and complete payment with our team through WhatsApp or Telegram using a secure method.",
  },
  {
    number: "03",
    icon: PlayCircle,
    title: "Set Up & Start Watching",
    description:
      "Follow your device-specific guide to activate your subscription and start streaming within minutes.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple Setup, Fast Support"
          description="From choosing a plan to your first stream, the process takes just a few guided steps."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border-strong to-transparent lg:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
            {steps.map(({ number, icon: Icon, title, description }, index) => (
              <li key={number} className="relative flex">
                <div
                  className={`glass-panel flex w-full flex-col gap-4 rounded-3xl border border-border p-7 ${
                    index === 1 ? "lg:mt-10" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold text-text-dim/60">{number}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl btn-gradient text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text">{title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
