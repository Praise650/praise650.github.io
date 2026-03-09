import PageShell from "@/components/PageShell";
import PALogo from "@/components/PALogo";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "praise@example.com", href: "mailto:praise@example.com" },
  { icon: Github, label: "GitHub", value: "github.com/praiseafuwape", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/praiseafuwape", href: "#" },
  { icon: Twitter, label: "Twitter / X", value: "@praiseafuwape", href: "#" },
];

const ContactPage = () => {
  return (
    <PageShell title="Contact">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out flex flex-col min-h-[70vh]">
        <section className="mb-20">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">Let's Talk.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Open to new opportunities, collaborations, and interesting
            conversations about mobile and infrastructure.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
          {links.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group p-8 border border-border hover:bg-foreground hover:text-background transition-all duration-500 flex flex-col gap-12"
            >
              <div className="flex justify-between items-start">
                <Icon size={24} strokeWidth={1.5} className="group-hover:text-background text-foreground" />
                <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div>
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground group-hover:text-background/70 mb-2">
                  {label}
                </p>
                <p className="text-lg font-medium">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-auto pt-12 border-t border-border flex flex-col items-center gap-6">
          <PALogo size={64} />
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            Praise Afuwape © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </PageShell>
  );
};

export default ContactPage;