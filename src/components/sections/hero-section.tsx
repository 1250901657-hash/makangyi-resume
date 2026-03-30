import { BrandIp } from "@/components/brand-ip";
import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;
  const heroIntro =
    "美工、电商、PE 与 AI 实践，最后都服务于同一件事：把想法更快做成能被看见的作品。";

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

        <div className="relative grid gap-10 xl:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] xl:items-start">
          <div className="space-y-9 xl:space-y-12">
            <div className="fade-up space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">个人简历 / 品牌首页</span>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white/85 uppercase">
                  Visual · Logic · AI
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium tracking-[0.18em] text-muted md:text-base">
                  {identity.name} / {identity.englishName}
                </p>

                <h1 className="font-display text-[clamp(3.2rem,9vw,7.4rem)] font-semibold leading-[0.94] text-balance">
                  <span className="block">把</span>
                  <span className="block bg-[linear-gradient(135deg,#fff8ef_0%,#ffbf61_46%,#ff6a00_100%)] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,106,0,0.32)]">
                    设计感
                  </span>
                  <span className="block bg-[linear-gradient(135deg,#fff6eb_0%,#ff8f35_52%,#ff3d00_100%)] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,92,0,0.34)]">
                    与 AI
                  </span>
                  <span className="block">做成作品</span>
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
              className="soft-card fade-up relative min-h-[25rem] overflow-hidden px-5 py-6 md:px-6 md:py-7 [animation-delay:140ms]"
            >
              <div className="relative flex h-full flex-col items-center justify-between gap-6">
                <div className="w-full text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    IP 主角 / AI Visual Ecosystem
                  </p>
                </div>

                <BrandIp size="lg" showSatellites className="mx-auto" />

                <div className="flex flex-wrap justify-center gap-2.5">
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium text-white/88 backdrop-blur-xl">
                    审美表达
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium text-white/88 backdrop-blur-xl">
                    结构逻辑
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium text-white/88 backdrop-blur-xl">
                    AI 实现
                  </span>
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
                  当前方向
                </p>
                <p className="mt-4 text-sm leading-7 text-white/88">AI 网页 / 内容制作 / 轻量建站</p>
              </div>

              <div data-tilt className="soft-card fade-up px-5 py-5 [animation-delay:320ms]">
                <div
                  aria-hidden="true"
                className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6a00]/90 to-transparent"
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
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
