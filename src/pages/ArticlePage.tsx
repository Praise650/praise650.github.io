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
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out max-w-3xl mx-auto">
        <div className="mb-12 md:mb-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} /> Back to writing
          </Link>
        </div>

        {isLoading ? (
          <div className="animate-pulse space-y-6">
            <div className="h-4 w-32 bg-muted" />
            <div className="h-12 w-3/4 bg-muted" />
            <div className="aspect-[21/9] w-full bg-muted" />
            <div className="space-y-4 mt-12">
              <div className="h-4 w-full bg-muted" />
              <div className="h-4 w-full bg-muted" />
              <div className="h-4 w-5/6 bg-muted" />
            </div>
          </div>
        ) : error || !article ? (
          <div className="py-24 text-center border border-border">
            <p className="text-xl font-bold mb-2">Article not found.</p>
            <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
          </div>
        ) : (
          <article>
            <header className="mb-12 md:mb-16">
              <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">
                {format(new Date(article.created_at), "MMMM dd, yyyy")}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
                {article.title}
              </h1>
            </header>

            {article.cover_image_url && (
              <div className="mb-16 border border-border">
                <img
                  src={article.cover_image_url}
                  alt={article.title}
                  className="w-full aspect-[21/9] object-cover"
                />
              </div>
            )}

            <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none prose-headings:font-mono prose-headings:tracking-tight prose-a:font-mono prose-a:uppercase prose-a:text-xs prose-a:tracking-widest prose-a:no-underline hover:prose-a:underline hover:prose-a:underline-offset-4 prose-img:border prose-img:border-border">
              <MarkdownRenderer content={article.content} />
            </div>
          </article>
        )}
      </div>
    </PageShell>
  );
};

export default ArticlePage;