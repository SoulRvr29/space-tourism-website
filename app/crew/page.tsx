"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import data from "../data.json";
import bkgCrewDesktop from "../../public/assets/crew/background-crew-desktop.jpg";
import bkgCrewTablet from "../../public/assets/crew/background-crew-tablet.jpg";
import bkgCrewMobile from "../../public/assets/crew/background-crew-mobile.jpg";

export default function Destination() {
  const crew = data.crew;
  const [id, setId] = useState(0);

  return (
    <div className="flex flex-col mt-10 px-10">
      <div className="w-screen h-screen fixed top-0 left-0 -z-10 grid">
        <Image
          src={bkgCrewDesktop}
          alt="background"
          className="fixed top-0 justify-self-center z-0 min-w-[1440px] max-md:hidden "
        />

        <Image
          src={bkgCrewTablet}
          alt="background"
          className="fixed top-0 z-0 justify-self-center min-w-[768px] hidden max-md:block max-[375px]:hidden"
        />

        <Image
          src={bkgCrewMobile}
          alt="background"
          className="fixed top-0 z-0 justify-self-center min-w-[375px] hidden max-[375px]:block"
        />
      </div>
      <h1 className="mb-4 font-barlowCondensed tracking-widest max-md:text-xl max-[375px]:text-base">
        <span className="font-bold opacity-30 mr-8">02</span>
        meet your crew
      </h1>
      <div className="grid grid-cols-2 gap-[clamp(10px,8vw,130px)] justify-center max-md:grid-cols-1 max-md:self-center">
        <section className="max-w-md max-md:text-center">
          <h2 className="text-[100px] max-md:text-7xl max-[375px]:text-6xl font-bellefair uppercase max-md:my-6 grid">
            <span className="text-2xl">{crew[id].role}</span>
            <span className="text-5xl mt-2 mb-6">{crew[id].name}</span>
          </h2>
          <p className="pb-8 mb-8 max-md:text-base font-barlow">
            {crew[id].bio}
          </p>
        </section>{" "}
        <section className="max-w-md">
          <Image
            src={crew[id].images.png}
            width={445}
            height={445}
            alt={crew[id].name}
          ></Image>
        </section>
      </div>
    </div>
  );
}
