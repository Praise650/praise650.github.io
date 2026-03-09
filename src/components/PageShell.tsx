import PALogo from "@/components/PALogo";
import { useLocation, Link } from "react-router-dom";

const tabs = [
  { path: "/about", label: "About" },
  { path: "/experience", label: "Work" },
  { path: "/projects", label: "Projects" },
  { path: "/blog", label: "Writing" },
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
      <header className="hidden md:flex items-center justify-between px-16 lg:px-24 xl:px-32 py-10">
        <Link to="/" className="hover:opacity-60 transition-opacity duration-300">
          <PALogo size={44} />
        </Link>

        <nav className="flex items-center gap-12">
          {tabs.map(({ path, label }) => {
            const isActive = location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
            return (
              <Link
                key={path}
                to={path}
                className={`relative text-[11px] font-mono uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="flex md:hidden items-center justify-between px-6 py-5 sticky top-0 bg-background/95 backdrop-blur-sm z-40 border-b border-border/50">
        <Link to="/">
          <PALogo size={36} />
        </Link>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </span>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 md:px-16 lg:px-20 pb-24 md:pb-40 pt-6 md:pt-12">
        {children}
      </main>
    </div>
  );
};

export default PageShell;
