import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const { identity } = siteContent;

  return (
    <section id="top" className="section-shell pb-16 pt-8 md:pb-24 md:pt-10">
      <div className="grid min-h-[calc(100vh-7.5rem)] gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(430px,0.92fr)] lg:items-center">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <span className="h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_20px_rgba(255,104,0,0.75)]" />
            <p className="section-kicker text-white/56">{identity.label}</p>
          </div>

          <div className="space-y-2">
            <p className="hero-word">{identity.heroWords[0]}</p>
            <p className="hero-word hero-word-accent">{identity.heroWords[1]}</p>
          </div>

          <div className="max-w-[38rem] space-y-4">
            <p className="text-[clamp(1.2rem,2.2vw,1.95rem)] leading-[1.35] text-white/90">
              {identity.intro}
            </p>
            <p className="frame-copy">{identity.currentFocus}</p>
          </div>

          <div className="grid max-w-[42rem] gap-3 sm:grid-cols-3">
            {identity.quickStats.map((item) => (
              <div key={item.label} className="metric-card">
                <p className="stat-label">{item.label}</p>
                <p className="stat-value">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a href="#work" className="arrow-cta" aria-label="跳转到作品区域">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none" aria-hidden="true">
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="space-y-1">
              <p className="section-kicker">Scroll</p>
              <p className="text-sm text-muted">Work / Contact</p>
            </div>
          </div>
        </div>

        <div className="frame p-5 md:p-7">
          <div className="showcase-stage">
            <div className="showcase-orb showcase-orb-orange" />
            <div className="showcase-orb showcase-orb-cyan" />
            <div className="showcase-figure" />
            <div className="showcase-ring left-[12%] top-[12%] h-40 w-40" />
            <div className="showcase-ring left-[56%] top-[18%] h-24 w-24 [animation-delay:-2.8s]" />
            <div className="scan-line top-[20%]" />
            <div className="scan-line top-[76%] [animation-delay:-3.6s]" />

            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
              <div>
                <p className="section-kicker text-white/46">Display Mode</p>
                <p className="mt-2 text-lg font-medium text-white/92">{identity.englishName}</p>
              </div>
              <span className="mono-pill">{identity.frameLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
