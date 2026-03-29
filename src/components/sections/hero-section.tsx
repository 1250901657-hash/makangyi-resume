import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;

  return (
    <section id="top" className="section-shell pb-24 pt-8 md:pb-32 md:pt-10">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.618fr)_minmax(320px,1fr)]">
        <div className="surface section-wash px-6 py-8 md:px-10 md:py-12 xl:px-12 xl:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-14 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,124,154,0.5),rgba(255,124,154,0.12)_42%,transparent_74%)] blur-2xl [animation:halo-drift_12s_ease-in-out_infinite]"
          />
          <div
            aria-hidden="true"
            className="absolute left-[18%] top-[18%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(98,216,255,0.42),transparent_70%)] blur-2xl [animation:float-gentle_10s_ease-in-out_infinite]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-10 right-[8%] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,197,110,0.28),transparent_72%)] blur-2xl"
          />
          <div className="relative grid gap-10 xl:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] xl:items-end">
            <div className="space-y-8">
              <div className="space-y-5 fade-up">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow">{identity.label}</span>
                  <span className="soft-card rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                    Golden Ratio Layout / Liquid Plastic Mood
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted">
                    {identity.name} · {identity.englishName}
                  </p>
                  <h1 className="font-display text-[clamp(2.9rem,7vw,5.9rem)] font-semibold leading-[1.08] tracking-tight text-balance">
                    {identity.role}
                  </h1>
                </div>

                <p className="max-w-3xl text-lg leading-9 text-muted md:text-xl">
                  {identity.intro}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 fade-up [animation-delay:120ms]">
                <a href="#journey" className="btn-primary">
                  查看经历路径
                </a>
                <a href="#projects" className="btn-secondary">
                  浏览作品方向
                </a>
                <a href="#contact" className="btn-secondary">
                  联系我
                </a>
              </div>

              <div className="grid gap-3 fade-up sm:grid-cols-3 [animation-delay:220ms]">
                {identity.quickStats.map((item) => (
                  <div key={item.label} className="soft-card px-4 py-4 md:px-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-foreground md:text-base">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 xl:pl-4">
              <div className="soft-card p-5 md:p-6 fade-up [animation-delay:160ms]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    当前表达
                  </p>
                  <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--tone-lime)] shadow-[0_0_18px_rgba(207,255,116,0.9)]" />
                    active
                  </span>
                </div>
                <p className="mt-4 text-base leading-8 text-foreground/90">{identity.currentFocus}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 fade-up [animation-delay:260ms]">
                {identity.workflow.map((item, index) => (
                  <div key={item} className="soft-card px-4 py-4 md:px-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                      0{index + 1}
                    </span>
                    <p className="mt-3 text-sm font-medium leading-7 text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="grid gap-5">
          <div className="surface px-6 py-7 md:px-8 md:py-8">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-36 w-36 translate-x-6 -translate-y-5 rounded-full bg-[conic-gradient(from_180deg,rgba(255,124,154,0.72),rgba(255,197,110,0.72),rgba(98,216,255,0.68),rgba(123,128,255,0.72),rgba(255,124,154,0.72))] opacity-60 blur-[1px] [animation:float-gentle_11s_ease-in-out_infinite]"
            />
            <div className="relative space-y-5">
              <div className="space-y-2 fade-up [animation-delay:120ms]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  复合优势
                </p>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-[2.2rem]">
                  把不同经验叠成一个更有辨识度的工作方式
                </h2>
              </div>

              <div className="space-y-3 fade-up [animation-delay:220ms]">
                {identity.highlights.map((item, index) => (
                  <div key={item} className="soft-card flex gap-4 px-4 py-4">
                    <span className="font-display text-lg font-semibold text-accent">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="surface px-6 py-7 md:px-8 md:py-8">
            <div className="space-y-4 fade-up [animation-delay:320ms]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                视觉基调
              </p>
              <div className="grid grid-cols-5 gap-3">
                {["Coral", "Aqua", "Lime", "Gold", "Iris"].map((tone, index) => (
                  <div key={tone} className="space-y-3 text-center">
                    <div
                      className="mx-auto h-12 w-12 rounded-[18px] border border-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_22px_rgba(15,23,42,0.08)]"
                      style={{
                        background:
                          index === 0
                            ? "linear-gradient(145deg, rgba(255,124,154,0.9), rgba(255,255,255,0.55))"
                            : index === 1
                              ? "linear-gradient(145deg, rgba(98,216,255,0.92), rgba(255,255,255,0.56))"
                              : index === 2
                                ? "linear-gradient(145deg, rgba(207,255,116,0.9), rgba(255,255,255,0.54))"
                                : index === 3
                                  ? "linear-gradient(145deg, rgba(255,197,110,0.9), rgba(255,255,255,0.54))"
                                  : "linear-gradient(145deg, rgba(123,128,255,0.88), rgba(255,255,255,0.56))",
                      }}
                    />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                      {tone}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-7 text-muted">
                这一版页面会把 iOS 新版偏液态玻璃的感觉，和更鲜活的塑料彩色层次组合在一起，
                让视觉更像一张有个性的个人品牌首页。
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
