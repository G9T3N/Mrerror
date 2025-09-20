import React from "react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="border border-[#abb2bf] p-3 lg:p-4">
    <h4 className="text-white text-sm lg:text-base font-semibold mb-2">
      {title}
    </h4>
    <div className="space-y-1 text-[#abb2bf] text-xs lg:text-sm">
      {skills.map((skill, index) => (
        <div key={index}>{skill}</div>
      ))}
    </div>
  </div>
);

export default SkillCategory;
