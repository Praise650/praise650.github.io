import PageShell from "@/components/PageShell";
import { useExperiences } from "@/hooks/usePortfolioData";

const ExperiencePage = () => {
  const { data: experiences = [], isLoading } = useExperiences();

  return (
    <PageShell title="Experience">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <section className="mb-24 md:mb-40">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-8">
            Career
          </p>
          <h1 className="text-4xl md:text-[4.5rem] font-bold leading-[1.08] tracking-tight mb-8 md:mb-10">Work.</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-[1.8]">
            A timeline of roles, responsibilities, and systems built.
          </p>
        </section>

        {isLoading ? (
          <div className="space-y-16 border-t border-border pt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <div className="h-3 w-20 bg-muted" />
                </div>
                <div className="md:col-span-9 space-y-3">
                  <div className="h-6 w-48 bg-muted" />
                  <div className="h-3 w-32 bg-muted" />
                  <div className="h-16 w-full max-w-lg bg-muted" />
                </div>
              </div>
            ))}
          </div>
        ) : experiences.length === 0 ? (
          <div className="border-t border-border py-24 text-center">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">No entries yet</p>
            <p className="text-sm text-muted-foreground">Work experience will appear here once added.</p>
          </div>
        ) : (
          <div className="border-t border-border pt-16 md:pt-20 space-y-16 md:space-y-24">
            {experiences.map((exp) => (
              <div key={exp.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 group">
                <div className="md:col-span-3 pt-1">
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-1.5 group-hover:text-muted-foreground transition-colors duration-300">
                    {exp.role}
                  </h2>
                  <p className="text-sm font-mono text-muted-foreground mb-5">
                    {exp.company}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-[1.85] max-w-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
};

export default ExperiencePage;
