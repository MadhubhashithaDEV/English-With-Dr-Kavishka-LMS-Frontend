"use client";

import { useEffect, useRef, useState } from "react";
import {
    Video,
    Laptop,
    Award,
    MessageSquare,
    Sparkles,
    ShieldCheck,
    type LucideIcon,
} from "lucide-react";

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    badge: string;
}

const features: Feature[] = [
    {
        icon: Video,
        title: "Live Interactive Classrooms",
        description:
            "Engage in real-time discussions, spontaneous conversation drills, and receive on-the-spot feedback during live sessions with Dr. Kawishka.",
        badge: "Interactive",
    },
    {
        icon: Laptop,
        title: "Modern LMS Student Portal",
        description:
            "Access HD lesson recordings, self-paced grammar quizzes, lecture slides, and track your progress 24/7 on any device.",
        badge: "24/7 Access",
    },
    {
        icon: Award,
        title: "Proven Cambridge Pedagogy",
        description:
            "Curriculum structured around international CEFR guidelines to guarantee measurable gains in speaking, listening, reading, and writing.",
        badge: "Certified",
    },
    {
        icon: MessageSquare,
        title: "1-on-1 Pronunciation Coaching",
        description:
            "Overcome mother-tongue influence and master native accent modulation with personalized phonetics and speech feedback.",
        badge: "Tailored",
    },
    {
        icon: Sparkles,
        title: "Real-Life Speaking Fluency",
        description:
            "Simulate workplace presentations, international job interviews, and embassy visa questions in a supportive cohort.",
        badge: "Practical",
    },
    {
        icon: ShieldCheck,
        title: "Recognized Certification",
        description:
            "Receive an accredited certificate of completion upon graduation to boost your academic portfolio and LinkedIn CV.",
        badge: "Accredited",
    },
];

export default function FeaturesSection() {
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
        <section
            id="features"
            ref={sectionRef}
            className="py-28 relative overflow-hidden bg-navy-950"
        >
            {/* Background Lighting */}
            <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        Why Choose Our Academy
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                        Everything You Need to Become a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400">
                            Fluent English Speaker
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg">
                        Say goodbye to outdated memorization techniques. Our system gives you hands-on fluency through modern learning technology.
                    </p>
                </div>

                {/* Features 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`glass rounded-2xl p-8 border border-white/10 hover:border-gold-400/40 hover:-translate-y-2 transition-all duration-300 relative group shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${index * 120}ms` }}
                        >
                            {/* Badge & Icon */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center group-hover:bg-gold-400 group-hover:text-navy-950 transition-colors duration-300">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                {feature.badge && (
                                    <span className="text-[11px] font-semibold text-gold-400/90 bg-gold-400/10 px-3 py-1 rounded-full border border-gold-400/20">
                                        {feature.badge}
                                    </span>
                                )}
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
