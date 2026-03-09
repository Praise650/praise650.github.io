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
import { Plus, Trash2, X, Pencil, Loader2 } from "lucide-react";
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
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Dashboard.</h1>
          <p className="text-lg text-muted-foreground">
            Manage portfolio content and articles.
          </p>
        </section>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-12 h-auto p-1 bg-muted">
            <TabsTrigger value="experience" className="text-xs font-mono uppercase tracking-widest py-3">Experience</TabsTrigger>
            <TabsTrigger value="skills" className="text-xs font-mono uppercase tracking-widest py-3">Skills</TabsTrigger>
            <TabsTrigger value="projects" className="text-xs font-mono uppercase tracking-widest py-3">Projects</TabsTrigger>
            <TabsTrigger value="blog" className="text-xs font-mono uppercase tracking-widest py-3">Blog</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-8">
            <div className="space-y-4 border border-border p-6 bg-card">
              <p className="text-sm font-mono uppercase tracking-widest font-bold">Add New Experience</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Role" value={expForm.role} onChange={(e) => setExpForm((f) => ({ ...f, role: e.target.value }))} className="rounded-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0" />
                <Input placeholder="Company" value={expForm.company} onChange={(e) => setExpForm((f) => ({ ...f, company: e.target.value }))} className="rounded-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0" />
              </div>
              <Input placeholder="Period (e.g. 2023 — Present)" value={expForm.period} onChange={(e) => setExpForm((f) => ({ ...f, period: e.target.value }))} className="rounded-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0" />
              <Textarea placeholder="Description" value={expForm.description} onChange={(e) => setExpForm((f) => ({ ...f, description: e.target.value }))} className="rounded-none min-h-[100px] focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0" />
              <Button onClick={handleAddExperience} className="w-full gap-2 rounded-none font-mono uppercase tracking-widest text-xs h-12" disabled={addExperience.isPending}>
                {addExperience.isPending ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />} Add Experience
              </Button>
            </div>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="border border-border p-6 flex items-start justify-between gap-4 group hover:bg-muted/50 transition-colors">
                  <div className="min-w-0">
                    <p className="text-lg font-bold truncate mb-1">{exp.role}</p>
                    <p className="text-sm font-mono text-muted-foreground">{exp.company} · {exp.period}</p>
                  </div>
                  <button
                    onClick={() => removeExperience.mutate(exp.id, { onSuccess: () => toast({ title: "Removed" }) })}
                    className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-8">
            <div className="space-y-4 border border-border p-6 bg-card">
              <p className="text-sm font-mono uppercase tracking-widest font-bold">Add New Skill</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Skill name" value={skillForm.name} onChange={(e) => setSkillForm((f) => ({ ...f, name: e.target.value }))} className="rounded-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0" />
                <select
                  value={skillForm.category}
                  onChange={(e) => setSkillForm((f) => ({ ...f, category: e.target.value }))}
                  className="w-full h-10 border border-input bg-background px-3 text-sm font-mono focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                >
                  <option value="infrastructure">Infrastructure</option>
                  <option value="mobile">Mobile</option>
                  <option value="tools">Tools</option>
                  <option value="languages">Languages</option>
                </select>
              </div>
              <Button onClick={handleAddSkill} className="w-full gap-2 rounded-none font-mono uppercase tracking-widest text-xs h-12" disabled={addSkill.isPending}>
                {addSkill.isPending ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />} Add Skill
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill.id} className="inline-flex items-center gap-2 border border-border pl-4 pr-2 py-2 text-sm font-mono uppercase tracking-wider group hover:border-foreground transition-colors bg-card">
                  {skill.name}
                  <button
                    onClick={() => removeSkill.mutate(skill.id, { onSuccess: () => toast({ title: "Removed" }) })}
                    className="p-1 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors rounded"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <div className="space-y-4 border border-border p-6 bg-card">
              <p className="text-sm font-mono uppercase tracking-widest font-bold">Add New Project</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Project title" value={projForm.title} onChange={(e) => setProjForm((f) => ({ ...f, title: e.target.value }))} className="rounded-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0" />
                <Input placeholder="Tags (comma-separated)" value={projForm.tags} onChange={(e) => setProjForm((f) => ({ ...f, tags: e.target.value }))} className="rounded-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0" />
              </div>
              <Textarea placeholder="Description" value={projForm.description} onChange={(e) => setProjForm((f) => ({ ...f, description: e.target.value }))} className="rounded-none min-h-[100px] focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0" />
              <Button onClick={handleAddProject} className="w-full gap-2 rounded-none font-mono uppercase tracking-widest text-xs h-12" disabled={addProject.isPending}>
                {addProject.isPending ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />} Add Project
              </Button>
            </div>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="border border-border p-6 flex items-start justify-between gap-4 group hover:bg-muted/50 transition-colors">
                  <div className="min-w-0">
                    <p className="text-lg font-bold truncate mb-2">{proj.title}</p>
                    <div className="flex gap-2 flex-wrap">
                      {proj.tags.map(t => (
                        <span key={t} className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-0.5 bg-background">{t}</span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => removeProject.mutate(proj.id, { onSuccess: () => toast({ title: "Removed" }) })}
                    className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blog" className="space-y-8">
            {showArticleEditor || editingArticle ? (
              <div className="border border-border p-6 bg-card">
                <ArticleEditor
                  article={editingArticle}
                  isPending={addArticle.isPending || updateArticle.isPending}
                  onCancel={() => {
                    setShowArticleEditor(false);
                    setEditingArticle(null);
                  }}
                  onSave={(data) => {
                    if (editingArticle) {
                      updateArticle.mutate(
                        { id: editingArticle.id, ...data },
                        {
                          onSuccess: () => {
                            setEditingArticle(null);
                            toast({ title: "Article updated" });
                          },
                        }
                      );
                    } else {
                      addArticle.mutate(data, {
                        onSuccess: () => {
                          setShowArticleEditor(false);
                          toast({ title: "Article created" });
                        },
                      });
                    }
                  }}
                />
              </div>
            ) : (
              <Button onClick={() => setShowArticleEditor(true)} className="w-full gap-2 rounded-none font-mono uppercase tracking-widest text-xs h-16 border-dashed border-2 bg-transparent text-foreground hover:bg-muted" variant="outline">
                <Plus size={16} /> Create New Article
              </Button>
            )}

            <div className="space-y-4">
              {articles.map((article) => (
                <div key={article.id} className="border border-border p-6 flex items-start justify-between gap-4 group hover:bg-muted/50 transition-colors">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-lg font-bold truncate">{article.title}</p>
                      {!article.published && (
                        <span className="text-[10px] font-mono uppercase border border-border px-2 py-0.5 bg-muted text-muted-foreground">
                          Draft
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-mono text-muted-foreground line-clamp-2">{article.excerpt || "No excerpt"}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => setEditingArticle(article)}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => removeArticle.mutate(article.id, { onSuccess: () => toast({ title: "Article removed" }) })}
                      className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors rounded"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageShell>
  );
};

export default ManagePage;