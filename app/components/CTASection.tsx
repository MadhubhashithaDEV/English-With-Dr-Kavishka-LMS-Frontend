"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
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
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 via-navy-800 to-blue-500/20" />
          <div className="absolute inset-0 glass" />

          {/* Decorative orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 text-sm font-medium">
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Start Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 animate-gradient">
                English Journey?
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Join thousands of students who have already transformed their
              English skills. Your first lesson is completely free — no credit
              card required.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn-gold px-10 py-4 rounded-2xl text-base flex items-center gap-2 group">
                <span>Enroll Now — It&apos;s Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline px-10 py-4 rounded-2xl text-base">
                Talk to Dr. Kawishka
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
