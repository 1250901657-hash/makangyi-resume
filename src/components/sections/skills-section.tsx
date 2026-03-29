import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-20 md:py-24">
      <SectionHeading
        label="Skills & Tools"
        title="技能与工具"
        description="不做 logo 墙，只保留和你当前经历真正相关的能力与工具。"
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {siteContent.skillGroups.map((group) => (
          <article key={group.title} className="surface px-6 py-6 md:px-7 md:py-7">
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>
              <p className="text-sm leading-7 text-muted">{group.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/8 bg-black/[0.02] px-3 py-2 text-sm font-medium text-foreground dark:border-white/8 dark:bg-white/[0.04]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
