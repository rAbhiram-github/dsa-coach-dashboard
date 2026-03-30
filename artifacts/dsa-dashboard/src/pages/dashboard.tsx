import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { QuestionModal } from "@/components/question-modal";
import { questions, Question, Difficulty } from "@/data/questions";
import { useProgress } from "@/hooks/use-progress";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Moon, Sun, Filter, CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | "All">("All");
  
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { completedIds, toggleQuestion } = useProgress();
  const { theme, toggleTheme } = useTheme();

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchCat = selectedCategory ? q.category === selectedCategory : true;
      const matchSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchDiff = difficultyFilter === "All" ? true : q.difficulty === difficultyFilter;
      return matchCat && matchSearch && matchDiff;
    });
  }, [selectedCategory, searchQuery, difficultyFilter]);

  const style = {
    "--sidebar-width": "18rem",
  } as React.CSSProperties;

  const diffColors = {
    Easy: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-200 dark:border-green-500/20",
    Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/20",
    Hard: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 border-red-200 dark:border-red-500/20"
  };

  return (
    <SidebarProvider style={style}>
      <div className="flex h-screen w-full bg-background overflow-hidden text-foreground">
        <AppSidebar 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
        
        <div className="flex flex-col flex-1 min-w-0">
          {/* Top Bar */}
          <header className="flex-none h-16 border-b border-border/40 bg-card/50 backdrop-blur-xl flex items-center justify-between px-4 lg:px-8 z-10 sticky top-0">
            <div className="flex items-center gap-4 flex-1">
              <SidebarTrigger className="hover-elevate rounded-lg lg:hidden" />
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search questions..." 
                  className="pl-10 bg-background border-border/50 focus-visible:ring-primary/20 h-10 rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4 ml-4">
              <div className="hidden sm:flex items-center bg-background border border-border/50 rounded-xl p-1 shadow-sm">
                {(["All", "Easy", "Medium", "Hard"] as const).map((diff) => (
                  <Button
                    key={diff}
                    variant={difficultyFilter === diff ? "secondary" : "ghost"}
                    size="sm"
                    className={cn(
                      "rounded-lg font-medium px-4 h-8 transition-all",
                      difficultyFilter === diff ? "shadow-sm bg-muted text-foreground" : "text-muted-foreground"
                    )}
                    onClick={() => setDifficultyFilter(diff)}
                  >
                    {diff}
                  </Button>
                ))}
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-10 w-10 rounded-xl border-border/50 hover-elevate transition-all"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </header>

          {/* Main Content Grid */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8 mt-2">
                <h2 className="text-3xl font-display font-bold tracking-tight text-foreground">
                  {selectedCategory || "All Questions"}
                </h2>
                <p className="text-muted-foreground mt-2 font-medium">
                  {filteredQuestions.length} {filteredQuestions.length === 1 ? 'question' : 'questions'} available
                </p>
              </div>

              {filteredQuestions.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">No questions found</h3>
                  <p className="text-muted-foreground max-w-sm mt-2">Try adjusting your search query or filters to find what you're looking for.</p>
                  <Button 
                    variant="outline" 
                    className="mt-6 rounded-xl hover-elevate"
                    onClick={() => { setSearchQuery(""); setDifficultyFilter("All"); }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                  layout
                >
                  <AnimatePresence>
                    {filteredQuestions.map((q, idx) => {
                      const isCompleted = completedIds[q.id];
                      return (
                        <motion.div
                          key={q.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2, delay: idx * 0.03 }}
                          className={cn(
                            "group cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden",
                            "hover:shadow-xl hover:-translate-y-1 hover:border-primary/30",
                            isCompleted ? "bg-card/50 border-border/40" : "bg-card border-border/50 shadow-sm"
                          )}
                          onClick={() => {
                            setSelectedQuestion(q);
                            setIsModalOpen(true);
                          }}
                        >
                          {/* Completion overlay effect */}
                          {isCompleted && (
                            <div className="absolute inset-0 bg-green-500/[0.02] pointer-events-none" />
                          )}
                          
                          <div className="flex justify-between items-start mb-4 relative z-10">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                #{q.id}
                              </span>
                              <Badge variant="outline" className={cn("text-[10px] uppercase font-bold tracking-wider rounded-md", diffColors[q.difficulty])}>
                                {q.difficulty}
                              </Badge>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 -mr-2 -mt-2 rounded-full hover:bg-transparent"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleQuestion(q.id);
                              }}
                            >
                              {isCompleted ? (
                                <CheckCircle2 className="h-6 w-6 text-green-500 fill-green-500/20" />
                              ) : (
                                <Circle className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                              )}
                            </Button>
                          </div>
                          
                          <h3 className={cn(
                            "text-lg font-bold mb-2 font-display leading-tight group-hover:text-primary transition-colors line-clamp-2",
                            isCompleted ? "text-muted-foreground line-through decoration-muted-foreground/30" : "text-foreground"
                          )}>
                            {q.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/30 relative z-10">
                            <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 rounded-md font-medium text-xs">
                              {q.category}
                            </Badge>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </main>
        </div>
      </div>

      <QuestionModal 
        question={selectedQuestion} 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </SidebarProvider>
  );
}
