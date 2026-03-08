import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { usePublishedArticles } from "@/hooks/useArticles";
import { format } from "date-fns";

const BlogPage = () => {
  const { data: articles = [], isLoading } = usePublishedArticles();

  return (
    <PageShell title="Blog">
      <section className="px-6 pt-10 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Blog</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Thoughts on engineering, infrastructure, and mobile development.
        </p>

        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : articles.length === 0 ? (
          <p className="text-sm text-muted-foreground">No articles yet.</p>
        ) : (
          <div className="space-y-0">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="block border-t border-border py-6 group"
              >
                {article.cover_image_url && (
                  <img
                    src={article.cover_image_url}
                    alt={article.title}
                    className="w-full h-48 object-cover border border-border mb-4"
                    loading="lazy"
                  />
                )}
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  {format(new Date(article.created_at), "dd MMM yyyy")}
                </p>
                <h2 className="text-xl font-bold group-hover:underline underline-offset-4 mb-2">
                  {article.title}
                </h2>
                {article.excerpt && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
};

export default BlogPage;
