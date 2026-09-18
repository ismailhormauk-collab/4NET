import { SectionHeading } from "@/components/ui/SectionHeading";
import { DeviceCard } from "@/components/DeviceCard";
import { Button } from "@/components/ui/Button";
import { devices } from "@/lib/data/devices";
import { siteConfig } from "@/lib/site";

export function DeviceCompatibility() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Compatibility"
          title="One Plan. Multiple Compatible Devices."
          description="Set up IPTV 4NET on any compatible device below — one subscription, multiple ways to watch."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {devices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-text-muted">
            Don&apos;t see your device?{" "}
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Ask us on WhatsApp
            </a>{" "}
            — we support a wide range of internet-connected devices.
          </p>
          <Button href="/installation" variant="secondary" size="sm">
            View Installation Guides
          </Button>
        </div>
      </div>
    </section>
  );
}
