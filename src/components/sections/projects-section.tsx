import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

type ProjectActionProps = {
  label: string;
  href?: string;
};

const previewGlows = [
  "from-[#46d9ff]/28 via-[#6ba8ff]/18 to-transparent",
  "from-[#8a6dff]/28 via-[#46d9ff]/18 to-transparent",
  "from-[#b7ff6c]/18 via-[#6ba8ff]/16 to-transparent",
];

function ProjectAction({ label, href }: ProjectActionProps) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/88 hover:border-accent/35 hover:text-white"
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
        label="项目展示"
        title="项目与作品方向"
        description="这些内容保留你现有的案例方向，只把视觉呈现改得更像一组经过设计的作品卡。"
      />

      <div className="mt-12 grid gap-4 xl:grid-cols-3">
        {siteContent.projects.map((project, index) => {
          const actions = [
            { label: "查看详情", href: project.links.detail },
            { label: "查看源码", href: project.links.source },
            { label: "在线演示", href: project.links.demo },
          ].filter((item) => item.href);

          return (
            <article key={project.name} className="surface flex h-full flex-col px-6 py-6 md:px-7">
              <div className="relative overflow-hidden rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-5">
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-br ${previewGlows[index]} opacity-100`}
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-10 top-8 h-36 w-36 rounded-full border border-white/8"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-[-2.5rem] left-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_70%)] blur-2xl"
                />

                <div className="relative flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {project.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted">
                    Case 0{index + 1}
                  </span>
                </div>

                <div className="relative mt-12 space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    {project.tags.slice(0, 2).join(" / ")}
                  </p>
                  <h3 className="font-display text-[2rem] font-semibold leading-[1.02] tracking-tight text-white">
                    {project.name}
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-base leading-8 text-muted">{project.summary}</p>
              </div>

              <div className="mt-6 space-y-4 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    我负责什么
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/88">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    项目亮点
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/88">{project.highlight}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {actions.length > 0 ? (
                <div className="mt-8 flex flex-wrap gap-2 pt-2">
                  {actions.map((action) => (
                    <ProjectAction key={action.label} {...action} />
                  ))}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
