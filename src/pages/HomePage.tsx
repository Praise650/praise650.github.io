import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { ArrowRight, ArrowDownRight } from "lucide-react";

const skills = [
  "Kotlin", "Swift", "Flutter", "React Native",
  "Terraform", "Docker", "Kubernetes", "AWS",
  "CI/CD", "GitHub Actions", "Jenkins", "Fastlane",
  "TypeScript", "Go", "Python", "Dart",
];

const HomePage = () => {
  return (
    <PageShell title="Portfolio">
      {/* Hero — full viewport on desktop */}
      <div className="flex flex-col md:min-h-[calc(100vh-8rem)]">
        <section className="flex flex-col justify-center flex-1 min-h-[55vh] md:min-h-0">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-8 md:mb-10">
              Mobile & DevOps Engineer
            </p>
            <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[1.05] tracking-tight mb-10 md:mb-12">
              Praise
              <br /> Afuwape.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-[1.8]">
              6+ years crafting scalable mobile applications and building robust
              infrastructure pipelines. Bridging the gap between development and
              operations.
            </p>
          </div>

          {/* Scroll hint — desktop only */}
          <div className="hidden md:flex items-center gap-3 mt-auto pt-20 text-muted-foreground/40">
            <ArrowDownRight size={14} strokeWidth={1.5} />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
          </div>
        </section>
      </div>

      {/* Skills */}
      <section className="pt-20 md:pt-40 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 ease-out fill-mode-both">
        <div className="flex items-baseline justify-between mb-10 md:mb-14">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
            Core Technologies
          </h2>
          <span className="hidden md:block h-px flex-1 bg-border ml-8" />
        </div>
        <div className="flex flex-wrap gap-2.5 md:gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-mono uppercase tracking-[0.15em] px-4 py-2.5 border border-border/80 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-400 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="pt-20 md:pt-40 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out fill-mode-both">
        <div className="grid grid-cols-3 gap-6 md:gap-16">
          {[
            { num: "6+", label: "Years" },
            { num: "30+", label: "Projects" },
            { num: "15+", label: "Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-5xl font-mono font-bold mb-2 md:mb-3">{stat.num}</p>
              <p className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pt-20 md:pt-40 pb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 ease-out fill-mode-both">
        <div className="border-t border-border pt-12 md:pt-16">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 text-sm md:text-base font-mono uppercase tracking-[0.2em] hover:text-muted-foreground transition-colors duration-300"
          >
            <span>Get in touch</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default HomePage;
