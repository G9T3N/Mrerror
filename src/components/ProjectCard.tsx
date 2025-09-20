import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveLink?: boolean;
  cachedLink?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  liveLink = true,
  cachedLink = false,
}) => (
  <div className="border border-[#abb2bf] bg-[#282c33] hover:border-[#297f29] transition-colors duration-300">
    <img src={image} className="w-full h-48 object-cover" alt={title} />
    <div className="p-4 border-t border-[#abb2bf] space-y-4">
      <h3 className="text-white text-xl lg:text-2xl font-medium">{title}</h3>
      <p className="text-[#abb2bf] text-sm lg:text-base">{description}</p>
      <div className="flex flex-wrap gap-2 lg:gap-4">
        {liveLink && (
          <button className="px-3 py-2 lg:px-4 lg:py-2 border border-[#297f29] text-white text-sm lg:text-base font-medium hover:bg-[#297f29] transition-colors">
            Live &lt;~&gt;
          </button>
        )}
        {cachedLink && (
          <button className="px-3 py-2 lg:px-4 lg:py-2 border border-[#abb2bf] text-[#abb2bf] text-sm lg:text-base font-medium hover:bg-[#abb2bf] hover:text-[#282c33] transition-colors">
            Cached &gt;
          </button>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
