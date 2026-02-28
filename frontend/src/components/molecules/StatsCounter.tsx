"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, label: "Partner gyms" },
  { value: 10000, label: "Check‑ins" },
];

export const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValues, setDisplayValues] = useState([0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2500;
    const steps = 60;
    const stepDuration = duration / steps;
    
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setDisplayValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.floor(current);
          return newValues;
        });
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4 font-mono">
                {isVisible ? displayValues[index].toLocaleString() : "0"}
              </div>
              <div className="text-lg text-muted-foreground font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

