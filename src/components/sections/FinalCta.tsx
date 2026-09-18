import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-strong relative overflow-hidden rounded-[2rem] border border-border-strong px-6 py-14 text-center sm:px-16 sm:py-20">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20"
            aria-hidden="true"
          />
          <div className="absolute -top-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />

          <h2 className="text-3xl font-semibold text-text sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            Choose your plan and contact our team for setup assistance.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/pricing" variant="primary" size="lg">
              View Plans
            </Button>
            <Button href={siteConfig.whatsapp.link} external variant="whatsapp" size="lg">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
