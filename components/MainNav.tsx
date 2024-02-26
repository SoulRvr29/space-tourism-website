"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

interface LiProps {
  id: string;
  name: string;
  link: string;
  setMenuOpen: any;
}

const Li: React.FC<LiProps> = ({ id, name, link, setMenuOpen }) => {
  const pathname = usePathname();
  return (
    <Link href={link} onClick={() => setMenuOpen(false)}>
      <motion.li
        transition={{ duration: 0.2 }}
        whileHover={{
          textShadow: "0 0 10px rgba(200,200,200,1)",
          color: "rgb(255,255,220)",
        }}
        className={
          "hover:cursor-pointer border-b-[3px] max-sm:border-b-0 max-sm:border-r-[3px] border-transparent py-8 max-sm:py-0 hover:border-white hover:border-opacity-50 max-md:text-sm " +
          (pathname === link ? " active" : "")
        }
      >
        <span className="font-bold mr-2 max-md:hidden max-sm:inline">{id}</span>
        {name}
      </motion.li>
    </Link>
  );
};

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav
      className="font-barlowCondensed tracking-widest"
      initial={{ scaleY: 0.01 }}
      animate={{ scaleY: 1 }}
      // transition={{ duration: 0.25 }}
    >
      {menuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          className="absolute top-0 right-0 mt-8 mr-6 hidden max-sm:block z-40 max-sm:mt-11"
          onClick={() => setMenuOpen(false)}
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="21"
          className="absolute top-0 right-0 mt-8 mr-6 hidden max-sm:block z-40 max-sm:mt-11"
          onClick={() => setMenuOpen(true)}
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      )}

      <ul
        className={
          "uppercase flex max-sm:flex-col gap-12 max-md:gap-8 max-sm:gap-8 text-white text-base px-[clamp(20px,7vw,100px)] w-full h-full max-sm:fixed max-sm:top-0 max-sm:right-0 max-md:-30 max-sm:w-[70vw] max-sm:h-screen max-sm:py-20 bg-white bg-opacity-10 backdrop-blur-md " +
          (menuOpen ? "nav-show" : "nav-hide")
        }
      >
        <Li id="00" name="home" link="/" setMenuOpen={setMenuOpen} />
        <Li
          id="01"
          name="destination"
          link="/destination"
          setMenuOpen={setMenuOpen}
        />
        <Li id="02" name="crew" link="/crew" setMenuOpen={setMenuOpen} />
        <Li
          id="03"
          name="technology"
          link="/technology"
          setMenuOpen={setMenuOpen}
        />
      </ul>
    </motion.nav>
  );
}
