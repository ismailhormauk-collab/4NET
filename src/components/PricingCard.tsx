import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  getMonthlyEquivalent,
  getPriceForDevices,
  type PricingPlan,
} from "@/lib/data/pricing";
import { siteConfig } from "@/lib/site";

export function PricingCard({
  plan,
  deviceCount = 1,
}: {
  plan: PricingPlan;
  deviceCount?: number;
}) {
  const isHighlighted = Boolean(plan.badge);
  const price = getPriceForDevices(plan, deviceCount);
  const monthly = getMonthlyEquivalent(plan, deviceCount);
  const deviceLabel = `${deviceCount} device${deviceCount === 1 ? "" : "s"}`;

  const whatsappMessage = `Hi! I'd like to subscribe to the ${plan.duration} plan for ${deviceLabel} (€${price}).`;

  return (
    <div
      className={`relative flex h-full flex-col gap-6 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
        isHighlighted
          ? "glass-panel-strong glow-ring border-2 border-primary/50"
          : "glass-panel border border-border"
      }`}
    >
      {plan.badge ? (
        <span className="btn-gradient absolute -top-3.5 right-7 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {plan.badge}
        </span>
      ) : null}

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-text-muted">
          {plan.duration}
        </p>
        <p className="mt-1 text-xs uppercase tracking-wide text-text-dim">One-time payment</p>
      </div>

      <div className="flex items-baseline gap-1.5 transition-all duration-300">
        <span className="text-5xl font-bold text-text">€{price}</span>
        <span className="text-sm text-text-dim">€{monthly.toFixed(2)}/mo</span>
      </div>

      <p className="text-sm leading-relaxed text-text-muted">{plan.description}</p>

      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-text-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={`${siteConfig.whatsapp.link}?text=${encodeURIComponent(whatsappMessage)}`}
        external
        variant={isHighlighted ? "primary" : "secondary"}
        className="w-full"
      >
        Subscribe Now
      </Button>
    </div>
  );
}
