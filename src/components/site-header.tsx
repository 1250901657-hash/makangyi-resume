import { siteContent } from "@/data/site-content";

export function SiteHeader() {
  return (
    <header className="relative z-40">
      <div className="section-shell pt-6 md:pt-8">
        <div className="flex items-center justify-between gap-6">
          <a href="#top" className="nav-brand">
            INDEX.01
          </a>

          <nav className="flex items-center gap-8 md:gap-12">
            {siteContent.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
