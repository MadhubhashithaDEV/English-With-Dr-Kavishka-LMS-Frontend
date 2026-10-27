"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2500, suffix: "+", label: "Happy Students", color: "text-gold-400" },
  { value: 50, suffix: "+", label: "Expert Courses", color: "text-blue-400" },
  { value: 15, suffix: "+", label: "Years Experience", color: "text-emerald-400" },
  { value: 98, suffix: "%", label: "Success Rate", color: "text-purple-400" },
];

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-800/50 to-navy-900/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-strong rounded-3xl p-10 sm:p-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className={`text-4xl sm:text-5xl font-bold ${stat.color} mb-2`}>
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
