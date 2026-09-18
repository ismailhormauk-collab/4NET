import Link from "next/link";
import type { ReactNode } from "react";

export type InlineLink = { match: string; href: string };

/** Renders text with select substrings swapped for internal links (first match only per link). */
export function InlineText({ text, links }: { text: string; links?: InlineLink[] }) {
  if (!links || links.length === 0) return <>{text}</>;

  let remaining = text;
  const nodes: ReactNode[] = [];
  let keyIndex = 0;

  for (const link of links) {
    const idx = remaining.indexOf(link.match);
    if (idx === -1) continue;
    const before = remaining.slice(0, idx);
    if (before) nodes.push(<span key={`t-${keyIndex++}`}>{before}</span>);
    nodes.push(
      <Link key={`l-${keyIndex++}`} href={link.href} className="text-accent hover:underline">
        {link.match}
      </Link>
    );
    remaining = remaining.slice(idx + link.match.length);
  }
  if (remaining) nodes.push(<span key={`t-${keyIndex++}`}>{remaining}</span>);

  return <>{nodes}</>;
}
