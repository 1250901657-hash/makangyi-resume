import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 md:py-24">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-start">
        <div className="surface px-6 py-8 md:px-10 md:py-10">
          <SectionHeading
            label="About Me"
            title="我是一个跨领域、重视落地，也愿意持续学习新工具的人"
            description={siteContent.about.text}
          />
        </div>

        <aside className="surface px-6 py-8 md:px-8 md:py-10">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              我在意的工作方式
            </p>
            <div className="space-y-3">
              {siteContent.about.principles.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/8 px-4 py-4 dark:border-white/8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
