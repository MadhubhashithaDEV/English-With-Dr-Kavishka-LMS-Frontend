import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Courses: [
    "Spoken English",
    "IELTS Preparation",
    "Business English",
    "Grammar Fundamentals",
  ],
  Company: ["About Us", "Our Team", "Careers", "Blog"],
  Support: ["Help Center", "Contact Us", "FAQs", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-8 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-navy-950" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">
                  English With
                </span>
                <span className="text-gold-400 font-bold text-lg ml-1">
                  Dr. Kawishka
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Empowering students worldwide to master the English language
              through expert guidance, interactive learning, and proven
              methodology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-gold-400" />
                <span>contact@drkawishka.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-gold-400" />
                <span>+94 77 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} English With Dr. Kawishka. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gold-400 transition-colors text-sm"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gold-400 transition-colors text-sm"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gold-400 transition-colors text-sm"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
