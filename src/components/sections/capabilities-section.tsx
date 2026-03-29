import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

export function CapabilitiesSection() {
  const layoutClasses = [
    "md:col-span-2 xl:col-span-7",
    "md:col-span-1 xl:col-span-5",
    "md:col-span-1 xl:col-span-5",
    "md:col-span-2 xl:col-span-7",
  ];
  const glowClasses = [
    "bg-[radial-gradient(circle,rgba(98,216,255,0.34),transparent_68%)]",
    "bg-[radial-gradient(circle,rgba(255,124,154,0.32),transparent_68%)]",
    "bg-[radial-gradient(circle,rgba(255,197,110,0.3),transparent_68%)]",
    "bg-[radial-gradient(circle,rgba(123,128,255,0.34),transparent_68%)]",
  ];

  return (
    <section id="capabilities" className="section-shell py-20 md:py-28">
      <SectionHeading
        label="What I Can Do"
        title="我能提供的，不只是单一岗位能力"
        description="我更像一个能够把表达、业务理解、流程意识和快速实现连接起来的人。"
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
        {siteContent.capabilities.map((item, index) => (
          <article
            key={item.title}
            className={`surface px-6 py-6 md:px-7 md:py-7 ${layoutClasses[index]}`}
          >
            <div
              aria-hidden="true"
              className={`absolute right-0 top-0 h-40 w-40 translate-x-8 -translate-y-8 rounded-full blur-3xl ${glowClasses[index]}`}
            />

            <div
              className={`relative grid gap-6 ${
                index === 0 || index === 3
                  ? "xl:grid-cols-[minmax(0,1.12fr)_minmax(220px,0.88fr)] xl:items-end"
                  : ""
              }`}
            >
              <div className="space-y-5">
                <span className="eyebrow">{item.index}</span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-balance text-foreground md:text-[2.15rem]">
                  {item.title}
                </h3>
                <p className="text-base leading-8 text-muted">{item.description}</p>
              </div>

              <div className="soft-card px-4 py-4 text-sm leading-7 text-foreground md:px-5 md:py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  适合场景
                </p>
                <p className="mt-3">{item.focus}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
