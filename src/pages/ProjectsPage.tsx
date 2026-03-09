import PageShell from "@/components/PageShell";
import { ExternalLink } from "lucide-react";
import { useProjects } from "@/hooks/usePortfolioData";

const ProjectsPage = () => {
  const { data: projects = [], isLoading } = useProjects();

  return (
    <PageShell title="Projects">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <section className="mb-24 md:mb-40">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-8">
            Selected Work
          </p>
          <h1 className="text-4xl md:text-[4.5rem] font-bold leading-[1.08] tracking-tight mb-8 md:mb-10">Projects.</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-[1.8]">
            Selected work across mobile & infrastructure.
          </p>
        </section>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border pt-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="h-3 w-24 bg-muted" />
                <div className="h-6 w-48 bg-muted" />
                <div className="h-16 w-full bg-muted" />
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="border-t border-border py-24 text-center">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">No projects yet</p>
            <p className="text-sm text-muted-foreground">Projects will appear here once added.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24 border-t border-border pt-16 md:pt-20">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col">
                <div className="flex gap-2 flex-wrap mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-[0.15em] border border-border/60 px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                  {project.title}
                </h2>

                <p className="text-sm text-muted-foreground leading-[1.85] mb-6 flex-grow max-w-md">
                  {project.description}
                </p>

                <div className="mt-auto pt-5 border-t border-border/40">
                  <a
                    href={project.url || "#"}
                    target={project.url ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span>View Project</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
};

export default ProjectsPage;
