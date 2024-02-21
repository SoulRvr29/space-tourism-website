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
        "hover:cursor-pointer border-b-2 border-transparent hover:border-white hover:border-opacity-50 text-text-light-blue text-base"
      }
      onClick={() => {
        setId(destinations.findIndex((item) => item.name === name));
        console.log(destinations.findIndex((item) => item.name === name));
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
      <ul className="uppercase flex gap-12 text-white">
        {destinations.map((item) => (
          <Li key={item.name} name={item.name} setId={setId} />
        ))}
      </ul>
    </nav>
  );
};
export default DestinationNav;
