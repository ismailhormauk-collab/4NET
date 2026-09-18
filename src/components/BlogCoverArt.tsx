import type { LucideIcon } from "lucide-react";
import {
  Globe,
  ClipboardCheck,
  Tv,
  Flame,
  Gauge,
  RefreshCw,
  PlayCircle,
  ListVideo,
  CalendarClock,
  Users,
  Rocket,
  MonitorSmartphone,
  SlidersHorizontal,
  LayoutGrid,
  ArrowLeftRight,
  Smartphone,
  Box,
  Tablet,
  AppWindow,
  Laptop,
  WifiOff,
  Snowflake,
  FileWarning,
  CalendarX,
  AudioLines,
  MonitorOff,
  GitCompare,
  KeyRound,
  Database,
  Router,
  Wallet,
  Star,
  Search,
  Home,
  CreditCard,
  Timer,
  XCircle,
  Clapperboard,
  Maximize,
  History,
  BookOpen,
  MonitorCheck,
  Shield,
  ScanSearch,
  Tv2,
} from "lucide-react";

export type CoverVariant =
  | "iptv-explained"
  | "requirements"
  | "smart-tv-setup"
  | "firestick-setup"
  | "internet-speed"
  | "buffering"
  | "iptv-player"
  | "m3u-playlist"
  | "epg-guide"
  | "multi-device"
  | "getting-started"
  | "device-setup"
  | "choosing-plan"
  | "devices"
  | "traditional-tv-compare"
  | "android-mobile"
  | "android-tv-box"
  | "ios-devices"
  | "apple-tv-setup"
  | "windows-mac"
  | "connection-problems"
  | "freezing"
  | "playlist-not-loading"
  | "epg-not-working"
  | "av-sync"
  | "black-screen"
  | "m3u-vs-xtream"
  | "xtream-login"
  | "data-usage"
  | "router-settings"
  | "iptv-cost"
  | "player-features"
  | "choosing-service"
  | "iptv-families"
  | "payment-models"
  | "activation-time"
  | "cancel-subscription"
  | "live-vs-ondemand"
  | "what-is-4k"
  | "catch-up-tv"
  | "streaming-glossary"
  | "need-smart-tv"
  | "vpn-iptv"
  | "device-compatibility-test"
  | "second-tv-setup";

const variants: Record<
  CoverVariant,
  { icon: LucideIcon; from: string; to: string; angle: string }
> = {
  "iptv-explained": { icon: Globe, from: "from-primary/55", to: "to-secondary/45", angle: "bg-gradient-to-br" },
  requirements: { icon: ClipboardCheck, from: "from-secondary/55", to: "to-accent/45", angle: "bg-gradient-to-tr" },
  "smart-tv-setup": { icon: Tv, from: "from-accent/55", to: "to-primary/45", angle: "bg-gradient-to-bl" },
  "firestick-setup": { icon: Flame, from: "from-primary/55", to: "to-accent/45", angle: "bg-gradient-to-r" },
  "internet-speed": { icon: Gauge, from: "from-secondary/55", to: "to-primary/45", angle: "bg-gradient-to-tl" },
  buffering: { icon: RefreshCw, from: "from-accent/55", to: "to-secondary/45", angle: "bg-gradient-to-b" },
  "iptv-player": { icon: PlayCircle, from: "from-primary/55", to: "to-secondary/45", angle: "bg-gradient-to-bl" },
  "m3u-playlist": { icon: ListVideo, from: "from-secondary/55", to: "to-accent/45", angle: "bg-gradient-to-r" },
  "epg-guide": { icon: CalendarClock, from: "from-accent/55", to: "to-primary/45", angle: "bg-gradient-to-tr" },
  "multi-device": { icon: Users, from: "from-primary/55", to: "to-accent/45", angle: "bg-gradient-to-t" },
  "getting-started": { icon: Rocket, from: "from-secondary/55", to: "to-primary/45", angle: "bg-gradient-to-br" },
  "device-setup": { icon: MonitorSmartphone, from: "from-accent/55", to: "to-secondary/45", angle: "bg-gradient-to-tl" },
  "choosing-plan": { icon: SlidersHorizontal, from: "from-primary/55", to: "to-secondary/45", angle: "bg-gradient-to-r" },
  devices: { icon: LayoutGrid, from: "from-secondary/55", to: "to-accent/45", angle: "bg-gradient-to-b" },
  "traditional-tv-compare": { icon: ArrowLeftRight, from: "from-primary/55", to: "to-accent/45", angle: "bg-gradient-to-tr" },
  "android-mobile": { icon: Smartphone, from: "from-primary/55", to: "to-secondary/45", angle: "bg-gradient-to-t" },
  "android-tv-box": { icon: Box, from: "from-secondary/55", to: "to-accent/45", angle: "bg-gradient-to-bl" },
  "ios-devices": { icon: Tablet, from: "from-accent/55", to: "to-primary/45", angle: "bg-gradient-to-r" },
  "apple-tv-setup": { icon: AppWindow, from: "from-primary/55", to: "to-accent/45", angle: "bg-gradient-to-tl" },
  "windows-mac": { icon: Laptop, from: "from-secondary/55", to: "to-primary/45", angle: "bg-gradient-to-b" },
  "connection-problems": { icon: WifiOff, from: "from-accent/55", to: "to-secondary/45", angle: "bg-gradient-to-tr" },
  freezing: { icon: Snowflake, from: "from-primary/55", to: "to-secondary/45", angle: "bg-gradient-to-bl" },
  "playlist-not-loading": { icon: FileWarning, from: "from-secondary/55", to: "to-accent/45", angle: "bg-gradient-to-t" },
  "epg-not-working": { icon: CalendarX, from: "from-accent/55", to: "to-primary/45", angle: "bg-gradient-to-r" },
  "av-sync": { icon: AudioLines, from: "from-primary/55", to: "to-accent/45", angle: "bg-gradient-to-b" },
  "black-screen": { icon: MonitorOff, from: "from-secondary/55", to: "to-primary/45", angle: "bg-gradient-to-tr" },
  "m3u-vs-xtream": { icon: GitCompare, from: "from-accent/55", to: "to-secondary/45", angle: "bg-gradient-to-bl" },
  "xtream-login": { icon: KeyRound, from: "from-primary/55", to: "to-secondary/45", angle: "bg-gradient-to-t" },
  "data-usage": { icon: Database, from: "from-secondary/55", to: "to-accent/45", angle: "bg-gradient-to-r" },
  "router-settings": { icon: Router, from: "from-accent/55", to: "to-primary/45", angle: "bg-gradient-to-bl" },
  "iptv-cost": { icon: Wallet, from: "from-primary/55", to: "to-accent/45", angle: "bg-gradient-to-tr" },
  "player-features": { icon: Star, from: "from-secondary/55", to: "to-primary/45", angle: "bg-gradient-to-r" },
  "choosing-service": { icon: Search, from: "from-accent/55", to: "to-secondary/45", angle: "bg-gradient-to-t" },
  "iptv-families": { icon: Home, from: "from-primary/55", to: "to-secondary/45", angle: "bg-gradient-to-b" },
  "payment-models": { icon: CreditCard, from: "from-secondary/55", to: "to-accent/45", angle: "bg-gradient-to-tl" },
  "activation-time": { icon: Timer, from: "from-accent/55", to: "to-primary/45", angle: "bg-gradient-to-t" },
  "cancel-subscription": { icon: XCircle, from: "from-primary/55", to: "to-accent/45", angle: "bg-gradient-to-r" },
  "live-vs-ondemand": { icon: Clapperboard, from: "from-secondary/55", to: "to-primary/45", angle: "bg-gradient-to-tr" },
  "what-is-4k": { icon: Maximize, from: "from-accent/55", to: "to-secondary/45", angle: "bg-gradient-to-b" },
  "catch-up-tv": { icon: History, from: "from-primary/55", to: "to-secondary/45", angle: "bg-gradient-to-tl" },
  "streaming-glossary": { icon: BookOpen, from: "from-secondary/55", to: "to-accent/45", angle: "bg-gradient-to-br" },
  "need-smart-tv": { icon: MonitorCheck, from: "from-accent/55", to: "to-primary/45", angle: "bg-gradient-to-tl" },
  "vpn-iptv": { icon: Shield, from: "from-primary/55", to: "to-secondary/45", angle: "bg-gradient-to-b" },
  "device-compatibility-test": { icon: ScanSearch, from: "from-secondary/55", to: "to-accent/45", angle: "bg-gradient-to-tr" },
  "second-tv-setup": { icon: Tv2, from: "from-accent/55", to: "to-secondary/45", angle: "bg-gradient-to-r" },
};

const sizeMap = {
  sm: "h-9 w-9",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export function BlogCoverArt({
  variant,
  alt,
  size = "md",
  className = "",
}: {
  variant: CoverVariant;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden bg-ink-soft ${className}`}
    >
      <div className={`absolute inset-0 ${config.angle} ${config.from} ${config.to}`} />
      <div className="grid-texture absolute inset-0 opacity-25" />
      <div className="absolute h-32 w-32 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
      <Icon className={`relative ${sizeMap[size]} text-white/90`} aria-hidden="true" strokeWidth={1.75} />
    </div>
  );
}
