import PALogo from "@/components/PALogo";
import { useLocation, Link } from "react-router-dom";

const tabs = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Work" },
  { path: "/projects", label: "Projects" },
  { path: "/blog", label: "Writing" },
  { path: "/contact", label: "Contact" },
];

interface PageShellProps {
  title: string;
  children: React.ReactNode;
}

const PageShell = ({ title, children }: PageShellProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col font-sans selection:bg-foreground selection:text-background">
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between px-12 lg:px-24 py-12">
        <Link to="/" className="hover:opacity-70 transition-opacity">
          <PALogo size={48} />
        </Link>

        <nav className="flex items-center gap-10">
          {tabs.map(({ path, label }) => {
            const isActive = location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
            return (
              <Link
                key={path}
                to={path}
                className={`text-xs font-mono uppercase tracking-widest transition-all ${
                  isActive
                    ? "text-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="flex md:hidden items-center justify-between px-6 py-6 sticky top-0 bg-background/95 backdrop-blur z-40 border-b border-border">
        <Link to="/about">
          <PALogo size={40} />
        </Link>
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-32 pt-8 md:pt-16 flex flex-col">
        {children}
      </main>
    </div>
  );
};

export default PageShell;