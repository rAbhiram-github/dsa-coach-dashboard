import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
}

// Extremely basic inline syntax highlighting
function highlightCode(code: string, language: string) {
  // Common keywords to highlight
  const keywords = /\b(def|class|public|private|static|return|if|else|elif|for|while|in|import|from|break|continue|new|int|boolean|String|List|Map|Set|HashMap|HashSet|ArrayList|LinkedList|float)\b/g;
  const numbers = /\b(\d+)\b/g;
  const strings = /("[^"]*"|'[^']*')/g;
  
  let html = code
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // Quick and dirty regex highlighting
  html = html.replace(strings, '<span class="string">$1</span>');
  html = html.replace(keywords, '<span class="keyword">$1</span>');
  html = html.replace(numbers, '<span class="number">$1</span>');
  
  return { __html: html };
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden shadow-xl border border-white/10 dark:border-white/5 bg-[#1e1e1e]">
      <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/5">
        <span className="text-xs font-mono text-zinc-400 font-semibold tracking-wide uppercase">
          {language}
        </span>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-white/10"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="custom-code-block m-0 p-0 bg-transparent">
          <code dangerouslySetInnerHTML={highlightCode(code, language)} />
        </pre>
      </div>
    </div>
  );
}
