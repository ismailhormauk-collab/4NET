import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BlogCoverArt } from "@/components/BlogCoverArt";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "IPTV 4NET Blog | Streaming Guides & Tips",
  description:
    "Read IPTV 4NET streaming guides covering IPTV basics, device setup, troubleshooting and getting the most from your subscription.",
  path: "/blog",
  keywords: ["iptv4net blog", "iptv 4net guides", "streaming guides"],
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sortedByDate = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [featured, ...rest] = sortedByDate;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "IPTV 4NET Blog",
    url: `${siteConfig.url}/blog`,
    blogPost: sortedByDate.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      dateModified: post.updatedDate ?? post.date,
      author: { "@type": "Organization", name: post.author },
      url: `${siteConfig.url}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <PageHero
        eyebrow="Blog"
        crumbs={[{ label: "Blog", href: "/blog" }]}
        title="Streaming Guides & Insights"
        description="Articles about IPTV basics, device setup and getting the most out of your streaming subscription."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              className="group glass-panel-strong mb-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-border-strong transition-all duration-300 hover:border-primary/50 lg:grid-cols-2"
            >
              <BlogCoverArt
                variant={featured.coverVariant}
                alt={featured.coverAlt}
                size="lg"
                className="h-56 lg:h-full"
              />
              <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
                <div className="flex items-center gap-3">
                  <Badge>Featured</Badge>
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold leading-snug text-text transition-colors group-hover:text-accent sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-text-dim">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" aria-hidden="true" />
                    {featured.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Read Article
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ) : null}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass-panel flex flex-col overflow-hidden rounded-3xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
              >
                <div className="relative">
                  <BlogCoverArt variant={post.coverVariant} alt={post.coverAlt} className="h-40" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h2 className="text-lg font-semibold leading-snug text-text transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-text-muted">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 text-xs text-text-dim">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Read Article
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
