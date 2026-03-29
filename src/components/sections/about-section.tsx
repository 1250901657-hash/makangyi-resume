import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 md:py-28">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.618fr)_minmax(320px,1fr)] lg:items-start">
        <div className="surface px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(240px,0.92fr)]">
            <SectionHeading
              label="About Me"
              title="我是一个跨领域、重视落地，也愿意持续学习新工具的人"
              description={siteContent.about.text}
            />

            <div className="soft-card flex min-h-56 flex-col justify-between p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Personal Lens
              </p>
              <p className="font-display text-[2rem] leading-[1.18] text-foreground">
                我更在意一件事最终能不能被真正看见、理解并落地。
              </p>
              <p className="text-sm leading-7 text-muted">
                所以无论做页面、内容还是原型，我都会同时看表达、逻辑和执行。
              </p>
            </div>
          </div>
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
                  className="soft-card px-4 py-4"
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
