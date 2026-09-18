import { Wrench, Layers, Zap, Headset } from "lucide-react";

const benefits = [
  { icon: Wrench, label: "Easy Setup" },
  { icon: Layers, label: "Multiple Devices" },
  { icon: Zap, label: "Fast Activation" },
  { icon: Headset, label: "Customer Support" },
];

export function BenefitsBar() {
  return (
    <section className="relative border-y border-border bg-ink-soft/60">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {benefits.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl px-2 py-2 sm:justify-center"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-text">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
