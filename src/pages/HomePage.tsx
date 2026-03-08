import PALogo from "@/components/PALogo";
import { ArrowDown } from "lucide-react";

const skills = [
  "Kubernetes", "Docker", "Terraform", "AWS", "GCP", "CI/CD",
  "React Native", "Flutter", "Swift", "Kotlin", "Jenkins", "GitHub Actions",
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-border">
        <PALogo size={44} />
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Portfolio '26
        </span>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
          Mobile & DevOps Engineer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
          Praise
          <br />
          Afuwape
        </h1>
        <p className="text-base text-muted-foreground max-w-md leading-relaxed">
          6+ years crafting scalable mobile applications and building robust
          infrastructure pipelines. Bridging the gap between development and
          operations.
        </p>
        <div className="mt-10 flex items-center gap-2 text-muted-foreground">
          <ArrowDown size={14} />
          <span className="text-xs font-mono uppercase tracking-widest">
            Scroll to explore
          </span>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Skills */}
      <section className="px-6 py-12">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
          Core Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-border px-3 py-1.5 text-xs font-mono uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="border-t border-border" />
      <section className="px-6 py-12 grid grid-cols-3 gap-4">
        {[
          { num: "6+", label: "Years" },
          { num: "30+", label: "Projects" },
          { num: "15+", label: "Clients" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-mono font-bold">{stat.num}</p>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
