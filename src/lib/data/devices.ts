import type { LucideIcon } from "lucide-react";
import {
  Flame,
  Tv,
  Smartphone,
  Tablet,
  AppWindow,
  Laptop,
  Box,
  Cast,
} from "lucide-react";

export type Device = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
};

export const devices: Device[] = [
  {
    id: "firetv",
    name: "Fire TV & Firestick",
    icon: Flame,
    description: "Set up compatible streaming apps on Amazon Fire TV devices.",
  },
  {
    id: "smart-tv",
    name: "Smart TV",
    icon: Tv,
    description: "Install and configure compatible apps on modern Smart TVs.",
  },
  {
    id: "android",
    name: "Android",
    icon: Smartphone,
    description: "Get set up quickly on Android phones and tablets.",
  },
  {
    id: "ios",
    name: "iPhone & iPad",
    icon: Tablet,
    description: "Configure compatible apps on iOS devices in a few steps.",
  },
  {
    id: "apple-tv",
    name: "Apple TV",
    icon: AppWindow,
    description: "Bring your subscription to the big screen with Apple TV.",
  },
  {
    id: "windows-mac",
    name: "Windows & Mac",
    icon: Laptop,
    description: "Stream from your desktop or laptop with a compatible player.",
  },
  {
    id: "android-box",
    name: "Android TV Box",
    icon: Box,
    description: "Set up dedicated Android TV boxes for a living-room experience.",
  },
  {
    id: "tv-boxes",
    name: "Compatible TV Boxes",
    icon: Cast,
    description: "General guidance for other compatible internet-connected boxes.",
  },
];
