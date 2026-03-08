import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Save, Upload, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { uploadArticleImage } from "@/hooks/useArticles";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import type { Article } from "@/hooks/useArticles";

interface ArticleEditorProps {
  article?: Article | null;
  onSave: (data: {
    title: string;
    content: string;
    excerpt: string;
    cover_image_url?: string | null;
    published: boolean;
  }) => void;
  onCancel: () => void;
  isPending: boolean;
}

const ArticleEditor = ({ article, onSave, onCancel, isPending }: ArticleEditorProps) => {
  const [title, setTitle] = useState(article?.title || "");
  const [content, setContent] = useState(article?.content || "");
  const [excerpt, setExcerpt] = useState(article?.excerpt || "");
  const [coverUrl, setCoverUrl] = useState(article?.cover_image_url || "");
  const [published, setPublished] = useState(article?.published || false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadArticleImage(file);
      setCoverUrl(url);
      toast({ title: "Cover image uploaded" });
    } catch {
      toast({ title: "Upload failed", variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const handleInsertImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      setUploading(true);
      try {
        const url = await uploadArticleImage(file);
        const markdown = `\n![${file.name}](${url})\n`;
        const textarea = contentRef.current;
        if (textarea) {
          const pos = textarea.selectionStart;
          setContent((c) => c.slice(0, pos) + markdown + c.slice(pos));
        } else {
          setContent((c) => c + markdown);
        }
        toast({ title: "Image inserted" });
      } catch {
        toast({ title: "Upload failed", variant: "destructive" });
      } finally {
        setUploading(false);
      }
    };
    input.click();
  };

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSave({
      title: title.trim(),
      content,
      excerpt: excerpt.trim(),
      cover_image_url: coverUrl || null,
      published,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {article ? "Edit Article" : "New Article"}
        </p>
        <button onClick={onCancel} className="text-muted-foreground hover:text-foreground">
          <X size={16} />
        </button>
      </div>

      <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder="Excerpt (short summary)" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Cover Image</p>
          <Button variant="outline" size="sm" onClick={() => fileRef.current?.click()} disabled={uploading}>
            <Upload size={12} /> {uploading ? "Uploading…" : "Upload"}
          </Button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
        </div>
        {coverUrl && (
          <div className="relative">
            <img src={coverUrl} alt="Cover" className="w-full h-32 object-cover border border-border" />
            <button onClick={() => setCoverUrl("")} className="absolute top-1 right-1 bg-background border border-border p-1">
              <X size={12} />
            </button>
          </div>
        )}
      </div>

      <Tabs defaultValue="write">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="write" className="text-xs font-mono uppercase">Write</TabsTrigger>
            <TabsTrigger value="preview" className="text-xs font-mono uppercase">Preview</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm" onClick={handleInsertImage} disabled={uploading}>
            <Upload size={12} /> Insert Image
          </Button>
        </div>
        <TabsContent value="write">
          <Textarea
            ref={contentRef}
            placeholder="Write your article in Markdown…&#10;&#10;Use ```language for code blocks&#10;Use ![alt](url) for images"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[300px] font-mono text-sm"
          />
        </TabsContent>
        <TabsContent value="preview" className="border border-border p-4 min-h-[300px]">
          {content ? <MarkdownRenderer content={content} /> : <p className="text-sm text-muted-foreground">Nothing to preview.</p>}
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
          <Switch checked={published} onCheckedChange={setPublished} />
          {published ? "Published" : "Draft"}
        </label>
        <Button onClick={handleSubmit} disabled={isPending || !title.trim()} className="gap-2">
          {article ? <Save size={14} /> : <Plus size={14} />}
          {article ? "Update" : "Create"}
        </Button>
      </div>
    </div>
  );
};

export default ArticleEditor;
