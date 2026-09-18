import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/data/blog";
import { installGuides } from "@/lib/data/installation";

// Indexable public routes only. Privacy Policy and Terms of Service are
// intentionally excluded — they're marked noindex in their page metadata,
// and keeping noindexed URLs out of the sitemap avoids a mixed signal.
const staticRoutePriorities: Record<string, number> = {
  "": 1,
  "/pricing": 0.9,
  "/installation": 0.8,
  "/support": 0.7,
  "/reseller": 0.7,
  "/faq": 0.7,
  "/blog": 0.7,
  "/about": 0.5,
  "/contact": 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.entries(staticRoutePriorities).map(([route, priority]) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  const installationRoutes = installGuides.map((guide) => ({
    url: `${siteConfig.url}/installation/${guide.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...installationRoutes, ...blogRoutes];
}
