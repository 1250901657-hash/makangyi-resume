import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-shell py-20 md:py-24">
      <SectionHeading
        label="What I Can Do"
        title="我能提供的，不只是单一岗位能力"
        description="我更像一个能够把表达、业务理解、流程意识和快速实现连接起来的人。"
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
        {siteContent.capabilities.map((item) => (
          <article key={item.title} className="surface px-6 py-6 md:px-7 md:py-7">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {item.index}
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
            <p className="mt-5 text-base leading-8 text-muted">{item.description}</p>
            <div className="mt-6 rounded-2xl border border-black/8 bg-black/[0.02] px-4 py-4 text-sm leading-7 text-foreground dark:border-white/8 dark:bg-white/[0.04]">
              {item.focus}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
