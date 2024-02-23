"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import data from "../data.json";
import BackgroundImage from "@/components/BackgroundImage";
import CrewNav from "../../components/CrewNav";
import SectionHeader from "@/components/SectionHeader";

export default function Destination() {
  const crew = data.crew;
  const [id, setId] = useState(0);

  return (
    <div className="flex flex-col justify-evenly mt-10 px-[clamp(20px,5vw,100px)] max-w-[1440px]">
      <BackgroundImage section="crew" />
      <SectionHeader number="02" title="meet your crew" />
      <div className="grid grid-cols-2 justify-center max-md:grid-cols-1 max-md:self-center  ">
        <section className="relative flex flex-col max-w-md max-md:text-center max-[375px]:order-2 fade-in-anim">
          <h2 className="text-[100px] max-md:text-7xl max-[375px]:text-6xl font-bellefair uppercase max-md:my-6 grid">
            <span className="text-3xl opacity-50 max-md:text-2xl max-[375px]:text-base">
              {crew[id].role}
            </span>
            <span className="text-5xl mt-2 mb-6 max-md:text-4xl max-[375px]:text-[24px]">
              {crew[id].name}
            </span>
          </h2>
          <p className="pb-8 mb-8 max-md:text-base font-barlow max-[375px]:text-[15px]">
            {crew[id].bio}
          </p>
        </section>{" "}
        <div className="max-[375px]:-order-3 absolute bottom-12 left-12 w-full max-md:static">
          <CrewNav setId={setId} />
        </div>
        <section className="max-w-sm max-md:px-10 max-md:mt-10 max-[375px]:border-b max-[375px]:border-white max-[375px]:border-opacity-10 max-[375px]:mb-6 max-md:static absolute bottom-0 right-20 max-lg:right-0 ">
          <Image
            src={crew[id].images.png}
            width={700}
            height={700}
            alt={crew[id].name}
          ></Image>
        </section>
      </div>
    </div>
  );
}
