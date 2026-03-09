import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <PageShell title="Not Found">
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-6 text-muted">
          404
        </h1>
        <p className="text-xl md:text-2xl font-bold mb-4">Page not found</p>
        <p className="text-muted-foreground max-w-md mb-12">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground"
        >
          <ArrowLeft size={14} /> Return to Home
        </Link>
      </div>
    </PageShell>
  );
};

export default NotFound;