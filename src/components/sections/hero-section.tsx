import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;
  const heroIntro =
    "从美工、电商到工厂 PE，再到 AI 网页与内容实践，我更擅长把审美、业务理解和执行力放进同一条工作链路里。";

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
        <div
          aria-hidden="true"
          className="absolute inset-x-[12%] top-[14%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-80"
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
                  {heroIntro}
                </p>
              </div>
            </div>

            <div className="fade-up flex flex-wrap gap-3 [animation-delay:120ms]">
              <a href="#showcase" className="btn-primary">
                查看核心概览
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
            <div className="soft-card fade-up relative min-h-[22rem] overflow-hidden px-5 py-5 md:px-6 md:py-6 [animation-delay:140ms]">
              <div
                aria-hidden="true"
                className="absolute left-[10%] top-[12%] h-28 w-28 rounded-full border border-white/10 [animation:spin-slow_18s_linear_infinite]"
              />
              <div
                aria-hidden="true"
                className="absolute right-[12%] top-[18%] h-[4.5rem] w-[4.5rem] rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-[18%] top-[18%] h-48 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_70%)] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-[-4.5rem] left-1/2 h-72 w-56 -translate-x-1/2 rounded-[45%] bg-[linear-gradient(180deg,rgba(255,248,218,0.95),rgba(255,178,102,0.72)_36%,rgba(255,130,74,0.48)_74%,rgba(255,130,74,0.08)_100%)] shadow-[0_0_48px_rgba(255,170,92,0.22)] [animation:pulse-soft_8s_ease-in-out_infinite]"
              />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    当前方向
                  </p>
                  <p className="mt-4 max-w-xs text-sm leading-7 text-white/88">
                    {identity.currentFocus}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {identity.highlights.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs font-medium text-white/88 backdrop-blur-xl"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="soft-card fade-up px-5 py-5 [animation-delay:220ms]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  工作方式
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {identity.workflow.map((item, index) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-white/88"
                    >
                      0{index + 1} {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="soft-card fade-up px-5 py-5 [animation-delay:320ms]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  快速摘要
                </p>
                <div className="mt-4 space-y-3">
                  {identity.highlights.slice(0, 2).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/88"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
