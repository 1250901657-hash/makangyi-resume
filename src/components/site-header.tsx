import { siteContent } from "@/data/site-content";

const compactNavigation = [
  { href: "#top", label: "首页" },
  { href: "#showcase", label: "核心概览" },
  { href: "#contact", label: "联系" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-7 md:pt-6 xl:px-8">
      <div className="section-shell">
        <div className="surface rounded-full px-4 py-3 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="min-w-0 space-y-1">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-white">
                {siteContent.identity.name}
              </p>
              <p className="truncate text-xs text-muted md:text-sm">
                {siteContent.identity.englishName}
              </p>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {compactNavigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm text-muted hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a href="#contact" className="btn-primary px-4 py-2.5 text-sm">
              联系我
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
