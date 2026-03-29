import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

const panelGradients = [
  "bg-[radial-gradient(circle_at_top_right,rgba(70,217,255,0.16),transparent_44%)]",
  "bg-[radial-gradient(circle_at_top_right,rgba(138,109,255,0.16),transparent_44%)]",
  "bg-[radial-gradient(circle_at_top_right,rgba(107,168,255,0.16),transparent_44%)]",
  "bg-[radial-gradient(circle_at_top_right,rgba(183,255,108,0.14),transparent_44%)]",
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-shell py-20 md:py-24">
      <SectionHeading
        label="我能做什么"
        title="我能提供的，不只是单一岗位能力"
        description="更准确地说，我擅长把表达、展示、流程理解和快速实现串成一条真正可工作的链路。"
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
        {siteContent.capabilities.map((item, index) => (
          <article
            key={item.title}
            className={`surface px-6 py-6 md:px-7 md:py-7 ${panelGradients[index]}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {item.index}
                </span>
                <h3 className="font-display text-2xl font-semibold leading-[1.12] tracking-tight text-white md:text-[2.1rem]">
                  {item.title}
                </h3>
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-muted">{item.description}</p>

            <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/88">
              {item.focus}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
