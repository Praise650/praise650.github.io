import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Experience {
  id: string;
  user_id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  sort_order: number;
}

export interface Skill {
  id: string;
  user_id: string;
  name: string;
  category: string;
}

export interface Project {
  id: string;
  user_id: string;
  title: string;
  tags: string[];
  description: string;
  url?: string | null;
  sort_order: number;
}

async function fetchExperiences() {
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as Experience[];
}

async function fetchSkills() {
  const { data, error } = await supabase.from("skills").select("*");
  if (error) throw error;
  return (data ?? []) as Skill[];
}

async function fetchProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as Project[];
}

export function useExperiences() {
  return useQuery({ queryKey: ["experiences"], queryFn: fetchExperiences });
}

export function useSkills() {
  return useQuery({ queryKey: ["skills"], queryFn: fetchSkills });
}

export function useProjects() {
  return useQuery({ queryKey: ["projects"], queryFn: fetchProjects });
}

async function getCurrentUserId() {
  const { data } = await supabase.auth.getUser();
  if (!data.user) throw new Error("Not authenticated");
  return data.user.id;
}

export function useAddExperience() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (exp: { role: string; company: string; period: string; description: string }) => {
      const user_id = await getCurrentUserId();
      const { error } = await supabase.from("experiences").insert({ ...exp, user_id });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["experiences"] }),
  });
}

export function useRemoveExperience() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("experiences").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["experiences"] }),
  });
}

export function useAddSkill() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (skill: { name: string; category: string }) => {
      const user_id = await getCurrentUserId();
      const { error } = await supabase.from("skills").insert({ ...skill, user_id });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["skills"] }),
  });
}

export function useRemoveSkill() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("skills").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["skills"] }),
  });
}

export function useAddProject() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (project: { title: string; tags: string[]; description: string; url?: string }) => {
      const user_id = await getCurrentUserId();
      const { error } = await supabase.from("projects").insert({ ...project, user_id });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });
}

export function useRemoveProject() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });
}
