import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="prose prose-neutral max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneLight as any}
                language={match[1]}
                PreTag="div"
                customStyle={{
                  margin: "1.5rem 0",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 0,
                  fontSize: "0.8rem",
                }}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-muted px-1.5 py-0.5 text-sm font-mono border border-border" {...props}>
                {children}
              </code>
            );
          },
          img({ src, alt }: any) {
            return (
              <img
                src={src}
                alt={alt || ""}
                className="w-full border border-border my-6"
                loading="lazy"
              />
            );
          },
          h1: ({ children }: any) => <h1 className="text-3xl font-bold font-mono mt-8 mb-4">{children}</h1>,
          h2: ({ children }: any) => <h2 className="text-2xl font-bold font-mono mt-6 mb-3">{children}</h2>,
          h3: ({ children }: any) => <h3 className="text-xl font-bold font-mono mt-5 mb-2">{children}</h3>,
          p: ({ children }: any) => <p className="text-base leading-relaxed mb-4 text-foreground">{children}</p>,
          ul: ({ children }: any) => <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>,
          ol: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>,
          blockquote: ({ children }: any) => (
            <blockquote className="border-l-2 border-foreground pl-4 my-4 text-muted-foreground italic">
              {children}
            </blockquote>
          ),
          a: ({ href, children }: any) => (
            <a href={href} className="underline underline-offset-2 hover:text-muted-foreground transition-colors" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
