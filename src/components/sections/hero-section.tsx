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
                <span className="micro-label rounded-full border border-white/10 bg-[#0f2b96]/60 px-3.5 py-1.5 text-white/78">
                  AI Visual Ecosystem
                </span>
              </div>

              <div className="space-y-4">
                <p className="micro-label text-white/58 md:text-[11px]">
                  {identity.name} / {identity.englishName}
                </p>

                <h1 className="font-display text-[clamp(2.35rem,5.2vw,4.1rem)] leading-[1.02] text-balance">
                  <span className="block text-white">
                    把
                    <span className="bg-[linear-gradient(135deg,#fff8ef_0%,#ffc96f_42%,#ff6a00_100%)] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,106,0,0.3)]">
                      设计感
                    </span>
                  </span>
                  <span className="block text-white">做得更有重量</span>
                </h1>
              </div>

              <p className="max-w-[25rem] text-[0.92rem] leading-8 text-white/80 md:text-[0.98rem]">
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

            <div className="fade-up grid gap-0 overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.03] sm:grid-cols-3 sm:divide-x sm:divide-white/10 [animation-delay:220ms]">
              {identity.quickStats.map((item) => (
                <div key={item.label} className="space-y-1 px-4 py-4 sm:px-5 sm:py-5">
                  <p className="micro-label text-white/46">
                    {item.label}
                  </p>
                  <p className="text-[0.95rem] font-medium tracking-[0.02em] text-white/88">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[36rem] xl:max-w-[39rem]">
            <div className="relative min-h-[23rem] md:min-h-[28rem] xl:min-h-[34rem]">
              <div className="absolute inset-x-0 top-2 flex justify-center">
                <BrandIp size="lg" showSatellites className="w-[16rem] sm:w-[20rem] xl:w-[26rem]" />
              </div>

              <div data-tilt className="soft-card absolute inset-x-0 bottom-0 overflow-hidden">
                <div className="grid sm:grid-cols-3 sm:divide-x sm:divide-white/10">
                  <div className="space-y-2 px-4 py-4 sm:px-5 sm:py-5">
                    <p className="micro-label text-accent">当前方向</p>
                    <p className="text-[0.9rem] leading-7 text-white/84">AI 网页 / 内容制作</p>
                  </div>

                  <div className="space-y-2 border-t border-white/10 px-4 py-4 sm:border-t-0 sm:px-5 sm:py-5">
                    <p className="micro-label text-accent">核心词</p>
                    <p className="text-[0.9rem] leading-7 tracking-[0.06em] text-white/84">
                      审美 · 结构
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-white/10 px-4 py-4 sm:border-t-0 sm:px-5 sm:py-5">
                    <p className="micro-label text-accent">工作方式</p>
                    <div className="space-y-2">
                      {identity.workflow.slice(0, 3).map((item, index) => (
                        <p key={item} className="flex items-center gap-2 text-[0.82rem] leading-6 text-white/84">
                          <span className="micro-label text-white/40">0{index + 1}</span>
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>
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
