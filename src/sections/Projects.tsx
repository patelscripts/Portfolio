import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "InterView Pilot - AI Interview Prep App",
      description:
        "A platform to help candidates practice interviews with AI-powered feedback, built with a modern full-stack setup and automated deployment pipeline.",
      tech: ["React", "Node.js", "Express", "MongoDB", "GitHub Actions"],
      liveLink: "https://interview-prep-ai-liart.vercel.app/",
      sourceLink: "https://github.com/patelscripts/Interview-Prep-AI",
      image: "AiInterviewApp.png",
    },
    {
      title: "Bloom",
      description:
        "A clean, responsive web application focused on smooth UI interactions and modern design patterns using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      liveLink: "https://bloom-gukt.vercel.app/",
      sourceLink: "https://github.com/patelscripts/Bloom",
      image: "Bloom.png",
    },
    {
  title: "AssetFlow",
  description:
    "A full-stack Enterprise Asset & Resource Management ERP system for tracking, allocating, and booking organizational assets, featuring conflict-aware allocation and time-slot overlap validation for resource bookings.",
  tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  liveLink: "https://ai-assetflow-manager.vercel.app/",
  sourceLink: "https://github.com/patelscripts/ai-assetflow-manager",
  image: "AssetFlow.png",
},
{
      title: "Disease Detection",
      description:
        "A machine learning based application that predicts diseases from input data using trained classification models.",
      tech: ["Python", "Scikit-learn","Pandas", "NumPy", "Matplotlib"],
      liveLink: "#",
      sourceLink: "https://github.com/patelscripts/Disease-Detection-App",
      image: "/projects/disease-detection.png",
    }, 
  ];

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-portfolio-dark-text tracking-tight mb-2">
          Projects
        </h2>
        <div className="w-28 h-1 bg-portfolio-coral mx-auto rounded-full" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}