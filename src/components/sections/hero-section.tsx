import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;
  const heroIntro =
    "从美工、电商到工厂 PE，再到 AI 网页与内容实践，我更擅长把审美、业务理解和执行力放进同一条工作链路里。";

  return (
    <section id="top" className="section-shell pb-28 pt-8 md:pb-36 md:pt-10">
      <div className="surface px-6 py-7 md:px-10 md:py-10 xl:px-12 xl:py-12">
        <div
          aria-hidden="true"
          className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(41,87,255,0.3),transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-4%] top-[10%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.28),transparent_72%)] blur-3xl [animation:float-gentle_12s_ease-in-out_infinite]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-10%] left-[38%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,166,55,0.12),transparent_68%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-[12%] top-[14%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-80"
        />
        <div
          aria-hidden="true"
          className="absolute left-[14%] top-[20%] h-2 w-2 rounded-full bg-[#ff9d0a] shadow-[0_0_18px_rgba(255,157,10,0.9)] [animation:pulse-soft_3.2s_ease-in-out_infinite]"
        />
        <div
          aria-hidden="true"
          className="absolute right-[28%] top-[28%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)] [animation:pulse-soft_4.4s_ease-in-out_infinite]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[18%] left-[48%] h-40 w-px bg-gradient-to-b from-transparent via-white/18 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute left-[42%] top-[18%] h-[26rem] w-[18rem] -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(124,231,255,0.06),transparent)] blur-3xl [animation:float-gentle_11s_ease-in-out_infinite]"
        />

        <div className="relative grid gap-10 xl:grid-cols-[minmax(0,1.22fr)_minmax(360px,0.78fr)] xl:items-start">
          <div className="space-y-9 xl:space-y-12">
            <div className="fade-up space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">个人简历 / 品牌首页</span>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white/85 uppercase">
                  Design · Commerce · Process · AI
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium tracking-[0.18em] text-muted md:text-base">
                  {identity.name} / {identity.englishName}
                </p>

                <h1 className="font-display text-[clamp(3.2rem,9vw,7.4rem)] font-semibold leading-[0.94] text-balance">
                  <span className="block">把</span>
                  <span className="block bg-[linear-gradient(135deg,#fff8ef_0%,#ffbf61_46%,#ff6a00_100%)] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,106,0,0.32)]">
                    视觉表达
                  </span>
                  <span className="block bg-[linear-gradient(135deg,#fff6eb_0%,#ff8f35_52%,#ff3d00_100%)] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,92,0,0.34)]">
                    展示逻辑
                  </span>
                  <span className="block">
                    与{" "}
                    <span className="bg-[linear-gradient(135deg,#fff9ee_0%,#ffcf6e_34%,#ff7a00_100%)] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(255,166,55,0.28)]">
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

            <div className="fade-up grid gap-4 sm:grid-cols-3 [animation-delay:220ms]">
              {identity.quickStats.map((item, index) => (
                <div
                  key={item.label}
                  data-tilt
                  className="soft-card px-4 py-4 md:px-5 md:py-5"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {item.label}
                  </p>
                  <p
                    className={`mt-3 font-display text-[1.8rem] font-semibold leading-none ${
                      index === 2
                        ? "bg-[linear-gradient(135deg,#fff4dd_0%,#ff9d0a_78%)] bg-clip-text text-transparent"
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
            <div
              data-tilt
              className="soft-card fade-up relative min-h-[23rem] overflow-hidden px-5 py-5 md:px-6 md:py-6 [animation-delay:140ms]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_24%,transparent)]"
              />
              <div
                aria-hidden="true"
                className="absolute left-[10%] top-[12%] h-28 w-28 rounded-full border border-white/8 [animation:spin-slow_18s_linear_infinite]"
              />
              <div
                aria-hidden="true"
                className="absolute left-[7%] top-[9%] h-40 w-40 rounded-full border border-white/5 [animation:spin-slow_26s_linear_infinite_reverse]"
              />
              <div
                aria-hidden="true"
                className="absolute right-[12%] top-[18%] h-[4.5rem] w-[4.5rem] rounded-full border border-white/8"
              />
              <div
                aria-hidden="true"
                className="absolute inset-y-[16%] left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/18 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-[12%] top-[46%] h-px bg-gradient-to-r from-transparent via-white/14 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-[18%] top-[16%] h-44 rounded-full bg-[radial-gradient(circle,rgba(255,206,122,0.28),transparent_72%)] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute left-[22%] top-[26%] h-3 w-3 rounded-full bg-white/90 shadow-[0_0_16px_rgba(255,255,255,0.95)] [animation:pulse-soft_2.8s_ease-in-out_infinite]"
              />
              <div
                aria-hidden="true"
                className="absolute right-[24%] top-[30%] h-2 w-2 rounded-full bg-[#ffb23e] shadow-[0_0_18px_rgba(255,178,62,0.9)] [animation:pulse-soft_3.6s_ease-in-out_infinite]"
              />
              <div
                aria-hidden="true"
                className="absolute left-[16%] top-[8%] h-[18rem] w-[7rem] -rotate-[18deg] bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.05),transparent)] blur-2xl [animation:float-gentle_9s_ease-in-out_infinite]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-[1rem] left-1/2 h-[18.5rem] w-[18.5rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_38%,rgba(255,189,86,1)_0%,rgba(255,130,22,0.98)_44%,rgba(255,93,0,0.96)_82%,rgba(255,80,0,0.88)_100%)] shadow-[0_0_70px_rgba(255,106,0,0.34)]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-[4rem] left-1/2 h-[13.5rem] w-[8.5rem] -translate-x-1/2 rounded-[46%] bg-[radial-gradient(circle_at_52%_18%,rgba(255,201,102,0.98),rgba(255,118,14,0.94)_48%,rgba(217,30,0,0.92)_86%,rgba(217,30,0,0.64)_100%)] shadow-[inset_-18px_-28px_36px_rgba(140,12,0,0.34),0_0_48px_rgba(255,128,32,0.3)]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-[-3.5rem] left-1/2 h-36 w-[120%] -translate-x-1/2 rounded-t-[48%] bg-[linear-gradient(180deg,rgba(21,47,201,0.18),rgba(13,28,133,0.6)_42%,rgba(6,13,63,0.86)_100%)] blur-sm"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-[1.5rem] left-[18%] right-[18%] h-12 rounded-full bg-[radial-gradient(circle,rgba(22,18,46,0.46),transparent_70%)] blur-2xl"
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
              <div data-tilt className="soft-card fade-up px-5 py-5 [animation-delay:220ms]">
                <div
                  aria-hidden="true"
                className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#ff9d0a]/90 to-transparent"
              />
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

              <div data-tilt className="soft-card fade-up px-5 py-5 [animation-delay:320ms]">
                <div
                  aria-hidden="true"
                className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6a00]/90 to-transparent"
              />
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
