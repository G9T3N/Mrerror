import React from "react";

const DotPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`grid grid-cols-5 gap-3 lg:gap-5 ${className}`}>
    {Array.from({ length: 25 }).map((_, i) => (
      <div key={i} className="w-1 h-1 bg-[#abb2bf] rounded-full" />
    ))}
  </div>
);

export default DotPattern;
