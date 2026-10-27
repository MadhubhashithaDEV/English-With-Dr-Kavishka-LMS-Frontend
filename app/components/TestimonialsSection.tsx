"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amara Perera",
    role: "University Student",
    content:
      "Dr. Kawishka's teaching style is incredible. I went from struggling with basic sentences to confidently presenting in English within 3 months!",
    rating: 5,
    avatarGradient: "from-pink-400 to-rose-600",
  },
  {
    name: "Kasun Fernando",
    role: "Software Engineer",
    content:
      "The Business English course transformed my career. I now lead client meetings and write professional emails with total confidence.",
    rating: 5,
    avatarGradient: "from-blue-400 to-indigo-600",
  },
  {
    name: "Dilini Rajapaksa",
    role: "IELTS Student",
    content:
      "I scored an 8.0 on my IELTS exam after completing Dr. Kawishka's preparation course. The structured approach made all the difference.",
    rating: 5,
    avatarGradient: "from-emerald-400 to-teal-600",
  },
  {
    name: "Nuwan Silva",
    role: "Business Owner",
    content:
      "As a business owner dealing with international clients, this course was exactly what I needed. Highly practical and well-organized.",
    rating: 5,
    avatarGradient: "from-amber-400 to-orange-600",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">
              Students Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from our students who
            have transformed their English skills.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group glass rounded-2xl p-7 hover:bg-white/[0.06] transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gold-400/30 mb-4" />

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 text-base">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gold-400 fill-gold-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
