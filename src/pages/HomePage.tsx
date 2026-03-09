import PageShell from "@/components/PageShell";

const skills = [
  "Kotlin", "Swift", "Flutter", "React Native",
  "Terraform", "Docker", "Kubernetes", "AWS",
  "CI/CD", "GitHub Actions", "Jenkins", "Fastlane",
  "TypeScript", "Go", "Python", "Dart",
];

const HomePage = () => {
  return (
    <PageShell title="Portfolio '26">
      <div className="flex flex-col md:min-h-[calc(100vh-10rem)]">
        {/* Hero */}
        <section className="flex flex-col justify-center flex-1 min-h-[60vh] md:min-h-0 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
          Mobile & DevOps Engineer
        </p>
        <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight mb-8">
          Praise
          <br className="hidden md:block" /> Afuwape.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          6+ years crafting scalable mobile applications and building robust
          infrastructure pipelines. Bridging the gap between development and
          operations.
        </p>
      </section>

      {/* Skills */}
      <section className="pt-24 md:pt-32 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 ease-out fill-mode-both">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8">
          Core Technologies
        </h2>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs md:text-sm font-mono uppercase tracking-wider px-4 py-2 border border-border hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="pt-24 md:pt-32 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out fill-mode-both">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            { num: "6+", label: "Years Experience" },
            { num: "30+", label: "Projects Shipped" },
            { num: "15+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="border-l border-border pl-6">
              <p className="text-4xl md:text-5xl font-mono font-bold mb-2">{stat.num}</p>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </PageShell>
  );
};

export default HomePage;