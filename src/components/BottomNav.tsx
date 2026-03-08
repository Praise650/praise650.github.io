import { useLocation, useNavigate } from "react-router-dom";
import { Home, Briefcase, FolderOpen, Mail, Settings } from "lucide-react";

const tabs = [
  { path: "/", label: "Home", icon: Home },
  { path: "/experience", label: "Work", icon: Briefcase },
  { path: "/projects", label: "Projects", icon: FolderOpen },
  { path: "/contact", label: "Contact", icon: Mail },
  { path: "/manage", label: "Manage", icon: Settings },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm">
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
  );
};

export default BottomNav;
