"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Users, Star, ArrowRight, BookOpen, Check } from "lucide-react";

const courses = [
    {
        title: "Spoken English Mastery",
        level: "Beginner → Intermediate",
        description:
            "Gain effortless fluency in everyday conversations, social etiquette, and small talk without grammatical hesitation.",
        duration: "12 Weeks",
        students: "1,200+ Enrolled",
        rating: "4.9",
        tag: "Most Popular",
        tagColor: "bg-gold-400 text-navy-950",
        features: [
            "Daily Speaking Drills & Accent Training",
            "Vocabulary Builder for Real Scenarios",
            "Live Weekly Role-Play Simulations",
            "Direct WhatsApp Feedback Group",
        ],
    },
    {
        title: "IELTS Academic & General (Band 7.5+)",
        level: "Intermediate → Advanced",
        description:
            "A laser-focused training program covering Listening, Reading, Writing, and Speaking to hit your desired band score in one go.",
        duration: "8 Weeks",
        students: "850+ Enrolled",
        rating: "5.0",
        tag: "Exam Prep",
        tagColor: "bg-blue-500 text-white",
        features: [
            "10 Full Mock Exams with Band Scoring",
            "Essay Structure & Task 1/2 Templates",
            "Live 1-on-1 Speaking Mock Interviews",
            "Secret Examiner Evaluation Secrets",
        ],
    },
    {
        title: "Corporate Business English",
        level: "Working Professionals",
        description:
            "Command respect in executive boardrooms, international client calls, formal business email writing, and project pitches.",
        duration: "10 Weeks",
        students: "500+ Enrolled",
        rating: "4.9",
        tag: "Career Focused",
        tagColor: "bg-emerald-500 text-white",
        features: [
            "Executive Presentation Techniques",
            "High-Impact Corporate Email Writing",
            "Negotiation & Cross-Cultural Dialogue",
            "Professional Resume & Interview Prep",
        ],
    },
];

export default function CoursesSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="courses" ref={sectionRef} className="py-28 relative overflow-hidden bg-navy-900/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <BookOpen className="w-3.5 h-3.5" />
                        Curated Programs
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        Find the Perfect Course for <span className="gradient-text">Your Goal</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg">
                        Choose from carefully engineered curricula tailored to take you from your current level to total mastery.
                    </p>
                </div>

                {/* Courses 3-Card Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={course.title}
                            className={`glass-strong rounded-3xl p-8 border border-white/10 hover:border-gold-400/50 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 relative group shadow-2xl ${isVisible ? "animate-slide-up" : "opacity-0"
                                }`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div>
                                {/* Header Tag & Level */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${course.tagColor}`}>
                                        {course.tag}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        {course.level}
                                    </span>
                                </div>

                                {/* Course Title & Summary */}
                                <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    {course.description}
                                </p>

                                {/* Meta details */}
                                <div className="flex items-center gap-4 py-4 border-y border-white/10 text-xs text-gray-400 mb-6">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-gold-400" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Users className="w-4 h-4 text-gold-400" />
                                        <span>{course.students}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                                        <span>{course.rating}</span>
                                    </div>
                                </div>

                                {/* Feature Checklist */}
                                <div className="space-y-3 mb-8">
                                    {course.features.map((feat) => (
                                        <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                                            <div className="w-4 h-4 rounded-full bg-gold-400/20 flex items-center justify-center shrink-0">
                                                <Check className="w-2.5 h-2.5 text-gold-400 font-bold" />
                                            </div>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Enroll Button */}
                            <a
                                href="#contact"
                                className="btn-gold w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-gold-400/10 group-hover:shadow-gold-400/30 transition-all"
                            >
                                <span>Enroll in Course</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
