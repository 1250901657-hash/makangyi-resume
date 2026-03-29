import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;

  return (
    <section id="top" className="section-shell pb-24 pt-6 md:pb-32 md:pt-8">
      <div className="surface px-5 py-6 md:px-8 md:py-8 xl:px-10 xl:py-10">
        <div
          aria-hidden="true"
          className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(70,217,255,0.26),transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-4%] top-[10%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(138,109,255,0.28),transparent_72%)] blur-3xl [animation:float-gentle_12s_ease-in-out_infinite]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-10%] left-[38%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(183,255,108,0.12),transparent_68%)] blur-3xl"
        />

        <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1.22fr)_minmax(330px,0.78fr)] xl:items-start">
          <div className="space-y-8 xl:space-y-10">
            <div className="fade-up space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">个人简历 / 品牌首页</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.18em] text-muted uppercase">
                  Design · Commerce · Process · AI
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium tracking-[0.18em] text-muted md:text-base">
                  {identity.name} / {identity.englishName}
                </p>

                <h1 className="font-display text-[clamp(3.2rem,9vw,7.4rem)] font-semibold leading-[0.94] text-balance">
                  <span className="block">把</span>
                  <span className="block bg-[linear-gradient(135deg,#eff6ff_12%,#7ce7ff_52%,#6ba8ff_100%)] bg-clip-text text-transparent">
                    视觉表达
                  </span>
                  <span className="block bg-[linear-gradient(135deg,#f4f7ff_0%,#9c8cff_54%,#63d4ff_100%)] bg-clip-text text-transparent">
                    展示逻辑
                  </span>
                  <span className="block">
                    与{" "}
                    <span className="bg-[linear-gradient(135deg,#e7ffca_0%,#63d4ff_38%,#8a6dff_100%)] bg-clip-text text-transparent">
                      AI 实现
                    </span>
                  </span>
                  <span className="block">连成结果</span>
                </h1>
              </div>

              <div className="space-y-4">
                <p className="max-w-3xl text-lg font-medium leading-8 text-white/90 md:text-[1.35rem]">
                  {identity.role}
                </p>
                <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
                  {identity.intro}
                </p>
              </div>
            </div>

            <div className="fade-up flex flex-wrap gap-3 [animation-delay:120ms]">
              <a href="#journey" className="btn-primary">
                查看经历路径
              </a>
              <a href="#contact" className="btn-secondary">
                联系我
              </a>
            </div>

            <div className="fade-up grid gap-3 sm:grid-cols-3 [animation-delay:220ms]">
              {identity.quickStats.map((item, index) => (
                <div
                  key={item.label}
                  className="soft-card px-4 py-4 md:px-5 md:py-5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {item.label}
                  </p>
                  <p
                    className={`mt-3 font-display text-[1.8rem] font-semibold leading-none ${
                      index === 2
                        ? "bg-[linear-gradient(135deg,#9de5ff_0%,#8a6dff_78%)] bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="soft-card fade-up px-5 py-5 md:px-6 md:py-6 [animation-delay:140ms]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                当前方向
              </p>
              <p className="mt-4 text-sm leading-7 text-white/88 md:text-[0.98rem]">
                {identity.currentFocus}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
              {identity.workflow.map((item, index) => (
                <div
                  key={item}
                  className="soft-card fade-up min-h-32 px-4 py-4 [animation-delay:220ms]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    0{index + 1}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-7 text-white/90">{item}</p>
                </div>
              ))}
            </div>

            <div className="soft-card fade-up px-5 py-5 md:px-6 md:py-6 [animation-delay:320ms]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  核心优势
                </p>
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted">Highlights</span>
              </div>

              <div className="mt-5 space-y-3">
                {identity.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 text-sm leading-7 text-white/88"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
