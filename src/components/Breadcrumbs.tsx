import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema, type Crumb } from "@/lib/seo";

export function Breadcrumbs({
  items,
  align = "start",
  className = "",
}: {
  items: Crumb[];
  align?: "start" | "center";
  className?: string;
}) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }}
      />
      <nav aria-label="Breadcrumb" className={className}>
        <ol
          className={`flex flex-wrap items-center gap-1.5 text-xs text-text-dim ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {index > 0 ? <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                {isLast ? (
                  <span className="text-text-muted" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="transition-colors hover:text-text-muted">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
