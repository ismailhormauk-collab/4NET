export type PricingPlan = {
  id: string;
  duration: string;
  months: number;
  /** One price per device count, indexed 0 = 1 device ... 3 = 4 devices */
  prices: [number, number, number, number];
  badge?: string;
  description: string;
  features: string[];
};

const baseFeatures = [
  "Access to your selected streaming package",
  "On-demand movies & series",
  "HD & 4K support on compatible devices",
  "EPG program guide",
  "WhatsApp & Telegram support",
  "Setup help for compatible devices",
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    duration: "1 Month",
    months: 1,
    prices: [20, 36, 51, 64],
    description: "Try it out with a short-term plan and no long-term commitment.",
    features: baseFeatures,
  },
  {
    id: "3-months",
    duration: "3 Months",
    months: 3,
    prices: [35, 63, 90, 112],
    description: "A balanced option for viewers who want more value over time.",
    features: baseFeatures,
  },
  {
    id: "6-months",
    duration: "6 Months",
    months: 6,
    prices: [45, 81, 115, 144],
    description: "Save more with a half-year subscription and steady access.",
    features: baseFeatures,
  },
  {
    id: "12-months",
    duration: "12 Months",
    months: 12,
    prices: [65, 118, 165, 208],
    badge: "BEST VALUE",
    description: "The best price per month for long-term, worry-free streaming.",
    features: [...baseFeatures, "Priority renewal reminders"],
  },
];

export const deviceCounts = [
  { count: 1, label: "1 Device" },
  { count: 2, label: "2 Devices" },
  { count: 3, label: "3 Devices" },
  { count: 4, label: "4 Devices" },
];

export const deviceSavings: Record<number, string | null> = {
  1: null,
  2: "Save ~10% vs. separate 1-device plans",
  3: "Save ~15% vs. separate 1-device plans",
  4: "Save ~20% vs. separate 1-device plans",
};

export function getPriceForDevices(plan: PricingPlan, deviceCount: number) {
  return plan.prices[deviceCount - 1];
}

export function getMonthlyEquivalent(plan: PricingPlan, deviceCount: number) {
  const price = getPriceForDevices(plan, deviceCount);
  return Math.round((price / plan.months) * 100) / 100;
}
