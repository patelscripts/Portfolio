export default function Skills() {
  const frontendSkills = [
    { name: "React", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 88 },
    { name: "HTML5 & CSS3", level: 92 },
  ];
  const doubleFrontend = [...frontendSkills, ...frontendSkills];

  const otherSkills = [
    { name: "Git & GitHub", level: 80 },
    { name: "Java", level: 70 },
    { name: "Data Structures", level: 75 },
    { name: "REST APIs", level: 82 },
    { name: "Node.js", level: 78 },
    { name: "SQL", level: 70 },
    { name: "Python", level: 65 },
    { name: "Docker", level: 60 },
    { name: "Linux", level: 68 },
    { name: "CI/CD", level: 55 },
  ];
  const doubleOther = [...otherSkills, ...otherSkills];

  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-portfolio-dark-text tracking-tight mb-2">
          My Skills
        </h2>
        <div className="w-30 h-1 bg-portfolio-coral mx-auto rounded-full" />
      </div>

      {/* Content wrapper (no card background now) */}
      <div className="max-w-3xl mx-auto overflow-hidden">

        {/* 1. ROW ONE: Left to Right Scroll */}
        <h3 className="text-sm font-semibold text-portfolio-dark-text/60 uppercase tracking-wider mb-4 px-2">
          Frontend Stack
        </h3>
        <div className="w-full overflow-hidden mb-10 mask-gradient">
          <div className="flex gap-4 w-max animate-scroll-left hover:[animation-play-state:paused]">
            {doubleFrontend.map((skill, index) => (
              <div
                key={`front-${index}`}
                className="relative overflow-hidden bg-white/80 text-portfolio-dark-text border border-portfolio-dark-text/10 px-5 py-2.5 rounded-xl text-sm font-medium shadow-2xs whitespace-nowrap group cursor-pointer"
              >
                <div
                  className="absolute inset-y-0 left-0 bg-portfolio-coral/25 transition-all duration-700 ease-out group-hover:w-full"
                  style={{ width: "0%" }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  {skill.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 text-portfolio-coral font-semibold">
                    {skill.level}%
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. ROW TWO: Right to Left Scroll */}
        <h3 className="text-sm font-semibold text-portfolio-dark-text/60 uppercase tracking-wider mb-4 px-2">
          Tools & Core
        </h3>
        <div className="w-full overflow-hidden mask-gradient">
          <div className="flex gap-4 w-max animate-scroll-right hover:[animation-play-state:paused]">
            {doubleOther.map((skill, index) => (
              <div
                key={`other-${index}`}
                className="relative overflow-hidden bg-white/80 text-portfolio-dark-text border border-portfolio-dark-text/10 px-5 py-2.5 rounded-xl text-sm font-medium shadow-2xs whitespace-nowrap group cursor-pointer"
              >
                <div
                  className="absolute inset-y-0 left-0 bg-portfolio-coral/25 transition-all duration-700 ease-out group-hover:w-full"
                  style={{ width: "0%" }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  {skill.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 text-portfolio-coral font-semibold">
                    {skill.level}%
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}