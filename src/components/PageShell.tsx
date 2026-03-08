import PALogo from "@/components/PALogo";

interface PageShellProps {
  title: string;
  children: React.ReactNode;
}

const PageShell = ({ title, children }: PageShellProps) => {
  return (
    <div className="min-h-screen max-w-2xl md:max-w-4xl mx-auto border-x border-border">
      <header className="flex items-center justify-between px-6 py-5 border-b border-border">
        <PALogo size={44} />
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
      </header>
      {children}
    </div>
  );
};

export default PageShell;
