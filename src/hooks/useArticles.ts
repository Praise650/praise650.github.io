import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Article {
  id: string;
  user_id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  cover_image_url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

async function fetchPublishedArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Article[];
}

async function fetchAllArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Article[];
}

async function fetchArticleBySlug(slug: string) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) throw error;
  return data as Article;
}

export function usePublishedArticles() {
  return useQuery({ queryKey: ["articles", "published"], queryFn: fetchPublishedArticles });
}

export function useAllArticles() {
  return useQuery({ queryKey: ["articles", "all"], queryFn: fetchAllArticles });
}

export function useArticle(slug: string) {
  return useQuery({
    queryKey: ["articles", slug],
    queryFn: () => fetchArticleBySlug(slug),
    enabled: !!slug,
  });
}

async function getCurrentUserId() {
  const { data } = await supabase.auth.getUser();
  if (!data.user) throw new Error("Not authenticated");
  return data.user.id;
}

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    + "-" + Date.now().toString(36);
}

export function useAddArticle() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (article: { title: string; content: string; excerpt: string; cover_image_url?: string; published: boolean }) => {
      const user_id = await getCurrentUserId();
      const slug = generateSlug(article.title);
      const { error } = await supabase.from("articles").insert({ ...article, slug, user_id });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["articles"] }),
  });
}

export function useUpdateArticle() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...updates }: { id: string; title?: string; content?: string; excerpt?: string; cover_image_url?: string | null; published?: boolean }) => {
      const { error } = await supabase
        .from("articles")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["articles"] }),
  });
}

export function useRemoveArticle() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("articles").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["articles"] }),
  });
}

export async function uploadArticleImage(file: File) {
  const ext = file.name.split(".").pop();
  const path = `${Date.now()}.${ext}`;
  const { error } = await supabase.storage.from("article-images").upload(path, file);
  if (error) throw error;
  const { data } = supabase.storage.from("article-images").getPublicUrl(path);
  return data.publicUrl;
}
