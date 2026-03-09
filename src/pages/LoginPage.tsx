import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import PageShell from "@/components/PageShell";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import PALogo from "@/components/PALogo";
import { Loader2 } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    } else {
      navigate("/manage");
    }
  };

  return (
    <PageShell title="Login">
      <div className="min-h-[70vh] flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <div className="w-full max-w-md p-8 md:p-12 border border-border bg-card">
          <div className="flex flex-col items-center mb-10">
            <PALogo size={56} />
            <h1 className="text-2xl font-bold mt-8 mb-3 tracking-tight">Admin Access</h1>
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest text-center">
              Sign in to manage portfolio
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 rounded-none border-border focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 px-4 rounded-none border-border focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 rounded-none font-mono uppercase tracking-widest text-xs" 
              disabled={loading}
            >
              {loading && <Loader2 size={14} className="animate-spin mr-2" />}
              {loading ? "Authenticating…" : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </PageShell>
  );
};

export default LoginPage;