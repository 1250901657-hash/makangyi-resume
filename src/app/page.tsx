import { CapabilitiesSection } from "@/components/sections/capabilities-section";
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
        <CapabilitiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="section-shell pb-10 text-sm text-muted">
        <div className="flex flex-col gap-3 border-t border-white/45 py-6 dark:border-white/10 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {siteContent.identity.name}. Built with Next.js, TypeScript and Tailwind CSS.
          </p>
          <p>Liquid glass, vivid plastic tones, and a cleaner personal presence.</p>
        </div>
      </footer>
    </div>
  );
}
