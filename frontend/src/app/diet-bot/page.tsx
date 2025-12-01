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
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <div className="relative min-h-screen bg-background pb-24 overflow-x-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute -top-10 right-0 translate-x-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -translate-x-1/4 w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-10 max-w-3xl">
        {/* Chat header strip centered */}
        <div className="mb-4 text-center">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
              <Bot size={16} />
            </span>
            <div className="font-semibold">{botName}</div>
            <Sparkles size={14} className="text-yellow-400" />
          </div>
        </div>

        <Card className="p-4 md:p-6 relative">
          {/* Messages */}
          <div className="space-y-3">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.author === "bot" ? "justify-start" : "justify-end"}`}>
                <div className={`${m.author === "bot" ? "bg-secondary text-foreground" : "bg-primary text-primary-foreground"} max-w-[80%] px-3 py-2 rounded-2xl ${m.author === "bot" ? "rounded-tl-sm" : "rounded-tr-sm"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          {quickReplies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {quickReplies.map((qr) => {
                const Icon = iconFor(qr);
                return (
                  <Button key={qr} size="sm" variant="secondary" className="rounded-full inline-flex items-center gap-1.5" onClick={() => advance(qr)}>
                    <Icon size={14} />
                    <span>{qr}</span>
                  </Button>
                );
              })}
            </div>
          )}

          {/* Input */}
          <div className="mt-4 relative">
            <Input
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              className="h-12 pl-4 pr-12 rounded-full bg-background/60 backdrop-blur-md border-border"
            />
            <button
              aria-label="Send"
              onClick={send}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center active:scale-95"
            >
              <Send size={16} />
            </button>
          </div>
        </Card>
      </div>
      <MobileNav />
    </div>
  );
};

export default DietBot;


