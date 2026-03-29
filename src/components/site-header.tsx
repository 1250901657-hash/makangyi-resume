import { siteContent } from "@/data/site-content";

import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="section-shell">
        <div className="surface flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#top" className="min-w-0 space-y-1">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-foreground">
              {siteContent.identity.englishName}
            </p>
            <p className="truncate text-sm text-muted">{siteContent.identity.role}</p>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {siteContent.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-secondary hidden sm:inline-flex">
              联系我
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
