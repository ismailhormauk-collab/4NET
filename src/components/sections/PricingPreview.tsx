import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingSelector } from "@/components/PricingSelector";

export function PricingPreview() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans Built Around Your Setup"
          description="Choose how many devices you want to use and select the subscription length that works best for you."
        />

        <div className="mt-12">
          <PricingSelector />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors hover:text-text"
          >
            View Full Pricing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
