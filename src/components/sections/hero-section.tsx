import { BrandIp } from "@/components/brand-ip";
import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;

  return (
    <section id="top" className="section-shell pb-24 pt-8 md:pb-32 md:pt-10">
      <div className="relative mx-auto max-w-[88rem] overflow-visible px-2 md:px-4 xl:px-6">
        <div
          aria-hidden="true"
          className="absolute left-[4%] top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(34,72,255,0.26),transparent_72%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[10%] top-[10%] h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.2),transparent_72%)] blur-3xl"
        />

        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.02fr)] xl:items-center">
          <div className="relative z-20 max-w-[31rem] space-y-7 pt-6 md:space-y-8 md:pt-10 xl:pt-12">
            <div className="space-y-5 fade-up">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">个人简历 / 品牌首页</span>
                <span className="rounded-full border border-white/10 bg-[#0f2b96]/60 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/86">
                  AI Visual Ecosystem
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium tracking-[0.18em] text-white/72 md:text-base">
                  {identity.name} / {identity.englishName}
                </p>

                <h1 className="font-display text-[clamp(2.55rem,5.8vw,4.8rem)] font-semibold leading-[0.98] text-balance">
                  <span className="block text-white">
                    把
                    <span className="bg-[linear-gradient(135deg,#fff8ef_0%,#ffc96f_42%,#ff6a00_100%)] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,106,0,0.3)]">
                      设计感
                    </span>
                  </span>
                  <span className="block text-white">做得更有重量</span>
                </h1>
              </div>

              <p className="max-w-md text-[0.95rem] leading-7 text-white/80 md:text-base">
                {identity.role}
              </p>
            </div>

            <div className="fade-up flex flex-wrap gap-3 [animation-delay:120ms]">
              <a href="#showcase" className="btn-primary">
                看核心生态
              </a>
              <a href="#contact" className="btn-secondary">
                联系我
              </a>
            </div>

            <div className="fade-up grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-3 [animation-delay:220ms]">
              {identity.quickStats.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/56">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-white/88">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[36rem] xl:max-w-[39rem]">
            <div className="relative min-h-[23rem] md:min-h-[28rem] xl:min-h-[34rem]">
              <div className="absolute inset-x-0 top-2 flex justify-center">
                <BrandIp size="lg" showSatellites className="w-[16rem] sm:w-[20rem] xl:w-[26rem]" />
              </div>

              <div className="absolute inset-x-0 bottom-0 grid gap-3 sm:grid-cols-3">
                <div data-tilt className="soft-card px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    当前方向
                  </p>
                  <p className="mt-3 text-xs leading-6 text-white/84">AI 网页 / 内容制作</p>
                </div>

                <div data-tilt className="soft-card px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    核心词
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] text-white/84">
                      审美
                    </span>
                    <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] text-white/84">
                      结构
                    </span>
                  </div>
                </div>

                <div data-tilt className="soft-card px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    工作方式
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {identity.workflow.slice(0, 3).map((item, index) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/86"
                      >
                        0{index + 1}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
