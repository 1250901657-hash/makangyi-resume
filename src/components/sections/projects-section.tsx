import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

type ProjectActionProps = {
  label: string;
  href?: string;
};

function ProjectAction({ label, href }: ProjectActionProps) {
  if (!href) {
    return (
      <button
        type="button"
        disabled
        className="inline-flex items-center justify-center rounded-full border border-dashed border-black/12 px-4 py-2 text-sm font-medium text-muted opacity-80 dark:border-white/12"
      >
        {label}
      </button>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent dark:border-white/10"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-20 md:py-24">
      <SectionHeading
        label="Selected Work"
        title="项目与作品方向"
        description="这里先放 3 个适合继续补充的案例方向，后续你只需要把链接、截图和更具体的结果替换进去。"
      />

      <div className="mt-12 grid gap-4 xl:grid-cols-3">
        {siteContent.projects.map((project) => (
          <article key={project.name} className="surface flex h-full flex-col px-6 py-6 md:px-7">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:bg-accent/[0.14]">
                {project.category}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                占位案例
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <p className="text-base leading-8 text-muted">{project.summary}</p>
            </div>

            <div className="mt-6 space-y-4 rounded-[24px] border border-black/8 bg-black/[0.02] p-5 dark:border-white/8 dark:bg-white/[0.04]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  我负责什么
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  项目亮点
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground">{project.highlight}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/8 px-3 py-1.5 text-xs font-medium text-muted dark:border-white/8"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2 pt-2">
              <ProjectAction label="查看详情" href={project.links.detail} />
              <ProjectAction label="查看源码" href={project.links.source} />
              <ProjectAction label="在线演示" href={project.links.demo} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
