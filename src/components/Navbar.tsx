import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 w-full mx-auto p-4 flex justify-between items-center relative z-50 bg-white/70 backdrop-blur-md">
      {/* Logo */}
      <div className="text-xl font-bold text-portfolio-dark-text tracking-tight">
        Navneet<span className="text-portfolio-coral">.dev</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 font-medium text-portfolio-dark-text/80">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-portfolio-coral transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-portfolio-coral hover:bg-portfolio-coral/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-portfolio-dark-text hover:text-portfolio-coral p-1 transition-colors cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-portfolio-dark-text/10 flex flex-col items-center gap-5 py-6 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-portfolio-dark-text font-medium hover:text-portfolio-coral transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-portfolio-coral hover:bg-portfolio-coral/90 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}