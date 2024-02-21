"use client";

import React from "react";
import data from "../app/data.json";

interface LiProps {
  name: string;
  setId: any;
}

const Li: React.FC<LiProps> = ({ name, setId }) => {
  const destinations = data.destinations;
  return (
    <li
      className={
        "destination-nav-li hover:cursor-pointer border-b-2 border-opacity-0 border-white hover:border-opacity-50 text-text-light-blue text-base " +
        name
      }
      onClick={() => {
        setId(destinations.findIndex((item) => item.name === name));
        document.querySelectorAll(".destination-nav-li").forEach((item) => {
          item.classList.add("border-opacity-0");
        });
        const clickedLi = document.querySelector<Element>(`.${name}`);
        if (clickedLi) clickedLi.classList.remove("border-opacity-0");
      }}
    >
      {name}
    </li>
  );
};

interface DestinationNavProps {
  setId: any;
}

const DestinationNav: React.FC<DestinationNavProps> = ({ setId }) => {
  const destinations = data.destinations;
  return (
    <nav className="font-barlowCondensed tracking-widest ">
      <ul className="uppercase flex gap-12 text-white max-md:justify-center">
        {destinations.map((item) => (
          <Li key={item.name} name={item.name} setId={setId} />
        ))}
      </ul>
    </nav>
  );
};
export default DestinationNav;
