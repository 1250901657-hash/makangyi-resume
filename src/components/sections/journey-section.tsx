import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

export function JourneySection() {
  return (
    <section id="journey" className="section-shell py-20 md:py-24">
      <SectionHeading
        label="Career Journey"
        title="不是跳跃式经历，而是一条不断扩展视角的职业路径"
        description="我把不同阶段积累到的能力，逐步串成了一条从表达、展示、流程到快速实现的复合型路径。"
      />

      <div className="mt-12 space-y-6 md:mt-14">
        {siteContent.journey.map((item, index) => (
          <article
            key={item.title}
            className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6"
          >
            <div className="flex items-start gap-4 lg:pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/[0.08] font-display text-sm font-semibold text-accent dark:bg-accent/[0.14]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {item.phase}
                </p>
                <p className="font-display text-xl font-semibold text-foreground">
                  {item.period}
                </p>
              </div>
            </div>

            <div className="surface px-6 py-6 md:px-8 md:py-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="text-base leading-8 text-muted">{item.summary}</p>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {item.abilities.map((ability) => (
                    <div
                      key={ability}
                      className="rounded-2xl border border-black/8 bg-black/[0.02] px-4 py-4 text-sm font-medium text-foreground dark:border-white/8 dark:bg-white/[0.04]"
                    >
                      {ability}
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-accent/15 bg-accent/[0.06] px-5 py-5 dark:bg-accent/[0.12]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    它如何连接到现在的我
                  </p>
                  <p className="mt-3 text-sm leading-7 text-foreground md:text-base">
                    {item.connection}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
