import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const predefinedQA: Record<string, string> = {
  "What services do you offer?":
    "We provide Oracle ERP, Cloud Operations, SAP & SuccessFactors, DevOps & Platform Engineering, Salesforce Consulting, and Data Science & BI solutions.",
  "Tell me about Oracle Consulting":
    "We help businesses implement, optimize, and manage Oracle ERP systems to improve efficiency and scalability.",
  "What is DevOps & Platform Engineering?":
    "We streamline development and deployment using CI/CD, automation, and scalable platform solutions.",
  "Do you provide Cloud services?":
    "We offer cloud migration, infrastructure management, and optimization across modern cloud platforms.",
  "How can I contact you?":
    "You can reach us via the Contact page or submit a request through our website.",
};

const questions = Object.keys(predefinedQA);

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const addResponse = (question: string) => {
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setTyping(true);
    const answer =
      predefinedQA[question] ||
      "Thanks for your question! Please visit our Contact page or explore our Services for more information.";
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
    }, 800);
  };

  const handleSend = () => {
    const q = input.trim();
    if (!q) return;
    setInput("");
    addResponse(q);
  };

  const unusedQuestions = questions.filter(
    (q) => !messages.some((m) => m.role === "user" && m.content === q)
  );

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-110 transition-all duration-300 border border-primary/30"
          aria-label="Open AI Assistant"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[min(360px,calc(100%-2rem))] h-[520px] max-h-[calc(100dvh-4rem)] rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl shadow-primary/10 flex flex-col animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Bot size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask us anything</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
            >
              <X size={16} className="text-muted-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {/* Welcome */}
            {messages.length === 0 && (
              <div className="space-y-3 animate-fade-in">
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} className="text-primary" />
                  </div>
                  <div className="bg-muted/50 border border-border/30 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-foreground max-w-[85%]">
                    Hi! 👋 I'm the Sirius7 AI Assistant. How can I help you today?
                  </div>
                </div>
                <div className="pl-9 space-y-2">
                  <p className="text-xs text-muted-foreground font-medium">Quick questions:</p>
                  {questions.map((q) => (
                    <button
                      key={q}
                      onClick={() => addResponse(q)}
                      className="block w-full text-left text-xs px-3 py-2 rounded-lg border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn("flex gap-2 animate-fade-in", msg.role === "user" && "justify-end")}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} className="text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "rounded-2xl px-4 py-2.5 text-sm max-w-[80%]",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted/50 border border-border/30 text-foreground rounded-tl-sm"
                  )}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-muted border border-border/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User size={14} className="text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex gap-2 animate-fade-in">
                <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-primary" />
                </div>
                <div className="bg-muted/50 border border-border/30 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Show remaining quick questions */}
            {messages.length > 0 && !typing && unusedQuestions.length > 0 && (
              <div className="pl-9 space-y-1.5 pt-1">
                <p className="text-xs text-muted-foreground">More questions:</p>
                {unusedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => addResponse(q)}
                    className="block w-full text-left text-xs px-3 py-2 rounded-lg border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-border/50 bg-background/80">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask something else…"
                className="flex-1 h-10 rounded-xl border border-border/50 bg-muted/30 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-40 transition-all"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
