import PageShell from "@/components/PageShell";
import { ExternalLink } from "lucide-react";
import { useProjects } from "@/hooks/usePortfolioData";

const ProjectsPage = () => {
  const { data: projects = [], isLoading } = useProjects();

  return (
    <PageShell title="Projects">
      <section className="px-6 pt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Projects</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Selected work across mobile & infrastructure.
        </p>

        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : (
          <div className="space-y-0">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border-t border-border py-8 group cursor-pointer hover:bg-muted/50 -mx-6 px-6 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-muted-foreground group-hover:text-foreground transition-colors mt-1"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:underline underline-offset-4">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
};

export default ProjectsPage;
