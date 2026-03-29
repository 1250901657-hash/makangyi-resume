import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/data/site-content";

type ProjectActionProps = {
  label: string;
  href?: string;
};

function ProjectAction({ label, href }: ProjectActionProps) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/20 px-4 py-2.5 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-2xl hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent dark:border-white/14 dark:bg-white/4 dark:hover:text-white"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export function ProjectsSection() {
  const layoutClasses = ["xl:col-span-7", "xl:col-span-5"];
  const previewClasses = [
    "from-[rgba(98,216,255,0.55)] via-[rgba(255,255,255,0.2)] to-[rgba(255,197,110,0.48)]",
    "from-[rgba(255,124,154,0.48)] via-[rgba(255,255,255,0.2)] to-[rgba(123,128,255,0.44)]",
  ];

  return (
    <section id="projects" className="section-shell py-20 md:py-28">
      <SectionHeading
        label="Selected Work"
        title="项目与作品方向"
        description="不堆太多案例，只保留两种最能代表当前方向的页面类型。"
      />

      <div className="mt-12 grid gap-4 xl:grid-cols-12">
        {siteContent.projects.map((project, index) => {
          const hasActions = Object.values(project.links).some(Boolean);

          return (
            <article
              key={project.name}
              className={`surface hover-float flex h-full flex-col px-6 py-6 md:px-7 ${layoutClasses[index]}`}
            >
              <div
                className={`relative overflow-hidden rounded-[30px] border border-white/55 bg-gradient-to-br ${previewClasses[index]} p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.68)]`}
              >
                <div aria-hidden="true" className="motion-beam top-[22%]" />
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/30 blur-2xl" />
                <div className="absolute bottom-4 left-5 h-16 w-[42%] rounded-full border border-white/60 bg-white/28 backdrop-blur-2xl" />
                <div className="absolute right-5 top-5 h-16 w-16 rounded-[22px] border border-white/60 bg-white/24 backdrop-blur-2xl" />
                <div className="relative flex min-h-44 flex-col justify-between md:min-h-52">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/60 bg-white/28 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-2xl">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/70">
                      Focus
                    </span>
                  </div>
                  <div className="max-w-[18rem] space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/70">
                      Selected Direction
                    </p>
                    <p className="font-display text-2xl font-semibold leading-[1.18] text-foreground md:text-[2rem]">
                      {project.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-6">
                <div className="space-y-4">
                  <p className="text-base leading-8 text-muted">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/60 bg-white/16 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur-xl dark:border-white/14 dark:bg-white/4"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="soft-card hover-float space-y-4 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      我负责什么
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      项目亮点
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground">{project.highlight}</p>
                  </div>
                </div>
              </div>

              {hasActions ? (
                <div className="mt-8 flex flex-wrap gap-2 pt-1">
                  <ProjectAction label="查看详情" href={project.links.detail} />
                  <ProjectAction label="查看源码" href={project.links.source} />
                  <ProjectAction label="在线演示" href={project.links.demo} />
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
