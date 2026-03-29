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
      <p className="mt-3 break-all text-base font-semibold text-foreground">{value}</p>
      <p className="mt-2 text-sm leading-7 text-muted">{hint}</p>
    </>
  );

  if (!href) {
    return (
      <div className="soft-card px-5 py-5">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      className="soft-card px-5 py-5 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/[0.04] dark:hover:border-accent/35 dark:hover:bg-accent/[0.08]"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="surface hover-float overflow-hidden px-6 py-8 md:px-10 md:py-10">
        <div
          aria-hidden="true"
          className="pulse-orb absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,124,154,0.32),transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pulse-orb absolute right-0 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(98,216,255,0.28),transparent_70%)] blur-3xl"
        />
        <div aria-hidden="true" className="motion-beam top-[14%]" />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.618fr)_minmax(320px,1fr)] lg:gap-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="eyebrow">Get In Touch</span>
              <div className="space-y-3">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-[3rem] md:leading-[1.14]">
                  联系方式
                </h2>
                <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
                  {siteContent.contact.intro}
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {siteContent.contact.items.map((item) => (
                <ContactLink key={item.label} {...item} />
              ))}
            </div>
          </div>

          <aside className="soft-card hover-float p-6 md:p-7">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                下一步
              </p>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                如果你想做一个更有辨识度的页面，我们可以直接开始聊。
              </h3>
              <p className="text-sm leading-7 text-muted">
                工作机会、合作项目、个人品牌页，或者只是想交流一下想法，都可以。
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="mailto:makangyi88@gmail.com" className="btn-primary">
                  发送邮件
                </a>
                <a
                  href="https://github.com/1250901657-hash"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
