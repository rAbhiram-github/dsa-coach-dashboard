import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Search, Moon, Sun, ChevronLeft, ChevronDown, ChevronUp, BookOpen, Lightbulb, Code2, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { csQuestions, csCategories, CSCategory, CSQuestion } from "@/data/cs-concepts";
import { Link } from "wouter";

export default function CSConcepts() {
  const [selectedCategory, setSelectedCategory] = useState<CSCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState<CSQuestion | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const filteredQuestions = useMemo(() => {
    return csQuestions.filter((q) => {
      const matchCat = selectedCategory ? q.category === selectedCategory : true;
      const matchSearch =
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryCount = (cat: CSCategory) =>
    csQuestions.filter((q) => q.category === cat).length;

  const categoryColors: Record<CSCategory, string> = {
    OOPs: "border-violet-500/30 hover:border-violet-500/60 hover:shadow-violet-500/10",
    DBMS: "border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-emerald-500/10",
    OS: "border-orange-500/30 hover:border-orange-500/60 hover:shadow-orange-500/10",
    CN: "border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/10",
    DSA: "border-pink-500/30 hover:border-pink-500/60 hover:shadow-pink-500/10",
  };

  const categoryBadgeColors: Record<CSCategory, string> = {
    OOPs: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400 border-violet-200 dark:border-violet-500/25",
    DBMS: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/25",
    OS: "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400 border-orange-200 dark:border-orange-500/25",
    CN: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400 border-blue-200 dark:border-blue-500/25",
    DSA: "bg-pink-100 text-pink-700 dark:bg-pink-500/15 dark:text-pink-400 border-pink-200 dark:border-pink-500/25",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="sticky top-0 z-20 h-16 border-b border-border/40 bg-card/80 backdrop-blur-xl flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4 flex-1">
          <Link href="/">
            <Button variant="ghost" size="sm" className="rounded-xl gap-2 font-medium text-muted-foreground hover:text-foreground">
              <ChevronLeft className="h-4 w-4" />
              DSA Dashboard
            </Button>
          </Link>
          <div className="h-6 w-px bg-border/50 hidden sm:block" />
          <div className="relative max-w-md w-full hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search concepts..."
              className="pl-10 bg-background border-border/50 focus-visible:ring-primary/20 h-10 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="font-display font-bold text-lg hidden md:inline">CS Concepts</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-xl border-border/50 hover-elevate ml-3"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 lg:p-8">
        {/* Hero */}
        <div className="text-center mb-10 mt-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-r from-primary via-violet-500 to-pink-500 bg-clip-text text-transparent">
            CS Interview Concepts
          </h1>
          <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
            Master the essential CS topics asked in placement interviews — with easy-to-learn answers.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            className="rounded-full px-6 h-10 font-medium transition-all"
            onClick={() => setSelectedCategory(null)}
          >
            All Topics ({csQuestions.length})
          </Button>
          {csCategories.map((cat) => (
            <Button
              key={cat.title}
              variant={selectedCategory === cat.title ? "default" : "outline"}
              className={cn(
                "rounded-full px-5 h-10 font-medium transition-all gap-2",
                selectedCategory === cat.title
                  ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg`
                  : ""
              )}
              onClick={() => setSelectedCategory(cat.title)}
            >
              <span>{cat.icon}</span>
              {cat.title}
              <span className="text-xs opacity-75">({getCategoryCount(cat.title)})</span>
            </Button>
          ))}
        </div>

        {/* Mobile search */}
        <div className="sm:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search concepts..."
              className="pl-10 bg-background border-border/50 focus-visible:ring-primary/20 h-10 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Cards (when no filter selected) */}
        {!selectedCategory && !searchQuery && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
            {csCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className={cn(
                  "cursor-pointer rounded-2xl p-5 border-2 bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                  categoryColors[cat.title]
                )}
                onClick={() => setSelectedCategory(cat.title)}
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-display font-bold text-lg">{cat.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cat.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs rounded-md">
                    {getCategoryCount(cat.title)} questions
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Questions Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-display font-bold">
              {selectedCategory
                ? csCategories.find((c) => c.title === selectedCategory)?.icon + " " + selectedCategory + " Questions"
                : "All Questions"}
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              {filteredQuestions.length} question{filteredQuestions.length !== 1 ? "s" : ""}
            </p>
          </div>
          {selectedCategory && (
            <Button
              variant="ghost"
              size="sm"
              className="rounded-xl text-muted-foreground"
              onClick={() => setSelectedCategory(null)}
            >
              Clear filter
            </Button>
          )}
        </div>

        {/* Questions List */}
        {filteredQuestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-bold">No questions found</h3>
            <p className="text-muted-foreground max-w-sm mt-2">
              Try adjusting your search query or topic filter.
            </p>
            <Button
              variant="outline"
              className="mt-6 rounded-xl"
              onClick={() => { setSearchQuery(""); setSelectedCategory(null) }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <motion.div className="space-y-3" layout>
            <AnimatePresence>
              {filteredQuestions.map((q, idx) => (
                <motion.div
                  key={q.id + q.category}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2, delay: idx * 0.02 }}
                  className={cn(
                    "group cursor-pointer rounded-2xl p-5 border bg-card shadow-sm transition-all duration-300",
                    "hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30"
                  )}
                  onClick={() => { setSelectedQuestion(q); setIsModalOpen(true); }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                          Q{q.id}
                        </span>
                        <Badge variant="outline" className={cn("text-[10px] uppercase font-bold tracking-wider rounded-md", categoryBadgeColors[q.category])}>
                          {q.category}
                        </Badge>
                      </div>
                      <h3 className="text-base font-bold font-display group-hover:text-primary transition-colors line-clamp-2">
                        {q.question}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {q.answer.substring(0, 150)}...
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors pt-4">
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* Question Detail Modal */}
      <CSQuestionModal
        question={selectedQuestion}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        badgeColor={selectedQuestion ? categoryBadgeColors[selectedQuestion.category] : ""}
      />
    </div>
  );
}

// ---- Modal Component ----
function CSQuestionModal({
  question,
  open,
  onOpenChange,
  badgeColor,
}: {
  question: CSQuestion | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
  badgeColor: string;
}) {
  const [copiedExample, setCopiedExample] = useState(false);

  if (!question) return null;

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedExample(true);
    setTimeout(() => setCopiedExample(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden flex flex-col rounded-2xl border-border/50 shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-border/50 bg-card z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-muted-foreground font-mono font-bold text-sm">Q{question.id}</span>
            <Badge variant="outline" className={cn("text-[10px] uppercase font-bold tracking-wider rounded-md", badgeColor)}>
              {question.category}
            </Badge>
          </div>
          <DialogTitle className="text-xl font-display font-bold leading-tight">
            {question.question}
          </DialogTitle>
        </div>

        {/* Body */}
        <ScrollArea className="flex-1 bg-muted/20">
          <div className="p-6 space-y-5">
            {/* Answer */}
            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
              <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Answer
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {question.answer}
              </p>
            </div>

            {/* Key Points */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10 shadow-sm">
              <h3 className="text-base font-semibold mb-4 flex items-center gap-2 text-primary">
                <BookOpen className="w-5 h-5" />
                Key Points to Remember
              </h3>
              <div className="space-y-3">
                {question.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-3 group">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1 group-hover:text-foreground transition-colors">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Example */}
            {question.example && (
              <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-border/30">
                  <h3 className="text-base font-semibold flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-green-500" />
                    Example
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 gap-1.5 rounded-lg text-xs"
                    onClick={() => copyCode(question.example!)}
                  >
                    {copiedExample ? (
                      <><Check className="h-3.5 w-3.5 text-green-500" /> Copied</>
                    ) : (
                      <><Copy className="h-3.5 w-3.5" /> Copy</>
                    )}
                  </Button>
                </div>
                <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto bg-zinc-950 text-zinc-200">
                  <code>{question.example}</code>
                </pre>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
