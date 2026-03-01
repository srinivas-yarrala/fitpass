"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Bot, Sparkles, Send, Leaf, Drumstick, Utensils, Activity, Target, Wand2, List, RotateCcw, Settings } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/organisms/Header";
import MobileNav from "@/components/organisms/MobileNav";

type Message = {
  id: string;
  author: "bot" | "user";
  text: string;
};

const DietBot = () => {
  const botName = "Coach NutriSpark";
  const [step, setStep] = useState<number>(0);
  const [messages, setMessages] = useState<Message[]>([
    { id: "m1", author: "bot", text: `Hey, I’m ${botName} ✨ I’ll craft a tasty, goal‑based diet plan for you.` },
    { id: "m2", author: "bot", text: "First up — what are your eating habits?" },
  ]);
  const [quickReplies, setQuickReplies] = useState<string[]>(["Vegetarian", "Non‑vegetarian", "Vegan"]);
  const [input, setInput] = useState<string>("");

  const advance = (choice: string) => {
    const nextMessages: Message[] = [];
    if (step === 0) {
      nextMessages.push({ id: crypto.randomUUID(), author: "user", text: choice });
      nextMessages.push({ id: crypto.randomUUID(), author: "bot", text: "Nice! How many meals do you prefer in a day?" });
      setQuickReplies(["2 meals", "3 meals", "4 meals", "5 meals"]);
      setStep(1);
    } else if (step === 1) {
      nextMessages.push({ id: crypto.randomUUID(), author: "user", text: choice });
      nextMessages.push({ id: crypto.randomUUID(), author: "bot", text: "How intense are your workouts weekly?" });
      setQuickReplies(["Light", "Moderate", "Intense"]);
      setStep(2);
    } else if (step === 2) {
      nextMessages.push({ id: crypto.randomUUID(), author: "user", text: choice });
      nextMessages.push({ id: crypto.randomUUID(), author: "bot", text: "What’s your primary goal right now?" });
      setQuickReplies(["Lose fat", "Maintain", "Gain muscle"]);
      setStep(3);
    } else if (step === 3) {
      nextMessages.push({ id: crypto.randomUUID(), author: "user", text: choice });
      nextMessages.push({ id: crypto.randomUUID(), author: "bot", text: "Sweet. I’ll crunch the numbers and prep your macros and a sample day menu." });
      nextMessages.push({ id: crypto.randomUUID(), author: "bot", text: "Ready to see your plan? Tap Generate below." });
      setQuickReplies(["Generate my plan"]);
      setStep(4);
    } else if (step === 4) {
      nextMessages.push({ id: crypto.randomUUID(), author: "user", text: choice });
      nextMessages.push({ id: crypto.randomUUID(), author: "bot", text: "Here’s a starter plan: 40% carbs • 30% protein • 30% fats. Breakfast: oats + fruit + peanut butter. Lunch: bowl with grains, greens, protein. Dinner: veg‑heavy with lean protein. Snacks: yogurt/nuts." });
      nextMessages.push({ id: crypto.randomUUID(), author: "bot", text: "We’ll fine‑tune portions once you add height, weight, and age." });
      setQuickReplies(["Add details", "Start over"]);
      setStep(5);
    } else if (step === 5) {
      if (choice === "Start over") {
        setMessages([
          { id: crypto.randomUUID(), author: "bot", text: `Hey, I’m ${botName} ✨ I’ll craft a tasty, goal‑based diet plan for you.` },
          { id: crypto.randomUUID(), author: "bot", text: "First up — what are your eating habits?" },
        ]);
        setQuickReplies(["Vegetarian", "Non‑vegetarian", "Vegan"]);
        setStep(0);
        return;
      }
      nextMessages.push({ id: crypto.randomUUID(), author: "user", text: choice });
      nextMessages.push({ id: crypto.randomUUID(), author: "bot", text: "Great! I’ll open the detailed form in a later update. For now, we can keep chatting." });
      setQuickReplies(["Change diet type", "Change meals", "Change goal"]);
    }
    setMessages((prev) => [...prev, ...nextMessages]);
  };

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), author: "user", text: input.trim() }]);
    setInput("");
  };

  const iconFor = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("vegetarian") || l.includes("vegan")) return Leaf;
    if (l.includes("non")) return Drumstick;
    if (l.includes("meals")) return Utensils;
    if (l.includes("light") || l.includes("moderate") || l.includes("intense")) return Activity;
    if (l.includes("lose") || l.includes("maintain") || l.includes("gain")) return Target;
    if (l.includes("generate")) return Wand2;
    if (l.includes("add details")) return List;
    if (l.includes("start over")) return RotateCcw;
    if (l.startsWith("change")) return Settings;
    return Sparkles;
  };

  return (
    <div className="min-h-screen bg-background pb-0 md:pb-0">
      <Header />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        {/* background accents */}
        <div className="pointer-events-none absolute -top-10 right-0 translate-x-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 -translate-x-1/4 w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 pt-6 pb-20 md:pb-6 max-w-3xl">
          {/* Chat header strip — stylish */}
          <div className="mb-3 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-md">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-neo-gold/20 text-primary ring-2 ring-primary/30">
                <Bot size={18} />
              </span>
              <span className="font-semibold text-foreground">{botName}</span>
              <Sparkles size={14} className="text-neo-gold" />
            </div>
          </div>

          {/* Chat window: fixed height so bottom stays above nav; messages scroll */}
          <Card className="flex flex-col overflow-hidden border-border bg-card/60 backdrop-blur-md shadow-lg rounded-2xl border max-h-[calc(100vh-14rem)] md:max-h-[calc(100vh-10rem)]">
            {/* Messages — scrollable */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 md:p-5 space-y-3 overscroll-contain">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.author === "bot" ? "justify-start" : "justify-end"}`}>
                  <div
                    className={
                      m.author === "bot"
                        ? "bg-muted/80 text-foreground border border-border/50 max-w-[85%] px-4 py-2.5 rounded-2xl rounded-tl-md shadow-sm"
                        : "bg-primary text-primary-foreground max-w-[85%] px-4 py-2.5 rounded-2xl rounded-tr-md shadow-sm"
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom block: quick replies + input — stays visible above nav */}
            <div className="flex-shrink-0 p-4 pt-0 md:p-5 md:pt-0 space-y-3 border-t border-border/50 bg-background/30">
              {quickReplies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((qr) => {
                    const Icon = iconFor(qr);
                    return (
                      <Button
                        key={qr}
                        size="sm"
                        variant="secondary"
                        className="rounded-full inline-flex items-center gap-1.5 border border-border/50 bg-muted/50 hover:bg-muted hover:border-primary/30 text-foreground"
                        onClick={() => advance(qr)}
                      >
                        <Icon size={14} className="opacity-80" />
                        <span>{qr}</span>
                      </Button>
                    );
                  })}
                </div>
              )}

              <div className="relative">
                <Input
                  placeholder="Type a message…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  className="h-11 pl-4 pr-12 rounded-full bg-background border-border focus-visible:ring-primary/50"
                />
                <button
                  aria-label="Send"
                  onClick={send}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center active:scale-95 hover:opacity-90 transition-opacity"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default DietBot;


