import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveLink: string;
  sourceLink: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  liveLink,
  sourceLink,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      
      {/* Image */}
      <div className="w-full h-44 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-portfolio-dark-text mb-2">
          {title}
        </h3>

        <p className="text-sm text-portfolio-dark-text/70 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-portfolio-coral/10 text-portfolio-coral font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-portfolio-coral hover:bg-portfolio-coral/90 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>

          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-portfolio-dark-text/15 hover:bg-gray-50 text-portfolio-dark-text text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
          >
            <FaGithub size={16} />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}