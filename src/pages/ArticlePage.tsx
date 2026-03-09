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
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out max-w-[680px] mx-auto">
        <div className="mb-12 md:mb-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={12} /> Back to writing
          </Link>
        </div>

        {isLoading ? (
          <div className="animate-pulse space-y-6">
            <div className="h-3 w-28 bg-muted" />
            <div className="h-10 w-3/4 bg-muted" />
            <div className="aspect-[21/9] w-full bg-muted" />
            <div className="space-y-3 mt-12">
              <div className="h-3 w-full bg-muted" />
              <div className="h-3 w-full bg-muted" />
              <div className="h-3 w-5/6 bg-muted" />
            </div>
          </div>
        ) : error || !article ? (
          <div className="py-24 text-center border border-border/60">
            <p className="text-lg font-bold mb-2">Article not found.</p>
            <p className="text-sm text-muted-foreground">The article you're looking for doesn't exist.</p>
          </div>
        ) : (
          <article>
            <header className="mb-12 md:mb-16">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
                {format(new Date(article.created_at), "MMMM dd, yyyy")}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                {article.title}
              </h1>
            </header>

            {article.cover_image_url && (
              <div className="mb-14 md:mb-16 border border-border/60">
                <img
                  src={article.cover_image_url}
                  alt={article.title}
                  className="w-full aspect-[21/9] object-cover"
                />
              </div>
            )}

            <div className="prose prose-neutral dark:prose-invert prose-base max-w-none prose-headings:font-mono prose-headings:tracking-tight prose-p:leading-[1.85] prose-a:font-mono prose-a:uppercase prose-a:text-[11px] prose-a:tracking-[0.2em] prose-a:no-underline hover:prose-a:underline hover:prose-a:underline-offset-4 prose-img:border prose-img:border-border">
              <MarkdownRenderer content={article.content} />
            </div>
          </article>
        )}
      </div>
    </PageShell>
  );
};

export default ArticlePage;
