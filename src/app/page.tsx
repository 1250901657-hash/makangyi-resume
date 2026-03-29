import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/data/site-content";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="section-shell pb-10">
        <div className="flex flex-col gap-2 border-t border-white/8 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 {siteContent.identity.name}</p>
          <p className="section-kicker text-white/28">INDEX.01 / PERSONAL SITE</p>
        </div>
      </footer>
    </div>
  );
}
