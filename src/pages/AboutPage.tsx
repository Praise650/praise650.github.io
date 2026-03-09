import PageShell from "@/components/PageShell";
import { Music, BookOpen, Dribbble, Code, Server, Smartphone, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <PageShell title="About">
      {/* Hero */}
      <section className="px-6 pt-16 pb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
          The Journey
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-6">
          From Mobile
          <br />
          to Infrastructure
        </h1>
        <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
          A story of evolution, resilience, and the relentless pursuit of building 
          systems that scale.
        </p>
      </section>

      <div className="border-t border-border" />

      {/* The Beginning */}
      <section className="px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <Smartphone size={20} className="text-muted-foreground" />
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Chapter One
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">The Android Days</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          It all started with a fascination for mobile devices—those pocket-sized computers 
          that were reshaping how humans interact with technology. I dove headfirst into 
          Android development, spending countless nights wrestling with Activities, Fragments, 
          and the ever-evolving Android SDK.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Building apps that people could hold in their hands and use daily was magical. 
          But as my apps grew in complexity, I began to notice something: the real challenge 
          wasn't just writing code—it was getting that code reliably into users' hands.
        </p>
      </section>

      <div className="border-t border-border" />

      {/* The Struggle */}
      <section className="px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <ArrowRight size={20} className="text-muted-foreground" />
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Chapter Two
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">The Struggles</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Deployment was a nightmare. Manual builds, inconsistent environments, and the 
          dreaded "it works on my machine" syndrome plagued every release. I watched 
          talented developers spend more time fighting infrastructure than building features.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The breaking point came when a critical bug slipped through to production because 
          our testing pipeline was held together with duct tape and prayers. That's when I 
          realized: someone needed to fix this. Why not me?
        </p>
      </section>

      <div className="border-t border-border" />

      {/* The Transformation */}
      <section className="px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <Server size={20} className="text-muted-foreground" />
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Chapter Three
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">The DevOps Transformation</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I immersed myself in a new world—containers, orchestration, infrastructure as code. 
          Docker became my new playground. Kubernetes, my puzzle to solve. Terraform, my 
          brush for painting cloud architectures.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The learning curve was steep. I failed. A lot. Misconfigured pipelines, crashed 
          clusters, and security vulnerabilities taught me humility. But each failure was 
          a lesson, each incident a teacher.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Today, I bridge both worlds—understanding the developer's pain because I've lived 
          it, and building the infrastructure that makes their lives easier.
        </p>
      </section>

      <div className="border-t border-border" />

      {/* The Vision */}
      <section className="px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <Code size={20} className="text-muted-foreground" />
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            The Vision
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Making a Change</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          My mission is simple: eliminate the friction between writing code and shipping 
          value. I believe every developer deserves infrastructure that just works—pipelines 
          that catch bugs before users do, deployments that happen with confidence, and 
          systems that scale without breaking a sweat.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This isn't just about technology. It's about empowering teams to focus on what 
          matters: solving real problems for real people.
        </p>
      </section>

      <div className="border-t border-border" />

      {/* Beyond the Code */}
      <section className="px-6 py-12">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
          Beyond the Code
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Life Outside Tech</h2>
        
        <div className="grid gap-6">
          {/* Music */}
          <div className="border border-border p-6 hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <Music size={20} />
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
          <div className="border border-border p-6 hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen size={20} />
              <h3 className="font-mono text-sm uppercase tracking-widest">Reading</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Books are my escape and my education. From technical deep-dives to philosophy, 
              fiction to biographies—every book adds a new lens through which I see problems 
              and solutions differently.
            </p>
          </div>

          {/* Sports */}
          <div className="border border-border p-6 hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <Dribbble size={20} />
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

      {/* Bottom padding for mobile nav */}
      <div className="h-24 md:h-12" />
    </PageShell>
  );
};

export default AboutPage;
