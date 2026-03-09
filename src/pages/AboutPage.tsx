import PageShell from "@/components/PageShell";
import { Music, BookOpen, Dribbble, Code, Server, Smartphone, ArrowRight } from "lucide-react";

const chapters = [
  {
    icon: Smartphone,
    label: "Chapter One",
    title: "The Android Days",
    paragraphs: [
      "It all started with a fascination for mobile devices—those pocket-sized computers that were reshaping how humans interact with technology. I dove headfirst into Android development, spending countless nights wrestling with Activities, Fragments, and the ever-evolving Android SDK.",
      "Building apps that people could hold in their hands and use daily was magical. But as my apps grew in complexity, I began to notice something: the real challenge wasn't just writing code—it was getting that code reliably into users' hands.",
    ],
  },
  {
    icon: ArrowRight,
    label: "Chapter Two",
    title: "The Struggles",
    paragraphs: [
      "Deployment was a nightmare. Manual builds, inconsistent environments, and the dreaded \"it works on my machine\" syndrome plagued every release. I watched talented developers spend more time fighting infrastructure than building features.",
      "The breaking point came when a critical bug slipped through to production because our testing pipeline was held together with duct tape and prayers. That's when I realized: someone needed to fix this. Why not me?",
    ],
  },
  {
    icon: Server,
    label: "Chapter Three",
    title: "The DevOps Transformation",
    paragraphs: [
      "I immersed myself in a new world—containers, orchestration, infrastructure as code. Docker became my new playground. Kubernetes, my puzzle to solve. Terraform, my brush for painting cloud architectures.",
      "The learning curve was steep. I failed. A lot. Misconfigured pipelines, crashed clusters, and security vulnerabilities taught me humility. But each failure was a lesson, each incident a teacher.",
      "Today, I bridge both worlds—understanding the developer's pain because I've lived it, and building the infrastructure that makes their lives easier.",
    ],
  },
  {
    icon: Code,
    label: "The Vision",
    title: "Making a Change",
    paragraphs: [
      "My mission is simple: eliminate the friction between writing code and shipping value. I believe every developer deserves infrastructure that just works—pipelines that catch bugs before users do, deployments that happen with confidence, and systems that scale without breaking a sweat.",
      "This isn't just about technology. It's about empowering teams to focus on what matters: solving real problems for real people.",
    ],
  },
];

const interests = [
  { icon: Music, title: "Music", text: "There's something meditative about playing bass. The low frequencies, the groove, the way you become the foundation that holds everything together. Much like infrastructure, actually—you're not always in the spotlight, but everything falls apart without you." },
  { icon: BookOpen, title: "Reading", text: "Books are my escape and my education. From technical deep-dives to philosophy, fiction to biographies—every book adds a new lens through which I see problems and solutions differently." },
  { icon: Dribbble, title: "Sports", text: "Basketball and football keep me grounded. The teamwork, the strategy, the physical challenge—they remind me that success is never a solo endeavor. Plus, nothing clears the mind like a good game after a long debugging session." },
];

const AboutPage = () => {
  return (
    <PageShell title="About">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        {/* Hero */}
        <section className="mb-24 md:mb-40">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-8">
            The Journey
          </p>
          <h1 className="text-4xl md:text-[4.5rem] font-bold leading-[1.08] tracking-tight mb-8 md:mb-10">
            From Mobile to
            <br /> Infrastructure.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-[1.8]">
            A story of evolution, resilience, and the relentless pursuit of building
            systems that scale.
          </p>
        </section>

        {/* Chapters */}
        <div className="space-y-20 md:space-y-32 border-t border-border pt-16 md:pt-24">
          {chapters.map((ch) => (
            <section key={ch.label} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 group">
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
                <div className="p-2.5 border border-border rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                  <ch.icon size={20} strokeWidth={1.5} />
                </div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {ch.label}
                </p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">{ch.title}</h2>
                <div className="space-y-5 text-base text-muted-foreground leading-[1.85] max-w-2xl">
                  {ch.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Interests */}
        <section className="mt-24 md:mt-40 border-t border-border pt-16 md:pt-24">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10 md:mb-14">
            Beyond the Code
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {interests.map((item) => (
              <div key={item.title} className="group">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 border border-border rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                    <item.icon size={20} strokeWidth={1.3} />
                  </div>
                  <h3 className="text-[11px] font-mono uppercase tracking-[0.2em]">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-[1.85]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
};

export default AboutPage;
