import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Question } from "@/data/questions";
import { CodeBlock } from "@/components/code-block";
import { BrainCircuit, Code2, Cpu, Lightbulb, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useProgress } from "@/hooks/use-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuestionModalProps {
  question: Question | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuestionModal({ question, open, onOpenChange }: QuestionModalProps) {
  const [lang, setLang] = useState<"python" | "java">("python");
  const { completedIds, toggleQuestion } = useProgress();

  if (!question) return null;

  const isCompleted = completedIds[question.id];

  const diffColors = {
    Easy: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 border-green-200 dark:border-green-500/30",
    Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/30",
    Hard: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400 border-red-200 dark:border-red-500/30"
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden flex flex-col rounded-2xl border-border/50 shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-border/50 bg-card z-10 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground font-mono font-bold text-lg">#{question.id}</span>
              <DialogTitle className="text-2xl font-display font-bold">
                {question.title}
              </DialogTitle>
            </div>
            <Button
              variant={isCompleted ? "default" : "outline"}
              className={cn(
                "rounded-xl gap-2 font-semibold transition-all duration-300",
                isCompleted ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/25 border-green-500" : ""
              )}
              onClick={() => toggleQuestion(question.id)}
            >
              <CheckCircle2 className={cn("w-4 h-4", isCompleted ? "text-white" : "text-muted-foreground")} />
              {isCompleted ? "Completed" : "Mark Done"}
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="outline" className="rounded-md font-medium">{question.category}</Badge>
            <Badge variant="outline" className={cn("rounded-md font-medium", diffColors[question.difficulty])}>
              {question.difficulty}
            </Badge>
          </div>
        </div>

        {/* Content Body */}
        <ScrollArea className="flex-1 bg-muted/20">
          <div className="p-6">
            <Tabs defaultValue="problem" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8 bg-card rounded-xl p-1 shadow-sm border border-border/50">
                <TabsTrigger value="problem" className="rounded-lg gap-2 data-[state=active]:shadow-sm"><Lightbulb className="w-4 h-4"/> Problem</TabsTrigger>
                <TabsTrigger value="algorithm" className="rounded-lg gap-2 data-[state=active]:shadow-sm"><BrainCircuit className="w-4 h-4"/> Algorithm</TabsTrigger>
                <TabsTrigger value="code" className="rounded-lg gap-2 data-[state=active]:shadow-sm"><Code2 className="w-4 h-4"/> Code</TabsTrigger>
                <TabsTrigger value="complexity" className="rounded-lg gap-2 data-[state=active]:shadow-sm"><Cpu className="w-4 h-4"/> Complexity</TabsTrigger>
              </TabsList>

              <TabsContent value="problem" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{question.problem.explanation}</p>
                </div>
                
                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Example</h3>
                  <div className="bg-muted rounded-xl p-4 font-mono text-sm leading-relaxed border border-border/50">
                    <p><span className="text-muted-foreground font-semibold">Input:</span> {question.problem.example.input}</p>
                    <p className="mt-2"><span className="text-muted-foreground font-semibold">Output:</span> {question.problem.example.output}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-primary">
                    <Lightbulb className="w-5 h-5" /> Intuition
                  </h3>
                  <p className="text-foreground/90 leading-relaxed">{question.problem.intuition}</p>
                </div>
              </TabsContent>

              <TabsContent value="algorithm" className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
                  <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                    Step-by-Step Approach
                  </h3>
                  <div className="space-y-4">
                    {question.algorithm.map((step, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          {idx + 1}
                        </div>
                        <p className="text-muted-foreground leading-relaxed pt-1 group-hover:text-foreground transition-colors">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 bg-card p-1.5 rounded-xl border border-border/50 shadow-sm w-fit">
                    <Button 
                      variant={lang === "python" ? "default" : "ghost"} 
                      size="sm" 
                      onClick={() => setLang("python")}
                      className="rounded-lg font-semibold px-6"
                    >
                      Python
                    </Button>
                    <Button 
                      variant={lang === "java" ? "default" : "ghost"} 
                      size="sm" 
                      onClick={() => setLang("java")}
                      className="rounded-lg font-semibold px-6"
                    >
                      Java
                    </Button>
                  </div>
                  <CodeBlock code={question.code[lang]} language={lang} />
                </div>
              </TabsContent>

              <TabsContent value="complexity" className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Time Complexity</h3>
                      <Badge variant="outline" className="text-base font-mono bg-primary/5 text-primary border-primary/20">
                        {question.complexity.time}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{question.complexity.timeExplanation}</p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Space Complexity</h3>
                      <Badge variant="outline" className="text-base font-mono bg-accent/5 text-accent-foreground border-accent/20">
                        {question.complexity.space}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{question.complexity.spaceExplanation}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
