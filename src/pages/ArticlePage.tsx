import { useParams, Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { useArticle } from "@/hooks/useArticles";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useArticle(slug || "");

  return (
    <PageShell title="Blog">
      <section className="px-6 pt-6 pb-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={12} /> Back to blog
        </Link>

        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : error || !article ? (
          <p className="text-sm text-muted-foreground">Article not found.</p>
        ) : (
          <article>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
              {format(new Date(article.created_at), "dd MMM yyyy")}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>

            {article.cover_image_url && (
              <img
                src={article.cover_image_url}
                alt={article.title}
                className="w-full border border-border mb-8"
              />
            )}

            <MarkdownRenderer content={article.content} />
          </article>
        )}
      </section>
    </PageShell>
  );
};

export default ArticlePage;
