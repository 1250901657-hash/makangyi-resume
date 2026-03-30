import { BrandIp } from "@/components/brand-ip";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

const journeyPreview = siteContent.journey.slice(0, 3);
const projectPreview = siteContent.projects.slice(0, 2);
const capabilityPreview = siteContent.capabilities.slice(0, 3);
const toolPreview = Array.from(
  new Set(siteContent.skillGroups.flatMap((group) => group.items)),
).slice(0, 6);

export function CoreShowcaseSection() {
  return (
    <section id="showcase" className="section-shell py-20 md:py-32">
      <div className="relative overflow-visible px-2 md:px-4">
        <div
          aria-hidden="true"
          className="absolute left-[8%] top-[14%] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(36,72,255,0.24),transparent_72%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[14%] top-[18%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.18),transparent_72%)] blur-3xl"
        />

        <div className="max-w-[34rem]">
          <SectionHeading
            label="核心概览"
            title="核心生态"
            description="经历、能力和项目不再一排排码开，而是围绕同一个主角展开。"
          />
        </div>

        <div className="relative mt-14 flex flex-col gap-5 lg:min-h-[48rem]">
          <div className="lg:absolute lg:left-[34%] lg:top-0 lg:z-20">
            <BrandIp size="md" showSatellites className="mx-auto w-[15rem] sm:w-[18rem] xl:w-[22rem]" />
          </div>

          <article
            data-tilt
            className="soft-card relative px-5 py-5 lg:absolute lg:left-0 lg:top-6 lg:w-[21rem] lg:rotate-[-7deg] lg:rounded-[2rem_3rem_2rem_3rem]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              经历路径
            </p>
            <h3 className="mt-3 font-display text-[1.7rem] leading-[1.04] text-white">
              {journeyPreview[0]?.period}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {journeyPreview[0]?.abilities.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/86"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article
            data-tilt
            className="soft-card relative px-5 py-5 lg:absolute lg:left-[6%] lg:top-[16rem] lg:w-[18rem] lg:rotate-[6deg] lg:rounded-[3rem_2rem_3rem_2rem]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              能力摘要
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {capabilityPreview.map((item) => (
                <span
                  key={item.title}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm font-medium text-white/86"
                >
                  {item.title}
                </span>
              ))}
            </div>
          </article>

          <article
            data-tilt
            className="soft-card relative px-5 py-5 lg:absolute lg:right-[2%] lg:top-0 lg:w-[24rem] lg:rotate-[5deg] lg:rounded-[2rem_3rem_2rem_3.5rem]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              项目方向 01
            </p>
            <h3 className="mt-3 font-display text-[2rem] leading-[1.02] text-white">
              {projectPreview[0]?.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/84">{projectPreview[0]?.summary}</p>
          </article>

          <article
            data-tilt
            className="soft-card relative px-5 py-5 lg:absolute lg:right-[8%] lg:top-[17rem] lg:w-[20rem] lg:rotate-[-6deg] lg:rounded-[3rem_2rem_2rem_3rem]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              项目方向 02
            </p>
            <h3 className="mt-3 font-display text-[1.7rem] leading-[1.04] text-white">
              {projectPreview[1]?.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/84">{projectPreview[1]?.summary}</p>
          </article>

          <article
            data-tilt
            className="soft-card relative px-5 py-5 lg:absolute lg:left-[28%] lg:bottom-0 lg:w-[28rem] lg:rotate-[2deg] lg:rounded-[3rem_3rem_2rem_2rem]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                工具与方式
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
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm font-medium text-white/86"
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
