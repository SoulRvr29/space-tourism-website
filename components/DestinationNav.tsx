"use client";

import React from "react";
import data from "../app/data.json";

interface LiProps {
  name: string;
  setId: any;
  index: number;
}

const Li: React.FC<LiProps> = ({ index, name, setId }) => {
  const destinations = data.destinations;
  return (
    <div
      className={
        "destination-nav-li hover:cursor-pointer border-b-2 leading-[2] border-opacity-0 border-white hover:border-opacity-50 text-text-light-blue text-base " +
        name +
        (index == 0 ? " first" : "")
      }
      onClick={() => {
        setId(destinations.findIndex((item) => item.name === name));
        document.querySelectorAll(".destination-nav-li").forEach((item) => {
          item.classList.add("border-opacity-0");
          item.classList.remove("first");
        });
        const clickedLi = document.querySelector<Element>(`.${name}`);
        if (clickedLi) clickedLi.classList.remove("border-opacity-0");
      }}
    >
      {name}
    </div>
  );
};

interface DestinationNavProps {
  setId: any;
}

const DestinationNav: React.FC<DestinationNavProps> = ({ setId }) => {
  const destinations = data.destinations;
  return (
    <nav className="font-barlowCondensed tracking-widest ">
      <ul className="uppercase flex gap-12 max-sm:gap-1 max-sm:justify-between text-white max-md:justify-center">
        {destinations.map((item, index) => (
          <li>
            <Li key={item.name} name={item.name} setId={setId} index={index} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default DestinationNav;
