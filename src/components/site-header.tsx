import { BrandIp } from "@/components/brand-ip";
import { siteContent } from "@/data/site-content";

const compactNavigation = [
  { href: "#top", label: "首页" },
  { href: "#showcase", label: "视觉概览" },
  { href: "/studio", label: "AI 生成器" },
  { href: "#contact", label: "联系" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-7 md:pt-6 xl:px-8">
      <div className="section-shell">
        <div className="surface rounded-full px-4 py-3 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex min-w-0 items-center gap-3">
              <BrandIp size="sm" showSatellites={false} className="shrink-0" />
              <div className="min-w-0 space-y-1">
                <p className="text-[0.95rem] font-semibold tracking-[0.06em] text-white">
                  {siteContent.identity.name}
                </p>
                <p className="micro-label truncate text-white/58 md:text-[11px]">
                  {siteContent.identity.englishName}
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-1.5 lg:flex">
              {compactNavigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[13px] font-medium tracking-[0.04em] text-white/70 hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a href="#contact" className="btn-primary px-4 py-2.5 text-[13px]">
              来聊聊
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
