import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

export function JourneySection() {
  const accentClasses = [
    "radial-gradient(circle at top right, rgba(70, 217, 255, 0.22), transparent 70%)",
    "radial-gradient(circle at top right, rgba(138, 109, 255, 0.24), transparent 70%)",
    "radial-gradient(circle at top right, rgba(107, 168, 255, 0.2), transparent 70%)",
    "radial-gradient(circle at top right, rgba(183, 255, 108, 0.18), transparent 70%)",
  ];

  return (
    <section id="journey" className="section-shell py-20 md:py-28">
      <div className="grid gap-8 xl:grid-cols-[minmax(280px,0.92fr)_minmax(0,1.618fr)]">
        <div className="space-y-5 xl:sticky xl:top-28 xl:self-start">
          <SectionHeading
            label="经历路径"
            title="从表达、展示到流程与 AI 实现，一步步把能力链路接完整"
            description="我不是从单一岗位长出来的，这些阶段一起构成了现在这条更完整的工作路径。"
          />

          <div className="soft-card px-6 py-6 md:px-7 md:py-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              阅读方式
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              这一段我保留原来的信息结构，但把视觉改成更有节奏的时间轴，让每个阶段像一张经过设计的能力切片。
            </p>
          </div>
        </div>

        <div className="relative space-y-5">
          <div className="absolute bottom-10 left-6 top-10 hidden w-px bg-gradient-to-b from-[#46d9ff]/50 via-white/12 to-transparent lg:block" />

          {siteContent.journey.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-4 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-6"
            >
              <div className="relative flex items-start gap-4 lg:pt-6">
                <div
                  className="relative z-10 flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] text-sm font-semibold text-white shadow-[0_12px_28px_rgba(1,4,15,0.24)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-[inherit] opacity-100"
                    style={{ backgroundImage: accentClasses[index] }}
                  />
                  <span className="relative z-10">{String(index + 1).padStart(2, "0")}</span>
                </div>
              </div>

              <div className="surface px-6 py-6 md:px-8 md:py-8">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="eyebrow">{item.phase}</span>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                      {item.period}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-semibold leading-[1.12] tracking-tight text-white md:text-[2.4rem]">
                      {item.title}
                    </h3>
                    <p className="max-w-3xl text-base leading-8 text-muted">{item.summary}</p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    {item.abilities.map((ability) => (
                      <div
                        key={ability}
                        className="soft-card px-4 py-4 text-sm font-medium leading-7 text-white/88"
                      >
                        {ability}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] px-5 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      它如何连接到现在
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/90 md:text-base">
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
