import { useState, useCallback } from "react";
import {
  getPortfolioData,
  savePortfolioData,
  type Experience,
  type Skill,
  type Project,
} from "@/lib/portfolioData";

export function usePortfolioData() {
  const [data, setData] = useState(getPortfolioData);

  const update = useCallback(
    (updater: (prev: ReturnType<typeof getPortfolioData>) => ReturnType<typeof getPortfolioData>) => {
      setData((prev) => {
        const next = updater(prev);
        savePortfolioData(next);
        return next;
      });
    },
    []
  );

  // Experience CRUD
  const addExperience = (exp: Omit<Experience, "id">) =>
    update((d) => ({
      ...d,
      experiences: [...d.experiences, { ...exp, id: crypto.randomUUID() }],
    }));

  const updateExperience = (id: string, exp: Partial<Experience>) =>
    update((d) => ({
      ...d,
      experiences: d.experiences.map((e) => (e.id === id ? { ...e, ...exp } : e)),
    }));

  const removeExperience = (id: string) =>
    update((d) => ({
      ...d,
      experiences: d.experiences.filter((e) => e.id !== id),
    }));

  // Skill CRUD
  const addSkill = (skill: Omit<Skill, "id">) =>
    update((d) => ({
      ...d,
      skills: [...d.skills, { ...skill, id: crypto.randomUUID() }],
    }));

  const removeSkill = (id: string) =>
    update((d) => ({
      ...d,
      skills: d.skills.filter((s) => s.id !== id),
    }));

  // Project CRUD
  const addProject = (project: Omit<Project, "id">) =>
    update((d) => ({
      ...d,
      projects: [...d.projects, { ...project, id: crypto.randomUUID() }],
    }));

  const updateProject = (id: string, project: Partial<Project>) =>
    update((d) => ({
      ...d,
      projects: d.projects.map((p) => (p.id === id ? { ...p, ...project } : p)),
    }));

  const removeProject = (id: string) =>
    update((d) => ({
      ...d,
      projects: d.projects.filter((p) => p.id !== id),
    }));

  return {
    ...data,
    addExperience,
    updateExperience,
    removeExperience,
    addSkill,
    removeSkill,
    addProject,
    updateProject,
    removeProject,
  };
}
