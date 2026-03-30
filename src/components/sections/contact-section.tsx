import { BrandIp } from "@/components/brand-ip";
import { siteContent } from "@/data/site-content";

function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{label}</p>
      <p className="mt-3 break-all text-base font-semibold text-white">{value}</p>
    </>
  );

  if (!href) {
    return (
      <div data-tilt className="soft-card px-5 py-5">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      data-tilt
      className="soft-card block px-5 py-5 hover:border-accent/30 hover:bg-white/[0.05]"
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
        <div className="grid gap-12 xl:grid-cols-[minmax(0,0.76fr)_minmax(420px,1.24fr)] xl:items-end">
          <div className="max-w-[30rem] space-y-6">
            <span className="eyebrow">联系方式</span>
            <h2 className="font-display text-[clamp(3.4rem,8vw,6.4rem)] leading-[0.9] text-white">
              继续
              <br />
              聊下去
            </h2>
            <p className="text-base leading-8 text-white/82 md:text-lg">
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

          <div className="relative min-h-[28rem] md:min-h-[34rem] xl:min-h-[38rem]">
            <div className="absolute right-[2%] bottom-[-2%] z-10">
              <BrandIp
                size="lg"
                showSatellites={false}
                className="w-[17rem] sm:w-[21rem] xl:w-[26rem]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:block">
              {visibleItems.map((item, index) => {
                const positions = [
                  "xl:absolute xl:left-[0%] xl:top-[10%] xl:w-[16rem] xl:rotate-[-8deg] xl:rounded-[2rem_3rem_2rem_3rem]",
                  "xl:absolute xl:right-[18%] xl:top-[2%] xl:w-[15rem] xl:rotate-[8deg] xl:rounded-[3rem_2rem_3rem_2rem]",
                  "xl:absolute xl:left-[16%] xl:bottom-[8%] xl:w-[17rem] xl:rotate-[5deg] xl:rounded-[3rem_3rem_2rem_2rem]",
                ];

                return (
                  <div key={item.label} className={positions[index] ?? ""}>
                    <ContactLink label={item.label} value={item.value} href={item.href} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
