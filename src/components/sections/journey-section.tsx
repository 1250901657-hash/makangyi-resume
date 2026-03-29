import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

export function JourneySection() {
  const accentClasses = [
    "bg-[linear-gradient(145deg,rgba(255,124,154,0.22),rgba(255,255,255,0.16))]",
    "bg-[linear-gradient(145deg,rgba(98,216,255,0.22),rgba(255,255,255,0.14))]",
    "bg-[linear-gradient(145deg,rgba(255,197,110,0.22),rgba(255,255,255,0.14))]",
    "bg-[linear-gradient(145deg,rgba(123,128,255,0.22),rgba(255,255,255,0.14))]",
  ];

  return (
        title="不是跳跃式经历，而是一条不断扩展视角的职业路径"
    <section id="journey" className="section-shell py-20 md:py-28">
      <div className="grid gap-8 xl:grid-cols-[minmax(280px,0.92fr)_minmax(0,1.618fr)]">
        <div className="space-y-5 xl:sticky xl:top-28 xl:self-start">
          <SectionHeading
            label="Career Journey"
            title="不是跳跃式经历，而是一条不断扩展视角的职业路径"
            description="我把不同阶段积累到的能力，逐步串成了一条从表达、展示、流程到快速实现的复合型路径。"
          />

          <div className="surface px-6 py-6 md:px-7 md:py-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              设计视角
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              这一段我把节奏做成了时间轴式推进，左侧负责“阶段识别”，右侧负责“能力沉淀”，让阅读感更像在看一条逐步放大的成长曲线。
            </p>
          </div>
        </div>

        <div className="relative space-y-5">
          <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-accent/70 via-black/10 to-transparent lg:block dark:via-white/10" />
          {siteContent.journey.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-4 lg:grid-cols-[110px_minmax(0,1fr)] lg:gap-6"
            >
              <div className="relative flex items-start gap-4 lg:pl-0 lg:pt-5">
                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/60 font-display text-sm font-semibold text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_22px_rgba(15,23,42,0.08)] ${accentClasses[index]}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="surface px-6 py-6 md:px-8 md:py-8">
                <div className="relative space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="eyebrow">{item.phase}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                      {item.period}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-[2.2rem] md:leading-[1.18]">
                      {item.title}
                    </h3>
                    <p className="max-w-3xl text-base leading-8 text-muted">{item.summary}</p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    {item.abilities.map((ability) => (
                      <div key={ability} className="soft-card px-4 py-4 text-sm font-medium text-foreground">
                        {ability}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[28px] border border-accent/12 bg-accent/[0.07] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] dark:bg-accent/[0.12]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
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
      </div>
    </section>
  );
}
