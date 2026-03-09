import PageShell from "@/components/PageShell";
import { Music, BookOpen, Dribbble, Code, Server, Smartphone, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <PageShell title="About">
      <div className="space-y-32">
        {/* Hero */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
            The Journey
          </p>
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
            From Mobile to
            <br className="hidden md:block" /> Infrastructure.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A story of evolution, resilience, and the relentless pursuit of building 
            systems that scale.
          </p>
        </section>

        {/* Chapters */}
        <div className="space-y-24 border-t border-border pt-24">
          {/* Chapter One */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 group animate-in fade-in duration-700">
            <div className="md:col-span-4 flex flex-col items-start gap-4">
              <div className="p-3 bg-muted rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <Smartphone size={24} />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Chapter One
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">The Android Days</h2>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  It all started with a fascination for mobile devices—those pocket-sized computers 
                  that were reshaping how humans interact with technology. I dove headfirst into 
                  Android development, spending countless nights wrestling with Activities, Fragments, 
                  and the ever-evolving Android SDK.
                </p>
                <p>
                  Building apps that people could hold in their hands and use daily was magical. 
                  But as my apps grew in complexity, I began to notice something: the real challenge 
                  wasn't just writing code—it was getting that code reliably into users' hands.
                </p>
              </div>
            </div>
          </section>

          {/* Chapter Two */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 group animate-in fade-in duration-700">
            <div className="md:col-span-4 flex flex-col items-start gap-4">
              <div className="p-3 bg-muted rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <ArrowRight size={24} />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Chapter Two
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">The Struggles</h2>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Deployment was a nightmare. Manual builds, inconsistent environments, and the 
                  dreaded "it works on my machine" syndrome plagued every release. I watched 
                  talented developers spend more time fighting infrastructure than building features.
                </p>
                <p>
                  The breaking point came when a critical bug slipped through to production because 
                  our testing pipeline was held together with duct tape and prayers. That's when I 
                  realized: someone needed to fix this. Why not me?
                </p>
              </div>
            </div>
          </section>

          {/* Chapter Three */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 group animate-in fade-in duration-700">
            <div className="md:col-span-4 flex flex-col items-start gap-4">
              <div className="p-3 bg-muted rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <Server size={24} />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Chapter Three
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">The DevOps Transformation</h2>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I immersed myself in a new world—containers, orchestration, infrastructure as code. 
                  Docker became my new playground. Kubernetes, my puzzle to solve. Terraform, my 
                  brush for painting cloud architectures.
                </p>
                <p>
                  The learning curve was steep. I failed. A lot. Misconfigured pipelines, crashed 
                  clusters, and security vulnerabilities taught me humility. But each failure was 
                  a lesson, each incident a teacher.
                </p>
                <p>
                  Today, I bridge both worlds—understanding the developer's pain because I've lived 
                  it, and building the infrastructure that makes their lives easier.
                </p>
              </div>
            </div>
          </section>

          {/* The Vision */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 group animate-in fade-in duration-700">
            <div className="md:col-span-4 flex flex-col items-start gap-4">
              <div className="p-3 bg-muted rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <Code size={24} />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                The Vision
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Making a Change</h2>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  My mission is simple: eliminate the friction between writing code and shipping 
                  value. I believe every developer deserves infrastructure that just works—pipelines 
                  that catch bugs before users do, deployments that happen with confidence, and 
                  systems that scale without breaking a sweat.
                </p>
                <p>
                  This isn't just about technology. It's about empowering teams to focus on what 
                  matters: solving real problems for real people.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Beyond the Code */}
        <section className="pb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
            Beyond the Code
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Life Outside Tech</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Music */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 border border-border rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                  <Music size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-mono text-sm uppercase tracking-widest">Music</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                There's something meditative about playing bass. The low frequencies, the 
                groove, the way you become the foundation that holds everything together. 
                Much like infrastructure, actually—you're not always in the spotlight, but 
                everything falls apart without you.
              </p>
            </div>

            {/* Reading */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 border border-border rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                  <BookOpen size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-mono text-sm uppercase tracking-widest">Reading</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Books are my escape and my education. From technical deep-dives to philosophy, 
                fiction to biographies—every book adds a new lens through which I see problems 
                and solutions differently.
              </p>
            </div>

            {/* Sports */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 border border-border rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                  <Dribbble size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-mono text-sm uppercase tracking-widest">Sports</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Basketball and football keep me grounded. The teamwork, the strategy, the 
                physical challenge—they remind me that success is never a solo endeavor. 
                Plus, nothing clears the mind like a good game after a long debugging session.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
};

export default AboutPage;