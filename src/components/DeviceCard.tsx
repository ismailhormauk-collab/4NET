import type { Device } from "@/lib/data/devices";

export function DeviceCard({ device }: { device: Device }) {
  const Icon = device.icon;
  return (
    <div className="group glass-panel flex flex-col items-center gap-3 rounded-2xl border border-border px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-white/[0.06]">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] text-primary-soft transition-colors group-hover:text-accent">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="text-sm font-medium text-text">{device.name}</span>
    </div>
  );
}
