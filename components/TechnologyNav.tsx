"use client";

import React from "react";
import data from "../app/data.json";

interface LiProps {
  name: string;
  setId: any;
  index: number;
}

const Li: React.FC<LiProps> = ({ index, name, setId }) => {
  const technology = data.technology;
  const nameClass = name.replaceAll(" ", "-");
  return (
    <div
      className={
        "technology-nav-li hover:cursor-pointer hover:opacity-75 border w-20 max-md:w-14 max-md:h-14 h-20 rounded-full grid place-content-center text-3xl max-md:text-2xl max-[375px]:w-10 max-[375px]:h-10 max-[375px]:text-sm font-bellefair " +
        nameClass +
        (index == 0 ? " first-tech-nav" : "")
      }
      onClick={() => {
        setId(technology.findIndex((item) => item.name === name));
        document.querySelectorAll(".technology-nav-li").forEach((item) => {
          item.classList.remove("bg-white");
          item.classList.remove("text-black");
          item.classList.remove("first-tech-nav");
        });
        const clickedLi = document.querySelector<Element>(`.${nameClass}`);
        if (clickedLi) {
          clickedLi.classList.add("bg-white");
          clickedLi.classList.add("text-black");
        }
      }}
    >
      {index + 1}
    </div>
  );
};

interface TechnologyNavProps {
  setId: any;
}

const TechnologyNav: React.FC<TechnologyNavProps> = ({ setId }) => {
  const technology = data.technology;
  return (
    <nav className="font-barlowCondensed tracking-widest technology-nav">
      <ul className="uppercase flex flex-col gap-8 text-white max-lg:flex-row">
        {technology.map((item, index) => (
          <li>
            <Li key={item.name} name={item.name} setId={setId} index={index} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default TechnologyNav;
