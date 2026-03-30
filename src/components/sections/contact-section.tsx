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
        <div
          aria-hidden="true"
          className="absolute left-[10%] top-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(39,79,255,0.22),transparent_72%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[6%] bottom-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.22),transparent_72%)] blur-3xl"
        />

        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.86fr)_minmax(420px,1.14fr)] xl:items-end">
          <div className="max-w-[34rem] space-y-7">
            <div className="space-y-4">
              <span className="eyebrow">联系方式</span>
              <h2 className="font-display text-[clamp(3rem,7vw,5rem)] leading-[0.94] text-white">
                继续聊下去
              </h2>
              <p className="text-base leading-8 text-white/84 md:text-lg">
                合作、工作机会，或者一起把一个想法做成真正能看的作品。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {visibleItems.map((item, index) => (
                <div
                  key={item.label}
                  className={index === 1 ? "sm:translate-y-8" : index === 2 ? "sm:-translate-y-4" : ""}
                >
                  <ContactLink label={item.label} value={item.value} href={item.href} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[26rem] md:min-h-[32rem] xl:min-h-[36rem]">
            <div className="absolute right-[-4%] bottom-[-4%] z-10">
              <BrandIp
                size="lg"
                showSatellites={false}
                className="w-[18rem] sm:w-[22rem] xl:w-[28rem]"
              />
            </div>

            <div
              data-tilt
              className="soft-card absolute left-[0%] top-[4%] z-20 w-56 rotate-[-7deg] rounded-[2rem_3rem_2rem_3rem] px-5 py-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                下一步
              </p>
              <p className="mt-3 text-sm leading-7 text-white/86">
                你可以直接发邮件，也可以先从 GitHub 看我正在做的东西。
              </p>
            </div>

            <div
              data-tilt
              className="soft-card absolute right-[12%] top-[0%] z-20 w-44 rotate-[8deg] rounded-[3rem_2rem_3rem_2rem] px-4 py-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                关键词
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/84">
                  合作
                </span>
                <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/84">
                  求职
                </span>
                <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/84">
                  项目
                </span>
              </div>
            </div>

            <div
              data-tilt
              className="soft-card absolute left-[10%] bottom-[8%] z-20 w-60 rotate-[5deg] rounded-[3rem_3rem_2rem_2rem] px-5 py-5"
            >
              <div className="flex flex-wrap gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
