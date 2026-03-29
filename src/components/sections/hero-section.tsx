import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;

  return (
    <section id="top" className="section-shell pb-24 pt-8 md:pb-32 md:pt-10">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.618fr)_minmax(320px,1fr)]">
        <div className="surface section-wash px-6 py-8 md:px-10 md:py-12 xl:px-12 xl:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-14 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,124,154,0.5),rgba(255,124,154,0.12)_42%,transparent_74%)] blur-2xl [animation:halo-drift_12s_ease-in-out_infinite]"
          />
          <div
            aria-hidden="true"
            className="absolute left-[18%] top-[18%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(98,216,255,0.42),transparent_70%)] blur-2xl [animation:float-gentle_10s_ease-in-out_infinite]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-10 right-[8%] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,197,110,0.28),transparent_72%)] blur-2xl"
          />
          <div className="relative grid gap-10 xl:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] xl:items-end">
            <div className="space-y-8">
              <div className="space-y-5 fade-up">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow">{identity.label}</span>
                  <span className="soft-card rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                    Golden Ratio Layout / Liquid Plastic Mood
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted">
                    {identity.name} · {identity.englishName}
                  </p>
                  <h1 className="font-display text-[clamp(2.9rem,7vw,5.9rem)] font-semibold leading-[1.08] tracking-tight text-balance">
                    {identity.role}
                  </h1>
                </div>

                <p className="max-w-3xl text-lg leading-9 text-muted md:text-xl">
                  {identity.intro}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 fade-up [animation-delay:120ms]">
                <a href="#journey" className="btn-primary">
                  查看经历路径
                </a>
                <a href="#projects" className="btn-secondary">
                  浏览作品方向
                </a>
                <a href="#contact" className="btn-secondary">
                  联系我
                </a>
              </div>

              <div className="grid gap-3 fade-up md:grid-cols-3 [animation-delay:240ms]">
                {identity.quickStats.map((item) => (
                  <div key={item.label} className="soft-card px-4 py-4 md:px-5">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-foreground md:text-base">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="surface relative overflow-hidden px-6 py-8 md:px-8 md:py-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/65 to-transparent" />

          <div className="space-y-8">
            <div className="space-y-3 fade-up [animation-delay:120ms]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                当前表达
              </p>
              <p className="text-base leading-8 text-muted">{identity.currentFocus}</p>
            </div>

            <div className="space-y-4 fade-up [animation-delay:220ms]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                复合背景带来的优势
              </p>
              <div className="space-y-3">
                {identity.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/8 px-4 py-3 text-sm leading-7 text-foreground dark:border-white/8"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 fade-up [animation-delay:320ms]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                我的工作方式
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {identity.workflow.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-accent/[0.06] px-4 py-4 text-sm font-medium text-foreground dark:bg-accent/[0.14]"
                  >
                    <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-accent">
                      0{index + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
