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
        <div className="max-w-[24rem] space-y-4">
          <span className="eyebrow">核心概览</span>
          <h2 className="font-display text-[clamp(2.35rem,5vw,4.1rem)] leading-[0.98] text-white">
            核心生态
          </h2>
          <p className="max-w-sm text-[0.95rem] leading-8 text-white/80">
            不把所有信息做成一样大的卡片，而是让主视觉和重点内容真正被看见。
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(260px,0.72fr)]">
          <article
            data-tilt
            className="soft-card relative z-20 px-7 py-7 md:px-9 md:py-9"
          >
            <div className="absolute right-8 top-8 hidden xl:block">
              <BrandIp size="md" showSatellites={false} className="w-[9rem]" />
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              主案例 / 01
            </p>
            <h3 className="mt-4 max-w-[22rem] font-display text-[clamp(1.85rem,3.4vw,3rem)] leading-[0.98] text-white">
              {projectPreview[0]?.name}
            </h3>
            <p className="mt-5 max-w-[24rem] text-[0.92rem] leading-8 text-white/82">
              {projectPreview[0]?.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {projectPreview[0]?.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/84"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            <article data-tilt className="soft-card px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                能力
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {capabilityPreview.slice(0, 2).map((item) => (
                  <span
                    key={item.title}
                    className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[11px] text-white/84"
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </article>

            <article data-tilt className="soft-card px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                阶段
              </p>
              <div className="mt-3 space-y-2">
                {journeyPreview.map((item) => (
                  <p key={item.phase} className="text-[11px] leading-6 text-white/84">
                    {item.period}
                  </p>
                ))}
              </div>
            </article>

            <article data-tilt className="soft-card px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                项目方向 / 02
              </p>
              <h3 className="mt-3 font-display text-[1.32rem] leading-[1.08] text-white">
                {projectPreview[1]?.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/82">{projectPreview[1]?.summary}</p>
            </article>
          </div>

          <article
            data-tilt
            className="soft-card px-5 py-5 xl:col-span-2"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                工具
              </p>
              <div className="flex flex-wrap gap-2">
                {siteContent.identity.workflow.slice(0, 3).map((item, index) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/84"
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
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/84"
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
