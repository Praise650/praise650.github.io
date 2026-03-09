import PALogo from "@/components/PALogo";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Home, Briefcase, FolderOpen, Mail, BookOpen } from "lucide-react";

const tabs = [
  { path: "/", label: "Home", icon: Home },
  { path: "/experience", label: "Work", icon: Briefcase },
  { path: "/projects", label: "Projects", icon: FolderOpen },
  { path: "/blog", label: "Blog", icon: BookOpen },
  { path: "/contact", label: "Contact", icon: Mail },
];

interface PageShellProps {
  title: string;
  children: React.ReactNode;
}

const PageShell = ({ title, children }: PageShellProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full md:w-4/5 mx-auto border-x border-border">
      {/* Mobile header */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-border md:hidden">
        <Link to="/about">
          <PALogo size={44} />
        </Link>
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
      </header>

      {/* Desktop/Tablet header with integrated nav */}
      <header className="hidden md:flex items-center justify-between px-8 py-5 border-b border-border">
        <Link to="/about">
          <PALogo size={44} />
        </Link>

        <nav className="flex items-center gap-1">
          {tabs.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex items-center gap-2 px-4 py-2 transition-colors font-mono text-xs uppercase tracking-widest ${
                  isActive
                    ? "text-foreground border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={16} strokeWidth={isActive ? 2.5 : 1.5} />
                {label}
              </button>
            );
          })}
        </nav>

        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
      </header>

      {children}
    </div>
  );
};

export default PageShell;
