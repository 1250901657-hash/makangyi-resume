import { BrandIp } from "@/components/brand-ip";
import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;

  return (
    <section id="top" className="section-shell pb-28 pt-8 md:pb-40 md:pt-10">
      <div className="relative min-h-[42rem] overflow-visible md:min-h-[50rem] xl:min-h-[56rem]">
        <div
          aria-hidden="true"
          className="absolute left-[-4%] top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(34,72,255,0.26),transparent_72%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[4%] top-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.2),transparent_72%)] blur-3xl"
        />

        <div className="relative z-20 max-w-[37rem] space-y-8 pt-6 md:space-y-10 md:pt-10 xl:pt-18">
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

              <h1 className="font-display text-[clamp(4.2rem,11vw,9.8rem)] font-semibold leading-[0.86] text-balance">
                <span className="block text-white">把</span>
                <span className="block bg-[linear-gradient(135deg,#fff8ef_0%,#ffc96f_42%,#ff6a00_100%)] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,106,0,0.3)]">
                  设计感
                </span>
                <span className="block text-white">做得</span>
                <span className="block text-white">很有重量</span>
              </h1>
            </div>

            <p className="max-w-lg text-base leading-8 text-white/82 md:text-lg">
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

          <div className="fade-up flex flex-wrap gap-x-8 gap-y-3 [animation-delay:220ms]">
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

        <div className="relative mt-10 xl:absolute xl:right-[-8%] xl:top-[-1.5rem] xl:mt-0 xl:w-[52rem]">
          <div className="relative min-h-[24rem] md:min-h-[32rem] xl:min-h-[54rem]">
            <div className="absolute right-[2%] top-[4%] z-10 xl:right-0 xl:top-0">
              <BrandIp size="lg" showSatellites className="w-[22rem] sm:w-[28rem] xl:w-[44rem]" />
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:block">
              <div
                data-tilt
                className="soft-card relative z-20 w-full px-4 py-4 md:max-w-[14rem] xl:absolute xl:left-[6%] xl:top-[18%] xl:w-[13rem] xl:rotate-[-10deg] xl:rounded-[2rem_3rem_2rem_3rem]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  当前方向
                </p>
                <p className="mt-3 text-sm leading-7 text-white/86">AI 网页 / 内容制作</p>
              </div>

              <div
                data-tilt
                className="soft-card relative z-20 w-full px-4 py-4 md:max-w-[13rem] md:justify-self-end xl:absolute xl:right-[18%] xl:top-[12%] xl:w-[12rem] xl:rotate-[9deg] xl:rounded-[3rem_2rem_3rem_2rem]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  核心词
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/84">
                    审美
                  </span>
                  <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/84">
                    结构
                  </span>
                </div>
              </div>

              <div
                data-tilt
                className="soft-card relative z-20 w-full px-4 py-4 md:max-w-[16rem] xl:absolute xl:left-[10%] xl:bottom-[12%] xl:w-[15rem] xl:rotate-[6deg] xl:rounded-[3rem_3rem_2rem_2rem]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  工作方式
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {identity.workflow.slice(0, 3).map((item, index) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/86"
                    >
                      0{index + 1}
                    </span>
                  ))}
                </div>
              </div>

              <div
                data-tilt
                className="soft-card relative z-20 w-full px-4 py-4 md:max-w-[15rem] md:justify-self-end xl:absolute xl:right-[8%] xl:bottom-[6%] xl:w-[14rem] xl:rotate-[-6deg] xl:rounded-[2rem_3rem_2rem_3rem]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  一句话
                </p>
                <p className="mt-3 text-sm leading-7 text-white/86">把想法更快做成能被看见的作品。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
