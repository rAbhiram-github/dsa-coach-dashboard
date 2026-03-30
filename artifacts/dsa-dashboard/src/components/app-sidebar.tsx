import { 
  BookOpen, 
  Activity, 
  Code, 
  Layers, 
  List, 
  TreeDeciduous, 
  Share2, 
  Hash,
  MonitorCheck
} from "lucide-react";
import { Link } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader
} from "@/components/ui/sidebar";
import { Category, questions } from "@/data/questions";
import { useProgress } from "@/hooks/use-progress";
import { Progress } from "@/components/ui/progress";

interface AppSidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
}

export function AppSidebar({ selectedCategory, onSelectCategory }: AppSidebarProps) {
  const { getCompletedCount } = useProgress();
  const completed = getCompletedCount();
  const total = questions.length;
  const progressPercent = Math.round((completed / total) * 100);

  const categories: { title: Category; icon: React.ElementType }[] = [
    { title: "Arrays", icon: Layers },
    { title: "Strings", icon: TypeIcon },
    { title: "Linked List", icon: List },
    { title: "Stack & Queue", icon: Layers },
    { title: "Trees", icon: TreeDeciduous },
    { title: "Graphs", icon: Share2 },
    { title: "Dynamic Programming", icon: Hash },
  ];

  function getCount(cat: Category) {
    return questions.filter(q => q.category === cat).length;
  }

  function getCompletedInCategory(cat: Category) {
    const { completedIds } = useProgress.getState();
    return questions.filter(q => q.category === cat && completedIds[q.id]).length;
  }

  return (
    <Sidebar variant="sidebar" className="border-r border-border/40 shadow-sm">
      <SidebarHeader className="pt-6 pb-4 px-6 border-b border-border/40">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
            <Code className="text-primary-foreground h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl leading-tight">DSA Coach</h1>
            <p className="text-xs text-muted-foreground font-medium">Ace the interview</p>
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-primary">{completed} / {total}</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider font-semibold text-muted-foreground px-3 mb-2">Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/cs-concepts">
                  <SidebarMenuButton 
                    className="rounded-xl h-11 hover-elevate transition-all"
                  >
                    <MonitorCheck className="h-4 w-4" />
                    <span className="font-medium">CS Concepts</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider font-semibold text-muted-foreground px-3 mb-2">Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={selectedCategory === null}
                  onClick={() => onSelectCategory(null)}
                  className="rounded-xl h-11 hover-elevate transition-all"
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="font-medium">All Questions</span>
                  <span className="ml-auto bg-muted text-muted-foreground text-xs font-semibold py-0.5 px-2 rounded-full">
                    {total}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <div className="my-2 h-px bg-border/50 mx-3" />

              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.title;
                const catTotal = getCount(cat.title);
                const catCompleted = getCompletedInCategory(cat.title);
                
                return (
                  <SidebarMenuItem key={cat.title}>
                    <SidebarMenuButton 
                      isActive={isSelected}
                      onClick={() => onSelectCategory(cat.title)}
                      className={`rounded-xl h-11 transition-all ${isSelected ? 'shadow-sm' : 'hover-elevate'}`}
                    >
                      <cat.icon className="h-4 w-4" />
                      <span className="font-medium">{cat.title}</span>
                      <div className="ml-auto flex items-center gap-1.5">
                        {catCompleted === catTotal && catTotal > 0 && (
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                        )}
                        <span className="bg-muted text-muted-foreground text-xs font-semibold py-0.5 px-2 rounded-full">
                          {catTotal}
                        </span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function TypeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}
