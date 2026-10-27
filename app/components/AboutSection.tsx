"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, BookOpen, Heart } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "PhD in English Literature",
  },
  {
    icon: Award,
    label: "15+ Years Teaching Experience",
  },
  {
    icon: BookOpen,
    label: "Published Author & Researcher",
  },
  {
    icon: Heart,
    label: "Passionate About Student Success",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Photo / Visual */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-blue-500/20 rounded-3xl blur-3xl" />

              {/* Photo placeholder */}
              <div className="relative glass-strong rounded-3xl aspect-[3/4] flex flex-col items-center justify-center p-8 overflow-hidden">
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />

                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-6 shadow-xl shadow-gold-400/20">
                  <span className="text-navy-950 text-5xl font-bold">DK</span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-1">
                  Dr. Kawishka
                </h3>
                <p className="text-gold-400 font-medium text-sm">
                  English Language Expert
                </p>

                {/* Floating accents */}
                <div className="absolute top-6 left-6 glass rounded-lg p-2 animate-float-slow">
                  <span className="text-xl">🎓</span>
                </div>
                <div
                  className="absolute bottom-6 right-6 glass rounded-lg p-2 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-xl">✨</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              About The Instructor
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
              Meet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">
                Dr. Kawishka
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              With over 15 years of dedicated teaching experience, Dr. Kawishka
              has helped thousands of students achieve their English language
              goals. His unique methodology combines traditional grammar with
              modern conversational techniques.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you&apos;re preparing for IELTS, improving your spoken
              English, or building business communication skills, Dr. Kawishka&apos;s
              personalized approach ensures every student reaches their full
              potential.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 glass rounded-xl p-3"
                  style={{ transitionDelay: `${i * 100 + 400}ms` }}
                >
                  <item.icon className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-gray-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
