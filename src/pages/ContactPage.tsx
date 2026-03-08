import PALogo from "@/components/PALogo";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "praise@example.com", href: "mailto:praise@example.com" },
  { icon: Github, label: "GitHub", value: "github.com/praiseafuwape", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/praiseafuwape", href: "#" },
  { icon: Twitter, label: "Twitter / X", value: "@praiseafuwape", href: "#" },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between px-6 py-5 border-b border-border">
        <PALogo size={44} />
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Contact
        </span>
      </header>

      <section className="px-6 pt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Let's Talk</h1>
        <p className="text-sm text-muted-foreground mb-10 max-w-sm leading-relaxed">
          Open to new opportunities, collaborations, and interesting
          conversations about mobile and infrastructure.
        </p>

        <div className="space-y-0">
          {links.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center justify-between border-t border-border py-6 group hover:bg-muted/50 -mx-6 px-6 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Icon size={18} strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <p className="text-sm font-medium mt-0.5">{value}</p>
                </div>
              </div>
              <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-border mt-0 pt-12 pb-8 text-center">
          <PALogo size={56} />
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-4">
            Praise Afuwape © 2026
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
