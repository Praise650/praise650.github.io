import PageShell from "@/components/PageShell";
import { useExperiences } from "@/hooks/usePortfolioData";

const ExperiencePage = () => {
  const { data: experiences = [], isLoading } = useExperiences();

  return (
    <PageShell title="Experience">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <section className="mb-20 md:mb-32">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">Work.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A timeline of roles, responsibilities, and systems built.
          </p>
        </section>

        {isLoading ? (
          <div className="space-y-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 w-24 bg-muted mb-4" />
                <div className="h-8 w-64 bg-muted mb-2" />
                <div className="h-4 w-32 bg-muted mb-6" />
                <div className="h-20 w-full max-w-2xl bg-muted" />
              </div>
            ))}
          </div>
        ) : experiences.length === 0 ? (
          <div className="border-t border-border py-24 text-center">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">No entries yet</p>
            <p className="text-muted-foreground">Work experience will appear here once added.</p>
          </div>
        ) : (
          <div className="space-y-16 md:space-y-24 border-t border-border pt-16">
            {experiences.map((exp, i) => (
              <div key={exp.id} className="group relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
                  <div className="md:col-span-3 flex flex-col justify-start pt-1">
                    <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <div className="flex flex-col gap-2 mb-6">
                      <h2 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                        {exp.role}
                      </h2>
                      <p className="text-lg font-mono text-muted-foreground">
                        @ {exp.company}
                      </p>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>
                  </div>
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