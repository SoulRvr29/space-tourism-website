import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
  return (
    <h1 className="mb-4 font-barlowCondensed tracking-widest max-md:text-xl max-[375px]:text-base">
      <span className="font-bold opacity-30 mr-8">{number}</span>
      {title}
    </h1>
  );
};

export default SectionHeader;
