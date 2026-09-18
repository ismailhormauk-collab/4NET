import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left"
      } max-w-2xl`}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base leading-relaxed text-text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
