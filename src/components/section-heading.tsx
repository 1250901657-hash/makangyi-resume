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
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-[52rem]";
  const labelWrapClass = align === "center" ? "justify-center" : "";
  const descriptionClass = align === "center" ? "mx-auto max-w-2xl" : "max-w-[42rem]";

  return (
    <div className={`space-y-5 ${alignmentClass}`}>
      <div className={`flex ${labelWrapClass}`}>
        <span className="eyebrow">{label}</span>
      </div>
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-[3.15rem] md:leading-[1.14]">
          {title}
        </h2>
        {description ? (
          <p className={`text-base leading-8 text-muted md:text-lg ${descriptionClass}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
