"use client";

import React from "react";
import data from "../app/data.json";

interface LiProps {
  name: string;
  setId: any;
  index: number;
}

const Li: React.FC<LiProps> = ({ index, name, setId }) => {
  const crew = data.crew;
  const nameClass = name.replaceAll(" ", "-");
  return (
    <div
      className={
        "crew-nav-li hover:cursor-pointer hover:opacity-50 h-4 w-4 max-md:h-3 max-md:w-3 bg-white rounded-full opacity-25 " +
        nameClass +
        (index == 0 ? " first" : "")
      }
      onClick={() => {
        setId(crew.findIndex((item) => item.name === name));
        document.querySelectorAll(".crew-nav-li").forEach((item) => {
          item.classList.add("opacity-25");
          item.classList.remove("first");
        });
        const clickedLi = document.querySelector<Element>(`.${nameClass}`);
        if (clickedLi) clickedLi.classList.remove("opacity-25");
      }}
    ></div>
  );
};

interface CrevNavProps {
  setId: any;
}

const DestinationNav: React.FC<CrevNavProps> = ({ setId }) => {
  const crew = data.crew;
  return (
    <nav className="font-barlowCondensed tracking-widest crew-nav">
      <ul className="uppercase flex gap-4 text-white max-md:justify-center">
        {crew.map((item, index) => (
          <li key={item.name}>
            <Li name={item.name} setId={setId} index={index} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default DestinationNav;
