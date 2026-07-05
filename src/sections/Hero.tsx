export default function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto relative z-10 min-h-[calc(100vh-80px)]">
      {/* Status Badge */}
      <span className="bg-portfolio-coral/10 text-portfolio-coral font-semibold tracking-wider uppercase text-xs px-4 py-1.5 rounded-full mb-4 shadow-sm border border-portfolio-coral/20 animate-fade-in">
        Available for Internships
      </span>
      
      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-portfolio-dark-text leading-tight mb-6 tracking-tight">
  <span className="text-portfolio-coral">Navneet Patel</span> <br />
  Full-Stack Developer building with <span className="text-portfolio-mint">React</span> & <span className="text-portfolio-coral">Node.js</span>
</h1>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-portfolio-dark-text/70 max-w-xl mb-8 leading-relaxed">
        Frontend developer specializing in creating clean, responsive, and highly interactive user interfaces.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a 
          href="#projects" 
          className="bg-portfolio-coral hover:bg-portfolio-coral/90 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-portfolio-coral/20 transition-all transform hover:-translate-y-0.5 text-center"
        >
          View My Work
        </a>
        <a 
          href="#contact" 
          className="bg-white/80 hover:bg-white text-portfolio-dark-text font-semibold px-8 py-3.5 rounded-full border border-portfolio-dark-text/10 shadow-sm backdrop-blur-sm transition-all transform hover:-translate-y-0.5 text-center"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}