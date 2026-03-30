import { siteContent } from "@/data/site-content";

function ContactLink({
  label,
  value,
  hint,
  href,
}: {
  label: string;
  value: string;
  hint: string;
  href?: string;
}) {
  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{label}</p>
      <p className="mt-3 break-all text-base font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-7 text-muted">{hint}</p>
    </>
  );

  if (!href) {
    return <div className="soft-card px-5 py-5">{content}</div>;
  }

  return (
    <a
      href={href}
      className="soft-card block px-5 py-5 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.05]"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

export function ContactSection() {
  const emailItem = siteContent.contact.items.find((item) => item.label === "邮箱");
  const visibleItems = siteContent.contact.items.filter((item) => item.href);

  return (
    <section id="contact" className="section-shell pb-24 pt-20 md:pb-28 md:pt-24">
      <div className="surface overflow-hidden px-6 py-8 md:px-10 md:py-10">
        <div
          aria-hidden="true"
          className="absolute right-[-4rem] top-[-5rem] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(70,217,255,0.16),transparent_72%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-4rem] left-[20%] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(138,109,255,0.16),transparent_72%)] blur-3xl"
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)] lg:gap-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="eyebrow">联系方式</span>
              <div className="space-y-3">
                <h2 className="font-display text-[2.35rem] font-semibold leading-[1.02] tracking-tight text-white md:text-[3.5rem]">
                  欢迎联系我，聊工作机会、合作项目，或一起把想法做成作品。
                </h2>
                <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
                  {siteContent.contact.intro}
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {visibleItems.map((item) => (
                <ContactLink key={item.label} {...item} />
              ))}
            </div>
          </div>

          <aside className="soft-card flex flex-col justify-between p-6 md:p-7">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                下一步
              </p>
              <h3 className="font-display text-2xl font-semibold leading-[1.08] tracking-tight text-white">
                如果你正在寻找兼具表达、业务理解与执行意识的人，我们可以继续聊下去。
              </h3>
              <p className="text-sm leading-7 text-muted">
                适合求职沟通、合作交流，或一起做更有完成度的网页、内容和轻量项目。
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 pt-2">
              <a href={emailItem?.href ?? "#"} className="btn-primary">
                发送邮件
              </a>
              <button
                type="button"
                disabled
                className="btn-secondary cursor-not-allowed opacity-70"
              >
                {siteContent.contact.resumeLabel}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
