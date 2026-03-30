import { BrandIp } from "@/components/brand-ip";
import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;

  return (
    <section id="top" className="section-shell pb-28 pt-8 md:pb-40 md:pt-10">
      <div className="relative overflow-visible px-2 md:px-4">
        <div
          aria-hidden="true"
          className="absolute left-[-6%] top-8 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(34,72,255,0.3),transparent_72%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[6%] top-[10%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.22),transparent_72%)] blur-3xl"
        />

        <div className="grid gap-12 xl:grid-cols-[minmax(0,0.82fr)_minmax(420px,1.18fr)] xl:items-end">
          <div className="relative z-10 max-w-[36rem] space-y-8 pt-6 md:space-y-10 xl:pt-14">
            <div className="space-y-5 fade-up">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">个人简历 / 品牌首页</span>
                <span className="rounded-full border border-white/10 bg-[#102a89]/60 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/86">
                  AI Visual Ecosystem
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium tracking-[0.18em] text-white/74 md:text-base">
                  {identity.name} / {identity.englishName}
                </p>

                <h1 className="font-display text-[clamp(3.6rem,10vw,8.6rem)] font-semibold leading-[0.9] text-balance">
                  <span className="block text-white">让</span>
                  <span className="block bg-[linear-gradient(135deg,#fff8ef_0%,#ffca73_42%,#ff6a00_100%)] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(255,106,0,0.34)]">
                    设计感
                  </span>
                  <span className="block text-white">跑出界面</span>
                </h1>
              </div>

              <p className="max-w-xl text-lg leading-8 text-white/86 md:text-[1.2rem]">
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

            <div className="fade-up flex flex-wrap gap-3 [animation-delay:220ms]">
              {identity.quickStats.map((item, index) => (
                <div
                  key={item.label}
                  data-tilt
                  className={`soft-card px-4 py-3.5 ${
                    index === 1 ? "rotate-[-5deg]" : index === 2 ? "translate-y-4 rotate-[4deg]" : ""
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[32rem] md:min-h-[38rem] xl:min-h-[44rem]">
            <div
              aria-hidden="true"
              className="absolute left-[10%] top-[16%] h-64 w-64 rounded-full border border-white/10 [animation:spin-slow_28s_linear_infinite]"
            />
            <div
              aria-hidden="true"
              className="absolute left-[18%] top-[22%] h-[24rem] w-[24rem] rounded-full border border-white/8 [animation:spin-slow_42s_linear_infinite_reverse]"
            />
            <div
              aria-hidden="true"
              className="absolute left-[6%] top-[28%] h-[14rem] w-[30rem] rounded-full border border-white/10 [transform:rotate(-12deg)]"
            />
            <div
              aria-hidden="true"
              className="absolute left-[16%] top-[34%] h-[12rem] w-[28rem] rounded-full border border-white/8 [transform:rotate(14deg)]"
            />

            <div className="absolute right-[-10%] top-[-2%] z-20">
              <BrandIp size="lg" showSatellites className="w-[24rem] sm:w-[30rem] xl:w-[38rem]" />
            </div>

            <div
              data-tilt
              className="soft-card absolute left-[2%] top-[8%] z-30 w-48 rotate-[-8deg] rounded-[2rem_3rem_1.5rem_3rem] px-4 py-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                当前方向
              </p>
              <p className="mt-3 text-sm leading-7 text-white/88">AI 网页 / 内容制作 / 轻量建站</p>
            </div>

            <div
              data-tilt
              className="soft-card absolute right-[12%] top-[10%] z-30 w-44 rotate-[8deg] rounded-[2.8rem_2rem_3rem_1.8rem] px-4 py-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                核心关键词
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/86">
                  审美
                </span>
                <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/86">
                  结构
                </span>
                <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/86">
                  AI
                </span>
              </div>
            </div>

            <div
              data-tilt
              className="soft-card absolute left-[10%] bottom-[10%] z-30 w-56 rotate-[6deg] rounded-[2rem_3rem_2rem_3rem] px-5 py-4"
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
                    0{index + 1} {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              data-tilt
              className="soft-card absolute right-[0%] bottom-[0%] z-30 w-52 rotate-[-6deg] rounded-[3rem_2rem_2rem_3rem] px-4 py-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                简介
              </p>
              <p className="mt-3 text-sm leading-7 text-white/86">
                美工、电商、PE 与 AI 实践，最后都服务于同一件事。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
