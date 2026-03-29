import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

export function SkillsSection() {
  const tintClasses = [
    "bg-[linear-gradient(155deg,rgba(98,216,255,0.16),rgba(255,255,255,0.14))]",
    "bg-[linear-gradient(155deg,rgba(255,124,154,0.16),rgba(255,255,255,0.14))]",
    "bg-[linear-gradient(155deg,rgba(255,197,110,0.16),rgba(255,255,255,0.14))]",
    "bg-[linear-gradient(155deg,rgba(123,128,255,0.16),rgba(255,255,255,0.14))]",
  ];

  return (
    <section id="skills" className="section-shell py-20 md:py-28">
      <div className="surface px-6 py-8 md:px-10 md:py-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-5">
            <SectionHeading
              label="Skills & Tools"
              title="技能与工具"
              description="不做 logo 墙，只保留和你当前经历真正相关的能力与工具。"
            />

            <div className="soft-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                为什么这样排
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                我把这部分做成一张“能力地图”，强调的是每组能力的气质和使用场景，而不是堆一堆图标，让页面更像个人方法论，而不是工具清单。
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {siteContent.skillGroups.map((group, index) => (
              <article
                key={group.title}
                className={`soft-card px-5 py-5 md:px-6 md:py-6 ${tintClasses[index]}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                      {group.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-muted">{group.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/60 bg-white/24 px-3 py-2 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.76)] backdrop-blur-xl dark:border-white/14 dark:bg-white/4"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
