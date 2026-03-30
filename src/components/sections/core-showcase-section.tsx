import { BrandIp } from "@/components/brand-ip";
import { siteContent } from "@/data/site-content";

const journeyPreview = siteContent.journey.slice(0, 3);
const projectPreview = siteContent.projects.slice(0, 2);
const capabilityPreview = siteContent.capabilities.slice(0, 3);
const toolPreview = Array.from(
  new Set(siteContent.skillGroups.flatMap((group) => group.items)),
).slice(0, 6);

export function CoreShowcaseSection() {
  return (
    <section id="showcase" className="section-shell py-22 md:py-32">
      <div className="relative overflow-visible px-2 md:px-4">
        <div className="max-w-[26rem] space-y-4">
          <span className="eyebrow">核心概览</span>
          <h2 className="font-display text-[clamp(3.2rem,7vw,6rem)] leading-[0.9] text-white">
            核心
            <br />
            生态
          </h2>
          <p className="max-w-sm text-base leading-8 text-white/80">
            不把所有信息做成一样大的卡片，而是让主视觉和重点内容真正被看见。
          </p>
        </div>

        <div className="relative mt-12 min-h-[34rem] md:min-h-[42rem] xl:min-h-[48rem]">
          <div className="absolute left-[38%] top-[2%] z-10 hidden xl:block">
            <BrandIp size="md" showSatellites={false} className="w-[16rem]" />
          </div>

          <article
            data-tilt
            className="soft-card relative z-20 max-w-[44rem] px-7 py-7 md:px-9 md:py-9 xl:absolute xl:left-[24%] xl:top-[12%] xl:w-[38rem] xl:rotate-[2deg] xl:rounded-[3rem_3rem_2rem_2rem]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              主案例 / 01
            </p>
            <h3 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.92] text-white">
              {projectPreview[0]?.name}
            </h3>
            <p className="mt-5 max-w-[28rem] text-base leading-8 text-white/82">
              {projectPreview[0]?.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {projectPreview[0]?.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/84"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article
            data-tilt
            className="soft-card relative mt-5 max-w-[18rem] px-4 py-4 xl:absolute xl:left-[2%] xl:top-[8%] xl:mt-0 xl:w-[16rem] xl:rotate-[-8deg] xl:rounded-[2rem_3rem_2rem_3rem]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              能力
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {capabilityPreview.slice(0, 2).map((item) => (
                <span
                  key={item.title}
                  className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs text-white/84"
                >
                  {item.title}
                </span>
              ))}
            </div>
          </article>

          <article
            data-tilt
            className="soft-card relative mt-5 max-w-[18rem] px-4 py-4 xl:absolute xl:right-[6%] xl:top-[4%] xl:mt-0 xl:w-[15rem] xl:rotate-[9deg] xl:rounded-[3rem_2rem_3rem_2rem]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              阶段
            </p>
            <div className="mt-3 space-y-2">
              {journeyPreview.map((item) => (
                <p key={item.phase} className="text-xs leading-6 text-white/84">
                  {item.period}
                </p>
              ))}
            </div>
          </article>

          <article
            data-tilt
            className="soft-card relative mt-5 max-w-[22rem] px-5 py-5 xl:absolute xl:right-[0%] xl:top-[22rem] xl:mt-0 xl:w-[20rem] xl:rotate-[-6deg] xl:rounded-[2rem_3rem_2rem_3rem]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              项目方向 / 02
            </p>
            <h3 className="mt-3 font-display text-[1.8rem] leading-[1.02] text-white">
              {projectPreview[1]?.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/82">{projectPreview[1]?.summary}</p>
          </article>

          <article
            data-tilt
            className="soft-card relative mt-5 max-w-[28rem] px-5 py-5 xl:absolute xl:left-[14%] xl:bottom-[4%] xl:mt-0 xl:w-[26rem] xl:rotate-[5deg] xl:rounded-[3rem_3rem_2rem_2rem]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                工具
              </p>
              <div className="flex flex-wrap gap-2">
                {siteContent.identity.workflow.slice(0, 3).map((item, index) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/84"
                  >
                    0{index + 1}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {toolPreview.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/84"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
