import { BrandIp } from "@/components/brand-ip";
import { siteContent } from "@/data/site-content";

function ContactLink({
  label,
  value,
  href,
  className,
}: {
  label: string;
  value: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <>
      <p className="micro-label text-accent">{label}</p>
      <p className="mt-3 break-all text-[0.96rem] font-semibold tracking-[0.02em] text-white">{value}</p>
    </>
  );

  if (!href) {
    return (
      <div data-tilt className={className ?? "px-5 py-5"}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      data-tilt
      className={className ?? "block px-5 py-5"}
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
    <section id="contact" className="section-shell pb-28 pt-20 md:pb-36 md:pt-24">
      <div className="relative overflow-visible px-2 md:px-4">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.82fr)_minmax(420px,1.04fr)] xl:items-center">
          <div className="max-w-[26rem] space-y-6">
            <span className="eyebrow">联系方式</span>
            <h2 className="font-display text-[clamp(2.3rem,5vw,4rem)] leading-[0.98] text-white">
              继续聊下去
            </h2>
            <p className="text-[0.95rem] leading-8 text-white/82 md:text-base">
              合作、工作机会，或者一起把一个想法做成真正能看的作品。
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
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
          </div>

          <div className="relative min-h-[22rem] md:min-h-[26rem] xl:min-h-[29rem]">
            <div className="absolute right-[12%] top-1 z-10">
              <BrandIp
                size="lg"
                showSatellites={false}
                className="w-[12rem] sm:w-[16rem] xl:w-[18rem]"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0">
              <div className="surface overflow-hidden rounded-[1.6rem]">
                <div className="grid md:grid-cols-3 md:divide-x md:divide-white/10">
                  {visibleItems.map((item, index) => {
                    const cellClassName =
                      "block px-5 py-5 hover:bg-white/[0.04] hover:border-transparent";

                    return (
                      <div
                        key={item.label}
                        className={index > 0 ? "border-t border-white/10 md:border-t-0" : undefined}
                      >
                        <ContactLink
                          label={item.label}
                          value={item.value}
                          href={item.href}
                          className={cellClassName}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
