"use client";

import { useState, useEffect } from "react";
import { BookOpen, Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { name: "Courses", href: "#courses" },
  { name: "Features", href: "#features" },
  { name: "About Dr. Kawishka", href: "#about" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Impact", href: "#stats" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-navy-950" />
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight">
                English With
              </span>
              <span className="text-gold-400 font-bold text-lg ml-1">
                Dr. Kawishka
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-gold-400 transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium px-4 py-2">
              Log In
            </button>
            <button className="btn-gold px-5 py-2.5 rounded-xl text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-300 text-sm font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-white/10">
                <button className="text-gray-300 hover:text-white text-sm font-medium py-2">
                  Log In
                </button>
                <button className="btn-gold px-5 py-2.5 rounded-xl text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
