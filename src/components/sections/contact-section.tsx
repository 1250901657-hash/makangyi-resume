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
    <div className="flex w-full items-center justify-between gap-4">
      <div className="space-y-2">
        <p className="section-kicker text-white/36">{label}</p>
        <p className="break-all text-sm font-medium text-white/88 md:text-base">{value}</p>
      </div>
      <span className="section-kicker text-white/32">{hint}</span>
    </div>
  );

  if (!href) {
    return <div className="contact-line">{content}</div>;
  }

  return (
    <a
      href={href}
      className="contact-line"
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
      <div className="frame overflow-hidden px-6 py-8 md:px-10 md:py-10">
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="section-kicker">CONTACT</p>
              <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.92] tracking-[-0.05em] text-white">
                Start
                <br />
                Something.
              </h2>
              <p className="frame-copy max-w-[34rem]">{siteContent.contact.intro}</p>
            </div>
          </div>

          <div className="space-y-3">
            {siteContent.contact.items.map((item) => (
              <ContactLink key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
