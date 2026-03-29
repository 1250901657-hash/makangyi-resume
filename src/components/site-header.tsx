import { siteContent } from "@/data/site-content";

import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-5 pt-5 md:px-8">
      <div className="section-shell">
        <div className="surface flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden="true"
              className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/55 bg-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_12px_22px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/15 dark:bg-white/8"
            >
              <span className="absolute inset-1 rounded-full bg-[conic-gradient(from_180deg,var(--tone-coral),var(--tone-gold),var(--tone-aqua),var(--tone-violet),var(--tone-coral))] opacity-85" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-white/90" />
            </span>
            <div className="min-w-0 space-y-1">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-foreground">
                {siteContent.identity.englishName}
              </p>
              <p className="truncate text-sm text-muted">{siteContent.identity.role}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 xl:flex">
            {siteContent.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted hover:bg-white/35 hover:text-foreground dark:hover:bg-white/8"
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
