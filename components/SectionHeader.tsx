import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
  return (
    <h1 className="mb-4 font-barlowCondensed tracking-widest max-md:text-xl max-[375px]:text-base max-[375px]:mx-auto">
      <span className="font-bold opacity-30 mr-8 max-lg:mr-4 max-sm:mr-2">
        {number}
      </span>
      {title}
    </h1>
  );
};

export default SectionHeader;
