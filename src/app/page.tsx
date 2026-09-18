import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BenefitsBar } from "@/components/sections/BenefitsBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { DeviceCompatibility } from "@/components/sections/DeviceCompatibility";
import { SupportPreview } from "@/components/sections/SupportPreview";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV 4NET | Flexible Streaming Plans & Easy Setup",
  description:
    "Explore IPTV 4NET with flexible plans, compatible device support, easy setup and customer assistance for a simple streaming experience.",
  path: "/",
  keywords: ["iptv4net", "iptv 4net", "4net iptv"],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsBar />
      <WhyUs />
      <HowItWorks />
      <PricingPreview />
      <DeviceCompatibility />
      <SupportPreview />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
