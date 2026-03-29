import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;

  return (
    <section id="top" className="section-shell pb-20 pt-8 md:pb-28 md:pt-12">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,420px)]">
        <div className="surface relative overflow-hidden px-6 py-8 md:px-10 md:py-12">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/12 blur-3xl dark:bg-accent/18" />
          <div className="absolute left-10 top-10 h-px w-24 bg-gradient-to-r from-accent/70 to-transparent" />

          <div className="relative space-y-8">
            <div className="space-y-5 fade-up">
              <span className="eyebrow">{identity.label}</span>
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted">
                  {identity.name} / {identity.englishName}
                </p>
                <h1 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl md:leading-[1.08]">
                  {identity.role}
                </h1>
              </div>
              <p className="max-w-3xl text-lg leading-9 text-muted md:text-xl">
                {identity.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 fade-up [animation-delay:120ms]">
              <a href="#journey" className="btn-primary">
                查看经历
              </a>
              <a href="#contact" className="btn-secondary">
                联系我
              </a>
            </div>

            <div className="grid gap-3 fade-up md:grid-cols-3 [animation-delay:240ms]">
              {identity.quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/8 bg-black/[0.025] px-4 py-4 dark:border-white/8 dark:bg-white/[0.04]"
                >
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
