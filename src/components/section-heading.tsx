import type { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={`space-y-4 ${alignmentClass}`}>
      <span className="eyebrow">{label}</span>
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-8 text-muted md:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
