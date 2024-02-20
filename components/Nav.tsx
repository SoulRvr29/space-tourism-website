"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LiProps {
  id: string;
  name: string;
  link: string;
}

const Li: React.FC<LiProps> = ({ id, name, link }) => {
  const pathname = usePathname();
  return (
    <li
      className={
        "hover:cursor-pointer border-b-2 border-transparent py-6 hover:border-white hover:border-opacity-50" +
        (pathname === link ? " active" : "")
      }
    >
      <Link href={link}>
        <span className="font-bold mr-2">{id}</span>
        {name}
      </Link>
    </li>
  );
};

export default function Nav() {
  return (
    <nav className="bg-white bg-opacity-10 px-14 backdrop-blur-md font-barlowCondensed tracking-widest">
      <ul className="uppercase flex gap-12 text-white">
        <Li id="00" name="home" link="/" />
        <Li id="01" name="destination" link="/destination" />
        <Li id="02" name="crew" link="/crew" />
        <Li id="03" name="technology" link="/technology" />
      </ul>
    </nav>
  );
}
