import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { BlogCoverArt } from "@/components/BlogCoverArt";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { InlineText } from "@/components/blog/InlineText";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
  getAdjacentPosts,
} from "@/lib/data/blog";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { slugify } from "@/lib/slugify";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    article: { publishedTime: post.date, authors: [post.author] },
    keywords: ["iptv4net blog", "iptv 4net guides", post.category.toLowerCase()],
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const headings = post.content
    .filter((block) => block.type === "heading")
    .map((block) => ({ id: slugify(block.text), text: block.text }));

  const dateModified = post.updatedDate ?? post.date;
  const relatedPosts = getRelatedPosts(post, 3);
  const { previous, next } = getAdjacentPosts(post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${siteConfig.url}/opengraph-image`,
    datePublished: post.date,
    dateModified,
    articleSection: post.category,
    author: { "@type": "Organization", name: post.author, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: "IPTV 4NET",
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />

          <div className="mt-6 flex flex-col gap-5">
            <Badge>{post.category}</Badge>
            <h1 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-text-dim">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden="true" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Published {formatDate(post.date)}
              </span>
              {post.updatedDate && post.updatedDate !== post.date ? (
                <span className="inline-flex items-center gap-1.5">
                  <RefreshCw className="h-4 w-4" aria-hidden="true" />
                  Updated {formatDate(post.updatedDate)}
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>

          <BlogCoverArt
            variant={post.coverVariant}
            alt={post.coverAlt}
            size="lg"
            className="mt-8 h-52 rounded-3xl sm:h-64"
          />

          <div className="mt-10">
            <TableOfContents headings={headings} />
          </div>

          <div className="prose-content flex flex-col gap-6">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    id={slugify(block.text)}
                    className="scroll-mt-24 text-2xl font-semibold text-text"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="flex flex-col gap-2.5 pl-1">
                    {block.items.map((item) => {
                      const isLink = typeof item === "object";
                      const key = isLink ? item.href : item;
                      const label = isLink ? item.text : item;
                      return (
                        <li key={key} className="flex items-start gap-2.5 text-base text-text-muted">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {isLink ? (
                            <Link href={item.href} className="text-accent hover:underline">
                              {label}
                            </Link>
                          ) : (
                            <span>{label}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-base leading-relaxed text-text-muted">
                  <InlineText text={block.text} links={block.links} />
                </p>
              );
            })}
          </div>

          {post.faqs && post.faqs.length > 0 ? (
            <div className="mt-14">
              <h2 className="text-2xl font-semibold text-text">
                {post.faqHeading ?? "Frequently Asked Questions"}
              </h2>
              <div className="mt-6">
                <Accordion items={post.faqs} />
              </div>
            </div>
          ) : null}

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-border bg-white/[0.02] p-10 text-center">
            <h2 className="text-lg font-semibold text-text">Ready to get started?</h2>
            <p className="max-w-md text-sm leading-relaxed text-text-muted">
              Explore our plans or reach out to our team for help choosing the right setup.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/pricing" variant="primary">
                View Plans
              </Button>
              <Button href={siteConfig.whatsapp.link} external variant="whatsapp">
                Chat on WhatsApp
              </Button>
            </div>
            <p className="text-xs text-text-dim">
              Need setup help? Visit our{" "}
              <Link href="/installation" className="font-semibold text-accent hover:underline">
                installation guides
              </Link>{" "}
              or{" "}
              <Link href="/support" className="font-semibold text-accent hover:underline">
                support page
              </Link>
              .
            </p>
          </div>

          {relatedPosts.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-lg font-semibold text-text">Related Articles</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="glass-panel flex flex-col gap-2 rounded-2xl border border-border p-5 transition-colors hover:border-border-strong"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {p.category}
                    </span>
                    <span className="text-sm font-semibold text-text">{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {previous || next ? (
            <nav
              aria-label="Article navigation"
              className="mt-14 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2"
            >
              {previous ? (
                <Link
                  href={`/blog/${previous.slug}`}
                  className="glass-panel flex flex-col gap-1.5 rounded-2xl border border-border p-5 transition-colors hover:border-border-strong"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-text-dim">
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    Previous
                  </span>
                  <span className="text-sm font-semibold text-text">{previous.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="glass-panel flex flex-col items-end gap-1.5 rounded-2xl border border-border p-5 text-right transition-colors hover:border-border-strong sm:items-end"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-text-dim">
                    Next
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-text">{next.title}</span>
                </Link>
              ) : null}
            </nav>
          ) : null}
        </div>
      </article>
    </>
  );
}
