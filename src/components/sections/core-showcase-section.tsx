import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

const journeyPreview = siteContent.journey.slice(0, 3);
const capabilityPreview = siteContent.capabilities.slice(0, 3);
const projectPreview = siteContent.projects.slice(0, 2);
const toolPreview = Array.from(
  new Set(siteContent.skillGroups.flatMap((group) => group.items)),
).slice(0, 10);

const projectTints = [
  "from-[#46d9ff]/26 via-[#6ba8ff]/14 to-transparent",
  "from-[#8a6dff]/24 via-[#46d9ff]/12 to-transparent",
];

export function CoreShowcaseSection() {
  return (
    <section id="showcase" className="section-shell py-20 md:py-28">
      <div className="surface px-6 py-8 md:px-10 md:py-10">
        <div
          aria-hidden="true"
          className="absolute left-[-4rem] top-[-2rem] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(70,217,255,0.14),transparent_72%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[10%] top-[12%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(138,109,255,0.18),transparent_72%)] blur-3xl [animation:float-gentle_14s_ease-in-out_infinite]"
        />

        <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)]">
          <div className="space-y-8">
            <SectionHeading
              label="核心概览"
              title="把重点压缩到一屏里，但让视觉和节奏更强"
              description="我把原来的经历、能力、项目和工具浓缩成一组更短、更好读的展示卡，减少信息负担，但保留你的核心判断力。"
            />

            <div className="grid gap-4 md:grid-cols-3">
              {journeyPreview.map((item, index) => (
                <article key={item.phase} className="soft-card px-5 py-5">
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-4 top-0 h-px bg-gradient-to-r ${projectTints[index % 2]}`}
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {item.phase}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold leading-7 text-white">{item.period}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.connection}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {projectPreview.map((project, index) => (
                <article key={project.name} className="soft-card overflow-hidden p-5">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.02)] p-5">
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-br ${projectTints[index]} opacity-100`}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute right-[-1rem] top-4 h-28 w-28 rounded-full border border-white/10 [animation:spin-slow_18s_linear_infinite]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute bottom-[-2rem] left-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_70%)] blur-2xl"
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          {project.category}
                        </p>
                        <h3 className="mt-3 font-display text-[1.9rem] font-semibold leading-[1.04] text-white">
                          {project.name}
                        </h3>
                      </div>
                      <span className="text-xs uppercase tracking-[0.18em] text-muted">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted">{project.highlight}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="soft-card px-5 py-5 md:px-6 md:py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                我能做什么
              </p>

              <div className="mt-5 space-y-3">
                {capabilityPreview.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-card px-5 py-5 md:px-6 md:py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                工作方式
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {siteContent.identity.workflow.map((item, index) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-white/88"
                  >
                    0{index + 1} {item}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-muted">{siteContent.about.text}</p>
            </div>

            <div className="soft-card px-5 py-5 md:px-6 md:py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                技能与工具
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {toolPreview.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-white/88"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
