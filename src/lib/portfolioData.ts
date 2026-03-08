export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "infrastructure" | "mobile" | "tools" | "languages";
}

export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  url?: string;
}

const STORAGE_KEY = "portfolio_data";

interface PortfolioData {
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
}

const defaultData: PortfolioData = {
  experiences: [
    {
      id: "1",
      role: "Senior DevOps Engineer",
      company: "TechCorp Inc.",
      period: "2023 — Present",
      description:
        "Leading cloud infrastructure and CI/CD pipeline architecture. Managing Kubernetes clusters across multi-cloud environments.",
    },
    {
      id: "2",
      role: "Mobile & DevOps Engineer",
      company: "StartupFlow",
      period: "2021 — 2023",
      description:
        "Built cross-platform mobile apps with React Native and Flutter while establishing DevOps practices from ground up.",
    },
    {
      id: "3",
      role: "Mobile Developer",
      company: "AppWorks Studio",
      period: "2019 — 2021",
      description:
        "Developed native iOS and Android applications for enterprise clients. Introduced automated testing and deployment pipelines.",
    },
    {
      id: "4",
      role: "Junior Developer",
      company: "Digital Agency Co.",
      period: "2018 — 2019",
      description:
        "Started career building mobile applications and learning infrastructure automation fundamentals.",
    },
  ],
  skills: [
    { id: "s1", name: "Kubernetes", category: "infrastructure" },
    { id: "s2", name: "Docker", category: "infrastructure" },
    { id: "s3", name: "Terraform", category: "infrastructure" },
    { id: "s4", name: "AWS", category: "infrastructure" },
    { id: "s5", name: "GCP", category: "infrastructure" },
    { id: "s6", name: "CI/CD", category: "tools" },
    { id: "s7", name: "React Native", category: "mobile" },
    { id: "s8", name: "Flutter", category: "mobile" },
    { id: "s9", name: "Swift", category: "languages" },
    { id: "s10", name: "Kotlin", category: "languages" },
    { id: "s11", name: "Jenkins", category: "tools" },
    { id: "s12", name: "GitHub Actions", category: "tools" },
  ],
  projects: [
    {
      id: "p1",
      title: "CloudScale Platform",
      tags: ["Kubernetes", "Terraform", "AWS"],
      description:
        "Multi-tenant cloud infrastructure platform with automated scaling and monitoring dashboards.",
    },
    {
      id: "p2",
      title: "FinTrack Mobile",
      tags: ["React Native", "TypeScript"],
      description:
        "Cross-platform fintech app serving 50K+ users with real-time portfolio tracking.",
    },
    {
      id: "p3",
      title: "CI/CD Pipeline Framework",
      tags: ["GitHub Actions", "Docker"],
      description:
        "Reusable pipeline templates reducing deployment time by 70% across 20+ microservices.",
    },
    {
      id: "p4",
      title: "HealthConnect App",
      tags: ["Flutter", "Firebase"],
      description:
        "Telemedicine application with video consultation, appointment scheduling, and health records.",
    },
    {
      id: "p5",
      title: "InfraMonitor",
      tags: ["Prometheus", "Grafana", "Go"],
      description:
        "Custom monitoring solution for distributed systems with intelligent alerting.",
    },
  ],
};

export function getPortfolioData(): PortfolioData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultData;
}

export function savePortfolioData(data: PortfolioData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetPortfolioData() {
  localStorage.removeItem(STORAGE_KEY);
  return defaultData;
}
