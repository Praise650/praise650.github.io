import { useState } from "react";
import PageShell from "@/components/PageShell";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { useExperiences, type Experience } from "@/hooks/usePortfolioData";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

// Prefer the structured columns. Legacy rows only have `description`, which may be markdown:
// highlight bullets, a `---` line, then details (or just plain text).
const getContent = (exp: Experience) => {
  if (exp.highlights?.length || exp.details) {
    return { highlights: exp.highlights ?? [], details: exp.details || exp.description };
  }
  const [head, ...rest] = exp.description.split(/^\s*---\s*$/m);
  const details = rest.join("\n---\n").trim();
  if (details) {
    const highlights = head.split("\n").map((l) => l.replace(/^\s*[-*•]\s+/, "").trim()).filter(Boolean);
    return { highlights, details };
  }
  const first = exp.description.split(/(?<=[.!?])\s+/)[0]?.trim();
  return { highlights: first ? [first] : [], details: exp.description.trim() };
};

const ExperiencePage = () => {
  const { data: experiences = [], isLoading } = useExperiences();
  const [selected, setSelected] = useState<Experience | null>(null);

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
            {experiences.map((exp) => {
              const { highlights } = getContent(exp);
              return (
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
                    <p className="text-sm font-mono text-muted-foreground mb-5">{exp.company}</p>
                    <ul className="space-y-2 max-w-lg">
                      {highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex gap-3 text-sm md:text-base text-muted-foreground leading-[1.7]">
                          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-muted-foreground" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => setSelected(exp)}
                      className="mt-5 text-[11px] font-mono uppercase tracking-[0.2em] text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                    >
                      Show details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Drawer open={!!selected} onOpenChange={(open) => !open && setSelected(null)} shouldScaleBackground={false}>
        <DrawerContent className="max-h-[85vh] rounded-t-none">
          {selected && (
            <>
              <DrawerHeader className="text-left w-full max-w-2xl mx-auto px-6 pt-6 pb-2">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{selected.period}</p>
                <DrawerTitle className="text-xl md:text-2xl font-bold tracking-tight">{selected.role}</DrawerTitle>
                <DrawerDescription className="text-sm font-mono text-muted-foreground">
                  {[selected.company, selected.location, selected.employment_type].filter(Boolean).join(" · ")}
                </DrawerDescription>
                {selected.tech?.length > 0 && (
                  <ul className="flex flex-wrap gap-2 pt-3">
                    {selected.tech.map((t) => (
                      <li key={t} className="border border-border px-2 py-1 text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </DrawerHeader>
              <div className="overflow-y-auto w-full max-w-2xl mx-auto px-6 pb-10 pt-4 [&_p]:text-sm [&_p]:md:text-base [&_p]:text-muted-foreground [&_li]:text-sm [&_li]:md:text-base [&_li]:text-muted-foreground [&_strong]:text-foreground">
                <MarkdownRenderer content={getContent(selected).details} />
              </div>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </PageShell>
  );
};

export default ExperiencePage;
