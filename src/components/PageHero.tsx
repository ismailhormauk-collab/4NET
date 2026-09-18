import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Crumb } from "@/lib/seo";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  /** Breadcrumb trail after "Home", e.g. [{ label: "Installation", href: "/installation" }, { label: "Fire TV & Firestick", href: "/installation/firetv" }] */
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Breadcrumbs items={crumbs} align="center" />

        <div className="mt-6 flex flex-col items-center gap-5">
          <Badge>{eyebrow}</Badge>
          <h1 className="text-4xl font-bold leading-tight text-text sm:text-5xl">{title}</h1>
          {description ? (
            <p className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
