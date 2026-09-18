import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "IPTV 4NET | Flexible Streaming Plans & Support",
    template: "%s | IPTV 4NET",
  },
  description:
    "Discover IPTV 4NET with flexible streaming plans, compatible device support, easy setup and dedicated customer assistance.",
  keywords: siteConfig.keywords,
  authors: [{ name: "IPTV 4NET" }],
  creator: "IPTV 4NET",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "IPTV 4NET",
    title: "IPTV 4NET | Flexible Streaming Plans & Easy Setup",
    description:
      "Discover IPTV 4NET with flexible streaming plans, compatible device support, easy setup and dedicated customer assistance.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "IPTV 4NET" }],
  },
  // Intentionally omits title/description/images so every route falls back to
  // its own resolved Open Graph fields instead of repeating the homepage's.
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IPTV 4NET",
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: siteConfig.whatsapp.link,
        availableLanguage: ["English"],
      },
    ],
    sameAs: [siteConfig.telegram.link],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IPTV 4NET",
    url: siteConfig.url,
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <AuroraBackground />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
