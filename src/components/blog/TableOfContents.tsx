import Link from "next/link";
import { ListTree } from "lucide-react";

export function TableOfContents({ headings }: { headings: { id: string; text: string }[] }) {
  if (headings.length < 4) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="glass-panel mb-10 rounded-2xl border border-border p-6"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-text">
        <ListTree className="h-4 w-4 text-accent" aria-hidden="true" />
        On this page
      </div>
      <ol className="mt-4 flex flex-col gap-2">
        {headings.map((heading, index) => (
          <li key={heading.id}>
            <Link
              href={`#${heading.id}`}
              className="flex gap-2 text-sm text-text-muted transition-colors hover:text-accent"
            >
              <span className="text-text-dim">{index + 1}.</span>
              {heading.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
