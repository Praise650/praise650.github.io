import { useLocation, useNavigate } from "react-router-dom";
import { Home, Briefcase, FolderOpen, Mail, PenTool } from "lucide-react";

const tabs = [
  { path: "/", label: "Home", icon: Home },
  { path: "/experience", label: "Work", icon: Briefcase },
  { path: "/projects", label: "Projects", icon: FolderOpen },
  { path: "/blog", label: "Writing", icon: PenTool },
  { path: "/contact", label: "Contact", icon: Mail },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-t border-border/40 md:hidden pb-safe">
      <div className="flex items-center justify-around h-[calc(var(--nav-height)+env(safe-area-inset-bottom))] max-w-md mx-auto">
        {tabs.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center justify-center gap-1 w-14 h-14 transition-colors duration-200 ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground/60"
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 1.8 : 1.2} />
              <span className="text-[8px] font-mono uppercase tracking-[0.15em]">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
