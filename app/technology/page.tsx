"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import data from "../data.json";
import BackgroundImage from "@/components/BackgroundImage";
import SectionHeader from "@/components/SectionHeader";
// import TechnologyNav from "../../components/TechnologyNav";

export default function Destination() {
  const technology = data.technology;
  const [id, setId] = useState(0);

  return (
    <div className="flex flex-col justify-evenly mt-10 px-[clamp(20px,5vw,100px)] ">
      <BackgroundImage section="technology" />
      <SectionHeader number="03" title="space launch 101" />
      <div className="grid grid-cols-2 justify-center max-md:grid-cols-1 max-md:self-center  ">
        <section className="relative flex flex-col max-w-md max-md:text-center max-[375px]:order-2 ">
          <h2 className="text-[100px] max-md:text-7xl max-[375px]:text-6xl font-bellefair uppercase max-md:my-6 grid">
            <span className="text-3xl opacity-50 max-md:text-2xl max-[375px]:text-base">
              the terminology
            </span>
            <span className="text-5xl mt-2 mb-6 max-md:text-4xl max-[375px]:text-[24px]">
              {technology[id].name}
            </span>
          </h2>
          <p className="pb-8 mb-8 max-md:text-base font-barlow max-[375px]:text-[15px]">
            {technology[id].description}
          </p>
          <div className="max-[375px]:-order-3  ">
            {/* <TechnologyNav setId={setId} /> */}
          </div>
        </section>{" "}
        <section className="max-w-sm max-md:px-10 max-md:mt-10 max-[375px]:border-b max-[375px]:border-white max-[375px]:border-opacity-10 max-[375px]:mb-6 max-md:static fixed bottom-0 right-0 ">
          <Image
            src={technology[id].images.portrait}
            width={445}
            height={445}
            alt={technology[id].name}
          ></Image>
        </section>
      </div>
    </div>
  );
}
