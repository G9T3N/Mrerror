import React from "react";

interface ContactMethodProps {
  icon: string;
  text: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, text }) => (
  <div className="flex items-center gap-[5px]">
    <div className="w-6 h-6 lg:w-8 lg:h-8 relative flex-shrink-0">
      <img src={icon} className="w-full h-full object-contain" alt="" />
    </div>
    <span className="text-[#abb2bf] text-sm lg:text-base break-all">
      {text}
    </span>
  </div>
);

export default ContactMethod;
