import PageShell from "@/components/PageShell";
import { useExperiences } from "@/hooks/usePortfolioData";

const ExperiencePage = () => {
  const { data: experiences = [], isLoading } = useExperiences();

  return (
    <PageShell title="Experience">
      <section className="px-6 pt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Work</h1>
        <p className="text-sm text-muted-foreground mb-10">
          A timeline of roles and responsibilities.
        </p>

        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : (
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div key={exp.id} className="border-t border-border py-8 group">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {exp.period}
                  </p>
                  <span className="text-xs font-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-1 group-hover:underline underline-offset-4 transition-all">
                  {exp.role}
                </h2>
                <p className="text-sm font-mono text-muted-foreground mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
};

export default ExperiencePage;
