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
        <section className="mb-20 md:mb-32">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">Writing.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Thoughts on engineering, infrastructure, and mobile development.
          </p>
        </section>

        {isLoading ? (
          <div className="space-y-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="h-4 w-32 bg-muted" />
                <div className="h-10 w-2/3 bg-muted" />
                <div className="h-16 w-full bg-muted" />
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="border-t border-border py-24 text-center">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">No articles yet</p>
            <p className="text-muted-foreground">Articles will appear here once published.</p>
          </div>
        ) : (
          <div className="space-y-20 border-t border-border pt-16">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="block group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                  <div className="md:col-span-3 flex flex-col pt-2">
                    <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                      {format(new Date(article.created_at), "MMM dd, yyyy")}
                    </p>
                  </div>
                  
                  <div className="md:col-span-9">
                    {article.cover_image_url && (
                      <div className="mb-8 overflow-hidden border border-border">
                        <img
                          src={article.cover_image_url}
                          alt={article.title}
                          className="w-full aspect-[21/9] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>
                    )}
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                      {article.title}
                    </h2>
                    
                    {article.excerpt && (
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                        {article.excerpt}
                      </p>
                    )}
                    
                    <div className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                      <span>Read More</span>
                      <ArrowRight size={14} />
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