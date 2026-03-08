import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import PageShell from "@/components/PageShell";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import PALogo from "@/components/PALogo";

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
      <section className="px-6 pt-20 pb-10 flex flex-col items-center">
        <PALogo size={64} />
        <h1 className="text-2xl font-bold mt-6 mb-2">Admin Access</h1>
        <p className="text-xs text-muted-foreground mb-8 font-mono uppercase tracking-widest">
          Sign in to manage portfolio
        </p>

        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </Button>
        </form>
      </section>
    </PageShell>
  );
};

export default LoginPage;
