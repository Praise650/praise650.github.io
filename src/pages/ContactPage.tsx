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
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <section className="mb-24 md:mb-40">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-8">
            Connect
          </p>
          <h1 className="text-4xl md:text-[4.5rem] font-bold leading-[1.08] tracking-tight mb-8 md:mb-10">Let's Talk.</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-[1.8]">
            Open to new opportunities, collaborations, and interesting
            conversations about mobile and infrastructure.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-32 md:mb-40">
          {links.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group p-8 md:p-10 border border-border/60 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500 flex flex-col gap-10 md:gap-14"
            >
              <div className="flex justify-between items-start">
                <Icon size={22} strokeWidth={1.3} />
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60 mb-2">
                  {label}
                </p>
                <p className="text-base font-medium">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-12 md:pt-16 flex flex-col items-center gap-5">
          <PALogo size={56} />
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Praise Afuwape © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </PageShell>
  );
};

export default ContactPage;
