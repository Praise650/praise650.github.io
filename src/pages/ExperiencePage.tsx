import PALogo from "@/components/PALogo";

const experiences = [
  {
    role: "Senior DevOps Engineer",
    company: "TechCorp Inc.",
    period: "2023 — Present",
    description:
      "Leading cloud infrastructure and CI/CD pipeline architecture. Managing Kubernetes clusters across multi-cloud environments.",
  },
  {
    role: "Mobile & DevOps Engineer",
    company: "StartupFlow",
    period: "2021 — 2023",
    description:
      "Built cross-platform mobile apps with React Native and Flutter while establishing DevOps practices from ground up.",
  },
  {
    role: "Mobile Developer",
    company: "AppWorks Studio",
    period: "2019 — 2021",
    description:
      "Developed native iOS and Android applications for enterprise clients. Introduced automated testing and deployment pipelines.",
  },
  {
    role: "Junior Developer",
    company: "Digital Agency Co.",
    period: "2018 — 2019",
    description:
      "Started career building mobile applications and learning infrastructure automation fundamentals.",
  },
];

const ExperiencePage = () => {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between px-6 py-5 border-b border-border">
        <PALogo size={44} />
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Experience
        </span>
      </header>

      <section className="px-6 pt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Work</h1>
        <p className="text-sm text-muted-foreground mb-10">
          A timeline of roles and responsibilities.
        </p>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div key={i} className="border-t border-border py-8 group">
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
      </section>
    </div>
  );
};

export default ExperiencePage;
