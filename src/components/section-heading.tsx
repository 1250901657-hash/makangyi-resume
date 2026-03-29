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
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-[56rem]";
  const labelWrapClass = align === "center" ? "justify-center" : "";
  const descriptionClass = align === "center" ? "mx-auto max-w-2xl" : "max-w-[46rem]";

  return (
    <div className={`space-y-6 ${alignmentClass}`}>
      <div className={`flex ${labelWrapClass}`}>
        <span className="eyebrow">{label}</span>
      </div>
      <div className="space-y-4">
        <h2 className="font-display text-[2.35rem] font-semibold leading-[1.02] tracking-tight text-balance text-white md:text-[3.8rem]">
          {title}
        </h2>
        {description ? (
          <p className={`text-base leading-8 text-muted md:text-[1.05rem] ${descriptionClass}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
