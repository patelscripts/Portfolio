import Navneet_Patel_Resume from "../assets/Navneet_Patel_Resume.pdf";
export default function Navbar() {
  return (
    <nav className="w-full max-w-6xl mx-auto p-6 flex justify-between items-center relative z-10">
      {/* Logo */}
      <div className="text-xl font-bold text-portfolio-dark-text tracking-tight">
        Navneet<span className="text-portfolio-coral">.dev</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 font-medium text-portfolio-dark-text/80">
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

        {/* Resume Button */}
        <a
          href={Navneet_Patel_Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-portfolio-coral hover:bg-portfolio-coral/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button (Abhi ke liye minimalist wrapper) */}
      <div className="md:hidden">
        <button className="text-portfolio-dark-text hover:text-portfolio-coral p-1 transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}