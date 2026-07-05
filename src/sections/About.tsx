export default function About() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-portfolio-dark-text tracking-tight mb-2">
          About Me
        </h2>
        <div className="w-34 h-1 bg-portfolio-coral mx-auto rounded-full" />
      </div>

      {/* About Content Layout */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch gap-10">

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/Navneet.png"
            alt="Navneet"
            className="h-64 md:h-full w-auto object-contain"
          />
        </div>

       {/* Text */}
<div className="space-y-6 text-portfolio-dark-text/90 leading-relaxed text-base md:text-lg">

  <p>
    Hi, I'm <span className="font-bold text-portfolio-dark-text">Navneet</span>, a Computer Science undergraduate and a <span className="text-portfolio-coral font-semibold">Full-Stack Developer</span> who enjoys building things end-to-end — from designing clean UIs to architecting the backend that powers them.
  </p>

  <p>
    I actively contribute to open source at <span className="text-portfolio-mint font-semibold">OpenScienceLabs</span>, where I've worked on their MkDocs-based website — fixing UI bugs, improving responsive layouts, resolving CI/pre-commit issues, and collaborating through Git workflows in a real-world open source environment.
  </p>

  <p>
    My core stack revolves around <span className="text-portfolio-coral font-semibold">React</span>, <span className="text-portfolio-mint font-semibold">Node.js</span>, and <span className="text-portfolio-coral font-semibold">Express</span>, and I'm currently expanding into <span className="text-portfolio-mint font-semibold">AI integration</span> — exploring how intelligent systems can be woven into practical, real-world applications.
  </p>

</div>
      </div>
    </section>
  );
}