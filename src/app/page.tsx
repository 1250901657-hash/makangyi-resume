import { ContactSection } from "@/components/sections/contact-section";
import { CoreShowcaseSection } from "@/components/sections/core-showcase-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/data/site-content";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <CoreShowcaseSection />
        <ContactSection />
      </main>

      <footer className="section-shell pb-10 text-sm text-muted">
        <div className="flex flex-col gap-3 border-t border-white/8 py-6 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {siteContent.identity.name}. Built with Next.js, TypeScript and Tailwind CSS.
          </p>
          <p>
            这是一版以复古肖像 IP 为主角重新塑形的个人品牌首页。
          </p>
        </div>
      </footer>
    </div>
  );
}
