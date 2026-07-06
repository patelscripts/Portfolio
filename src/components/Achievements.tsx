import { Trophy, Award, Code2 } from "lucide-react";

export default function Achievements() {
  const stats = [
    {
      icon: <Code2 size={22} />,
      platform: "LeetCode",
      stat: "300+ Problems Solved",
      link: "https://leetcode.com/u/navneet_pat325/",
    },
    {
      icon: <Award size={22} />,
      platform: "GeeksforGeeks",
      stat: "Active Problem Solver",
      link: "https://www.geeksforgeeks.org/profile/navneetpmudm?tab=activity",
    },
    {
      icon: <Trophy size={22} />,
      platform: "CodeClash Final Round",
      stat: "Rank 629",
      link: "https://unstop.com/certificate-preview/a2b619d9-6dbe-46f9-ae08-b514886ff74d",
    },
  ];

  return (
    <section id="achievements" className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-portfolio-dark-text tracking-tight mb-2">
          Achievements
        </h2>
        <div className="w-48 h-1 bg-portfolio-coral mx-auto rounded-full" />
        <p className="text-portfolio-dark-text/60 mt-4 max-w-md mx-auto">
          A glimpse into my competitive programming journey and milestones.
        </p>
      </div>

      {/* Text-based Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
        {stats.map((item) => (
          <a
            key={item.platform}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-portfolio-coral/10 text-portfolio-coral mb-4">
              {item.icon}
            </div>
            <h3 className="text-sm font-semibold text-portfolio-dark-text/60 uppercase tracking-wide mb-2">
              {item.platform}
            </h3>
            <p className="text-lg font-bold text-portfolio-dark-text mb-1">
              {item.stat}
            </p>
            <span className="text-xs font-medium text-portfolio-coral hover:underline mt-1">
              View Profile →
            </span>
          </a>
        ))}
      </div>

      {/* Certificate — Big Image */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h3 className="text-lg font-bold text-portfolio-dark-text mb-2">
          CodeClash — Final Coding Round
        </h3>
        <p className="text-sm text-portfolio-dark-text/70 mb-6 max-w-xl mx-auto">
          Secured <span className="font-semibold text-portfolio-coral">Rank 629</span> in the CodeSprint Final Coding Round, organized by the Let's Code Community.
        </p>
        <a
          href="/certificates/codeclash-certificate.png"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden border border-white/40 shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src="Codeclash.png"
            alt="CodeClash Certificate"
            className="w-full h-[400px] object-cover bg-white/60"
          />
        </a>
      </div>

      {/* LeetCode — Big Live Stats */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-lg font-bold text-portfolio-dark-text mb-4">
          LeetCode Stats
        </h3>
        <img
          src="https://leetcard.jacoblin.cool/navneet_pat325?theme=light&font=baloo2&ext=heatmap"
          alt="LeetCode Stats"
          className="w-full h-auto rounded-2xl border border-white/40 shadow-md"
        />
      </div>

    </section>
  );
}