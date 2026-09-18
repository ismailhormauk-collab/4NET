import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-start gap-6 animate-rise">
            <Badge>Smart Streaming Experience</Badge>
            <h1 className="text-4xl font-bold leading-[1.1] text-text sm:text-5xl lg:text-[3.3rem]">
              IPTV 4NET —{" "}
              <span className="text-gradient">Streaming Made Simple</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
              Enjoy a flexible streaming experience across your compatible devices with simple
              plans, fast setup and dedicated customer support.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/pricing" variant="primary" size="lg">
                View Plans
              </Button>
              <Button href={siteConfig.whatsapp.link} external variant="secondary" size="lg">
                Get Started
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                Easy setup
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                Multiple devices
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                Dedicated support
              </span>
            </div>
          </div>

          <div className="hidden animate-rise [animation-delay:150ms] lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
