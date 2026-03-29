import { siteContent } from "@/data/site-content";

export function ProjectsSection() {
  return (
    <section id="work" className="section-shell pb-24 pt-6 md:pb-28">
      <div className="grid gap-10 xl:grid-cols-[260px_minmax(0,1fr)]">
        <div className="space-y-4">
          <p className="section-kicker">WORK</p>
          <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.92] tracking-[-0.05em] text-white">
            Selected
            <br />
            Output.
          </h2>
          <p className="frame-copy max-w-[16rem]">只放两种当前最想做的页面方向。</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {siteContent.projects.map((project) => (
            <article key={project.name} className="work-card">
              <div className="flex items-center justify-between gap-4">
                <p className="section-kicker">{project.category}</p>
                <span className="mono-pill">Active</span>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="work-title">{project.name}</h3>
                <p className="work-copy">{project.summary}</p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="space-y-2">
                  <p className="section-kicker text-white/34">Role</p>
                  <p className="text-sm text-white/84">{project.role}</p>
                </div>
                <div className="space-y-2">
                  <p className="section-kicker text-white/34">Focus</p>
                  <p className="text-sm text-white/84">{project.highlight}</p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="mono-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
