import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
//import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-8 relative z-10">
      <div className="border-t border-portfolio-dark-text/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Logo + Copyright */}
        <div className="text-center md:text-left">
          <div className="text-lg font-bold text-portfolio-dark-text tracking-tight mb-1">
            Navneet<span className="text-portfolio-coral">.dev</span>
          </div>
          <p className="text-xs text-portfolio-dark-text/50">
            © {currentYear} Navneet Patel. All rights reserved.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex gap-6 text-sm font-medium text-portfolio-dark-text/70">
          <a href="#about" className="hover:text-portfolio-coral transition-colors duration-200">
            About
          </a>
          <a href="#skills" className="hover:text-portfolio-coral transition-colors duration-200">
            Skills
          </a>
          <a href="#projects" className="hover:text-portfolio-coral transition-colors duration-200">
            Projects
          </a>
          <a href="#contact" className="hover:text-portfolio-coral transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/patelscripts"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-portfolio-coral/10 text-portfolio-dark-text hover:bg-portfolio-coral hover:text-white transition-colors duration-200"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-portfolio-coral/10 text-portfolio-dark-text hover:bg-portfolio-coral hover:text-white transition-colors duration-200"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="mailto:navneet@example.com"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-portfolio-coral/10 text-portfolio-dark-text hover:bg-portfolio-coral hover:text-white transition-colors duration-200"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <p className="text-center text-xs text-portfolio-dark-text/40 mt-6 flex items-center justify-center gap-1">
        Built with <Heart size={12} className="fill-portfolio-coral text-portfolio-coral" /> using React & TypeScript
      </p>
    </footer>
  );
}