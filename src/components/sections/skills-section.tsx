import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

const tintClasses = [
  "bg-[radial-gradient(circle_at_top_right,rgba(70,217,255,0.12),transparent_42%)]",
  "bg-[radial-gradient(circle_at_top_right,rgba(138,109,255,0.14),transparent_42%)]",
  "bg-[radial-gradient(circle_at_top_right,rgba(107,168,255,0.12),transparent_42%)]",
  "bg-[radial-gradient(circle_at_top_right,rgba(183,255,108,0.1),transparent_42%)]",
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-20 md:py-28">
      <div className="surface px-6 py-8 md:px-10 md:py-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-5">
            <SectionHeading
              label="技能与工具"
              title="把真正相关的能力，整理成一张清楚的能力地图"
              description="这里不做堆砌式 logo 墙，只保留和你当前路径真正有关的能力与工具。"
            />

            <div className="soft-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                能力表达
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                我把这部分做成更接近“方法地图”的阅读感，让人先看到你的能力组织方式，再看到具体工具。
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
                    <h3 className="font-display text-2xl font-semibold leading-[1.08] tracking-tight text-white">
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
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-white/88"
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
