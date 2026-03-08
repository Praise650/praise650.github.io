import PALogo from "@/components/PALogo";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CloudScale Platform",
    tags: ["Kubernetes", "Terraform", "AWS"],
    description:
      "Multi-tenant cloud infrastructure platform with automated scaling and monitoring dashboards.",
  },
  {
    title: "FinTrack Mobile",
    tags: ["React Native", "TypeScript"],
    description:
      "Cross-platform fintech app serving 50K+ users with real-time portfolio tracking.",
  },
  {
    title: "CI/CD Pipeline Framework",
    tags: ["GitHub Actions", "Docker"],
    description:
      "Reusable pipeline templates reducing deployment time by 70% across 20+ microservices.",
  },
  {
    title: "HealthConnect App",
    tags: ["Flutter", "Firebase"],
    description:
      "Telemedicine application with video consultation, appointment scheduling, and health records.",
  },
  {
    title: "InfraMonitor",
    tags: ["Prometheus", "Grafana", "Go"],
    description:
      "Custom monitoring solution for distributed systems with intelligent alerting.",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between px-6 py-5 border-b border-border">
        <PALogo size={44} />
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Projects
        </span>
      </header>

      <section className="px-6 pt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Projects</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Selected work across mobile & infrastructure.
        </p>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <div
              key={i}
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
      </section>
    </div>
  );
};

export default ProjectsPage;
