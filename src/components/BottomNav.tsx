import { useLocation, useNavigate } from "react-router-dom";
import { Home, Briefcase, FolderOpen, Mail, BookOpen } from "lucide-react";

const tabs = [
  { path: "/", label: "Home", icon: Home },
  { path: "/experience", label: "Work", icon: Briefcase },
  { path: "/projects", label: "Projects", icon: FolderOpen },
  { path: "/blog", label: "Blog", icon: BookOpen },
  { path: "/contact", label: "Contact", icon: Mail },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile: bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm md:hidden">
        <div className="flex items-center justify-around h-[var(--nav-height)] max-w-2xl mx-auto">
          {tabs.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[10px] font-mono uppercase tracking-wider">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop/Tablet: top horizontal nav */}
      <nav className="hidden md:block sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-1 h-14 max-w-4xl mx-auto px-6">
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
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
