import { Play, Wifi, Smartphone, Tv2, Signal, MonitorPlay } from "lucide-react";

const channelTiles = [
  { label: "Sports", color: "from-blue-500/70 to-cyan-400/70" },
  { label: "Movies", color: "from-violet-500/70 to-fuchsia-400/70" },
  { label: "Series", color: "from-cyan-400/70 to-teal-400/70" },
  { label: "Kids", color: "from-amber-400/70 to-orange-400/70" },
  { label: "News", color: "from-rose-500/70 to-pink-400/70" },
  { label: "Live", color: "from-indigo-500/70 to-blue-400/70" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
      {/* ambient glow */}
      <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/20 blur-3xl" />

      {/* TV frame */}
      <div className="glass-panel-strong relative rounded-[2rem] border border-border-strong p-3 shadow-2xl">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-ink-soft">
          <div className="grid-texture absolute inset-0 opacity-40" />
          {/* top bar */}
          <div className="relative flex items-center justify-between px-4 pt-4">
            <div className="flex items-center gap-2 text-text-muted">
              <MonitorPlay className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold tracking-wide">IPTV 4NET</span>
            </div>
            <div className="flex items-center gap-2 text-text-dim">
              <Signal className="h-3.5 w-3.5" />
              <Wifi className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* hero play area */}
          <div className="relative mx-4 mt-4 flex h-28 items-center justify-between overflow-hidden rounded-xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/30 px-4 sm:h-32">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
                Now Streaming
              </p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                Prime Time Channel Pack
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg">
              <Play className="h-5 w-5 fill-current" />
            </span>
          </div>

          {/* channel grid */}
          <div className="relative grid grid-cols-3 gap-2.5 px-4 py-4">
            {channelTiles.map((tile) => (
              <div
                key={tile.label}
                className={`flex h-14 flex-col justify-end rounded-lg bg-gradient-to-br ${tile.color} p-2 sm:h-16`}
              >
                <span className="text-[10px] font-semibold text-white/90">{tile.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* TV stand */}
        <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-white/10" />
      </div>

      {/* floating phone */}
      <div className="glass-panel-strong absolute -bottom-8 -left-6 w-28 rounded-2xl border border-border-strong p-2 shadow-xl sm:-left-10 sm:w-32">
        <div className="rounded-xl bg-ink-soft p-2">
          <div className="flex items-center justify-between px-0.5">
            <Smartphone className="h-3 w-3 text-accent" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="mt-2 flex flex-col gap-1.5">
            <div className="h-9 rounded-lg bg-gradient-to-br from-primary/60 to-secondary/50" />
            <div className="h-2 w-3/4 rounded-full bg-white/10" />
            <div className="h-2 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      {/* floating live badge */}
      <div className="glass-panel-strong absolute -top-5 -right-3 flex items-center gap-2 rounded-2xl border border-border-strong px-4 py-3 shadow-xl sm:-right-6">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
        </span>
        <span className="text-xs font-semibold text-text">Live Now</span>
      </div>

      {/* floating device sync card */}
      <div className="glass-panel-strong absolute bottom-10 -right-6 flex items-center gap-3 rounded-2xl border border-border-strong px-4 py-3 shadow-xl sm:-right-10">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <Tv2 className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold text-text">Multi-Device</p>
          <p className="text-[11px] text-text-dim">Synced &amp; ready</p>
        </div>
      </div>
    </div>
  );
}
