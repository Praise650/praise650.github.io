import { useState } from "react";
import PageShell from "@/components/PageShell";
import {
  useExperiences,
  useSkills,
  useProjects,
  useAddExperience,
  useRemoveExperience,
  useAddSkill,
  useRemoveSkill,
  useAddProject,
  useRemoveProject,
} from "@/hooks/usePortfolioData";
import {
  useAllArticles,
  useAddArticle,
  useUpdateArticle,
  useRemoveArticle,
  type Article,
} from "@/hooks/useArticles";
import ArticleEditor from "@/components/ArticleEditor";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, X, Pencil } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ManagePage = () => {
  const { data: experiences = [] } = useExperiences();
  const { data: skills = [] } = useSkills();
  const { data: projects = [] } = useProjects();

  const { data: articles = [] } = useAllArticles();
  const addArticle = useAddArticle();
  const updateArticle = useUpdateArticle();
  const removeArticle = useRemoveArticle();
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [showArticleEditor, setShowArticleEditor] = useState(false);

  const addExperience = useAddExperience();
  const removeExperience = useRemoveExperience();
  const addSkill = useAddSkill();
  const removeSkill = useRemoveSkill();
  const addProject = useAddProject();
  const removeProject = useRemoveProject();

  const [expForm, setExpForm] = useState({ role: "", company: "", period: "", description: "" });
  const [skillForm, setSkillForm] = useState({ name: "", category: "infrastructure" });
  const [projForm, setProjForm] = useState({ title: "", tags: "", description: "" });

  const handleAddExperience = () => {
    if (!expForm.role || !expForm.company) return;
    addExperience.mutate(expForm, {
      onSuccess: () => {
        setExpForm({ role: "", company: "", period: "", description: "" });
        toast({ title: "Experience added" });
      },
    });
  };

  const handleAddSkill = () => {
    if (!skillForm.name) return;
    addSkill.mutate(skillForm, {
      onSuccess: () => {
        setSkillForm({ name: "", category: "infrastructure" });
        toast({ title: "Skill added" });
      },
    });
  };

  const handleAddProject = () => {
    if (!projForm.title) return;
    addProject.mutate(
      {
        title: projForm.title,
        tags: projForm.tags.split(",").map((t) => t.trim()).filter(Boolean),
        description: projForm.description,
      },
      {
        onSuccess: () => {
          setProjForm({ title: "", tags: "", description: "" });
          toast({ title: "Project added" });
        },
      }
    );
  };

  return (
    <PageShell title="Manage">
      <section className="px-6 pt-10 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Manage</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Add or remove portfolio content dynamically.
        </p>

        <Tabs defaultValue="experience">
          <TabsList className="w-full grid grid-cols-3 mb-8">
            <TabsTrigger value="experience" className="text-xs font-mono uppercase">Experience</TabsTrigger>
            <TabsTrigger value="skills" className="text-xs font-mono uppercase">Skills</TabsTrigger>
            <TabsTrigger value="projects" className="text-xs font-mono uppercase">Projects</TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            <div className="space-y-3 border border-border p-4">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Add New Experience</p>
              <Input placeholder="Role" value={expForm.role} onChange={(e) => setExpForm((f) => ({ ...f, role: e.target.value }))} />
              <Input placeholder="Company" value={expForm.company} onChange={(e) => setExpForm((f) => ({ ...f, company: e.target.value }))} />
              <Input placeholder="Period (e.g. 2023 — Present)" value={expForm.period} onChange={(e) => setExpForm((f) => ({ ...f, period: e.target.value }))} />
              <Textarea placeholder="Description" value={expForm.description} onChange={(e) => setExpForm((f) => ({ ...f, description: e.target.value }))} />
              <Button onClick={handleAddExperience} className="w-full gap-2" disabled={addExperience.isPending}>
                <Plus size={14} /> Add Experience
              </Button>
            </div>
            <div className="space-y-0">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-t border-border py-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-bold truncate">{exp.role}</p>
                    <p className="text-xs font-mono text-muted-foreground">{exp.company} · {exp.period}</p>
                  </div>
                  <button
                    onClick={() => removeExperience.mutate(exp.id, { onSuccess: () => toast({ title: "Removed" }) })}
                    className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="space-y-3 border border-border p-4">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Add New Skill</p>
              <Input placeholder="Skill name" value={skillForm.name} onChange={(e) => setSkillForm((f) => ({ ...f, name: e.target.value }))} />
              <select
                value={skillForm.category}
                onChange={(e) => setSkillForm((f) => ({ ...f, category: e.target.value }))}
                className="w-full h-10 border border-input bg-background px-3 text-sm font-mono"
              >
                <option value="infrastructure">Infrastructure</option>
                <option value="mobile">Mobile</option>
                <option value="tools">Tools</option>
                <option value="languages">Languages</option>
              </select>
              <Button onClick={handleAddSkill} className="w-full gap-2" disabled={addSkill.isPending}>
                <Plus size={14} /> Add Skill
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill.id} className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-xs font-mono uppercase tracking-wider group">
                  {skill.name}
                  <button
                    onClick={() => removeSkill.mutate(skill.id, { onSuccess: () => toast({ title: "Removed" }) })}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="space-y-3 border border-border p-4">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Add New Project</p>
              <Input placeholder="Project title" value={projForm.title} onChange={(e) => setProjForm((f) => ({ ...f, title: e.target.value }))} />
              <Input placeholder="Tags (comma-separated)" value={projForm.tags} onChange={(e) => setProjForm((f) => ({ ...f, tags: e.target.value }))} />
              <Textarea placeholder="Description" value={projForm.description} onChange={(e) => setProjForm((f) => ({ ...f, description: e.target.value }))} />
              <Button onClick={handleAddProject} className="w-full gap-2" disabled={addProject.isPending}>
                <Plus size={14} /> Add Project
              </Button>
            </div>
            <div className="space-y-0">
              {projects.map((proj) => (
                <div key={proj.id} className="border-t border-border py-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-bold truncate">{proj.title}</p>
                    <p className="text-xs font-mono text-muted-foreground">{proj.tags.join(", ")}</p>
                  </div>
                  <button
                    onClick={() => removeProject.mutate(proj.id, { onSuccess: () => toast({ title: "Removed" }) })}
                    className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </PageShell>
  );
};

export default ManagePage;
