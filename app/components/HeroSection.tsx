"use client";

import { useEffect, useState } from "react";
import {
    Sparkles,
    BookOpen,
    ArrowRight,
    Play,
    Star,
    Users,
    Award,
    CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-navy-950">
            {/* Dynamic Background Glowing Blobs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

            {/* Decorative Grid Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Heading & Value Proposition */}
                    <div className="lg:col-span-7 text-center lg:text-left">

                        {/* Top Pill Tag */}
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-400/30 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-8 shadow-lg shadow-gold-400/10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                        >
                            <Sparkles className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: "6s" }} />
                            Sri Lanka's Premier English Academy
                        </div>

                        {/* Main Headline */}
                        <h1
                            className={`text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                        >
                            Master Fluent English with Confidence Under{" "}
                            <span className="gradient-text block mt-1">Dr. Kawishka</span>
                        </h1>

                        {/* Subtitle */}
                        <p
                            className={`text-gray-300 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-normal transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                        >
                            Step into an immersive learning management experience designed for ambitious students and professionals. Break language barriers with personalized coaching, structured modules, and real-time speaking practice.
                        </p>

                        {/* Call To Actions */}
                        <div
                            className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                        >
                            <a
                                href="#courses"
                                className="btn-gold w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 shadow-xl shadow-gold-400/20 hover:scale-105 active:scale-95 transition-all"
                            >
                                <span>Explore Courses</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            <a
                                href="#about"
                                className="glass hover:bg-white/10 w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-white border border-white/15 flex items-center justify-center gap-3 transition-all"
                            >
                                <div className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400">
                                    <Play className="w-3.5 h-3.5 fill-gold-400 ml-0.5" />
                                </div>
                                <span>Watch Introduction</span>
                            </a>
                        </div>

                        {/* Trust Points */}
                        <div
                            className={`flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-gray-400 transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                                <span>Live Interactive Classes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                                <span>Personalized Speaking Drills</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                                <span>IELTS & Exam Preparation</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Hero Visual Card */}
                    <div
                        className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                    >
                        <div className="relative mx-auto max-w-md lg:max-w-none">

                            {/* Outer Glow Halo */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-400 to-blue-500 rounded-3xl blur-xl opacity-40 animate-pulse-glow" />

                            {/* Main Card Container */}
                            <div className="relative glass-strong rounded-3xl p-4 sm:p-5 border border-white/15 shadow-2xl overflow-hidden">
                                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-navy-900">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                                        alt="Dr. Kawishka - English Teacher & Mentor"
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

                                    {/* Instructor Title Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                                            Lead Instructor & Linguist
                                        </p>
                                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                                            Dr. Kawishka
                                        </h3>
                                    </div>
                                </div>

                                {/* Floating Student Rating Badge */}
                                <div className="absolute top-8 left-8 glass-strong rounded-2xl p-3 border border-white/20 shadow-xl flex items-center gap-3 animate-float">
                                    <div className="w-10 h-10 rounded-xl bg-gold-400/20 flex items-center justify-center text-gold-400">
                                        <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-white font-bold text-sm">4.9 / 5.0</span>
                                            <span className="text-gold-400 text-xs">★</span>
                                        </div>
                                        <p className="text-gray-400 text-[11px]">2,500+ Student Reviews</p>
                                    </div>
                                </div>

                                {/* Floating Community Pill */}
                                <div className="absolute bottom-16 right-8 glass-strong rounded-2xl p-3 border border-white/20 shadow-xl flex items-center gap-3 animate-float-slow">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-white font-bold text-sm block">100% Pass Rate</span>
                                        <span className="text-gray-400 text-[11px]">In IELTS & Spoken Exams</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
