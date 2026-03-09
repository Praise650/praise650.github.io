import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { usePublishedArticles } from "@/hooks/useArticles";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

const BlogPage = () => {
  const { data: articles = [], isLoading } = usePublishedArticles();

  return (
    <PageShell title="Blog">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <section className="mb-24 md:mb-40">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-8">
            Thoughts & Notes
          </p>
          <h1 className="text-4xl md:text-[4.5rem] font-bold leading-[1.08] tracking-tight mb-8 md:mb-10">Writing.</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-[1.8]">
            Thoughts on engineering, infrastructure, and mobile development.
          </p>
        </section>

        {isLoading ? (
          <div className="space-y-16 border-t border-border pt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3"><div className="h-3 w-24 bg-muted" /></div>
                <div className="md:col-span-9 space-y-3">
                  <div className="h-8 w-2/3 bg-muted" />
                  <div className="h-12 w-full bg-muted" />
                </div>
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="border-t border-border py-24 text-center">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">No articles yet</p>
            <p className="text-sm text-muted-foreground">Articles will appear here once published.</p>
          </div>
        ) : (
          <div className="border-t border-border pt-16 md:pt-20 space-y-16 md:space-y-20">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="block group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
                  <div className="md:col-span-3 pt-1.5">
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      {format(new Date(article.created_at), "MMM dd, yyyy")}
                    </p>
                  </div>

                  <div className="md:col-span-9">
                    {article.cover_image_url && (
                      <div className="mb-6 overflow-hidden border border-border/60">
                        <img
                          src={article.cover_image_url}
                          alt={article.title}
                          className="w-full aspect-[21/9] object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                      {article.title}
                    </h2>

                    {article.excerpt && (
                      <p className="text-sm text-muted-foreground leading-[1.85] mb-5 max-w-lg">
                        {article.excerpt}
                      </p>
                    )}

                    <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
                      <span>Read</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
};

export default BlogPage;
