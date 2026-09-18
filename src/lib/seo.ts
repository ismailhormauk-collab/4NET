import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export type Crumb = { label: string; href: string };

type PageSeoInput = {
  /** Full, literal <title> text — not run through the "%s | IPTV 4NET" template. */
  title: string;
  /** ~140-160 character human-readable description. */
  description: string;
  /** Route path, e.g. "/pricing" or "/" for the homepage. */
  path: string;
  keywords?: string[];
  /** Set true for pages that should not appear in search results (still linkable/crawlable). */
  noindex?: boolean;
  type?: "website" | "article";
  /** Article-only fields, used when type === "article". */
  article?: { publishedTime: string; authors?: string[] };
};

/**
 * Builds a complete, self-consistent Metadata object: absolute title (bypasses
 * the root template), canonical URL, full Open Graph block (title/description/
 * url/type/image), and page-specific keywords. Twitter card fields intentionally
 * fall back to Open Graph via Next's per-field resolution (see root layout).
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  noindex,
  type = "website",
  article,
}: PageSeoInput): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
      ...(type === "article" && article
        ? {
            publishedTime: article.publishedTime,
            authors: article.authors,
          }
        : {}),
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

/** Builds Schema.org BreadcrumbList JSON-LD matching a page's visible breadcrumb trail. */
export function breadcrumbSchema(items: Crumb[]) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${siteConfig.url}${crumb.href}`,
    })),
  };
}
