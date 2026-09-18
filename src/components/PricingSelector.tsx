"use client";

import { useState } from "react";
import { TrendingDown } from "lucide-react";
import { PricingCard } from "@/components/PricingCard";
import { deviceCounts, deviceSavings, pricingPlans } from "@/lib/data/pricing";

export function PricingSelector() {
  const [deviceCount, setDeviceCount] = useState(deviceCounts[0].count);
  const savings = deviceSavings[deviceCount];

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
        <div
          role="tablist"
          aria-label="Number of devices"
          className="glass-panel mx-auto flex w-fit min-w-max gap-1 rounded-full border border-border p-1.5"
        >
          {deviceCounts.map(({ count, label }) => {
            const isActive = deviceCount === count;
            return (
              <button
                key={count}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setDeviceCount(count)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive ? "btn-gradient text-white" : "text-text-muted hover:text-text"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex h-6 items-center justify-center">
        {savings ? (
          <span
            key={deviceCount}
            className="animate-rise inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent"
          >
            <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />
            {savings}
          </span>
        ) : (
          <p className="text-xs text-text-dim">Base pricing · 1 simultaneous device</p>
        )}
      </div>

      <div
        key={deviceCount}
        className="animate-rise mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} deviceCount={deviceCount} />
        ))}
      </div>
    </div>
  );
}
