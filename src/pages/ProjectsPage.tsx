import PageShell from "@/components/PageShell";
import { ExternalLink } from "lucide-react";
import { useProjects } from "@/hooks/usePortfolioData";

const ProjectsPage = () => {
  const { data: projects = [], isLoading } = useProjects();

  return (
    <PageShell title="Projects">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <section className="mb-20 md:mb-32">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">Projects.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Selected work across mobile & infrastructure.
          </p>
        </section>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="h-4 w-1/3 bg-muted" />
                <div className="h-8 w-2/3 bg-muted" />
                <div className="h-20 w-full bg-muted" />
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="border-t border-border py-24 text-center">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">No projects yet</p>
            <p className="text-muted-foreground">Projects will appear here once added.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 border-t border-border pt-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col"
              >
                <div className="flex gap-2 flex-wrap mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono uppercase tracking-widest border border-border px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                  {project.title}
                </h2>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-border/50">
                  <a href={project.url || "#"} target={project.url ? "_blank" : "_self"} rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-muted-foreground transition-colors">
                    <span>View Project</span>
                    <ExternalLink size={14} />
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