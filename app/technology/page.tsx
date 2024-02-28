"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import data from "../data.json";
import BackgroundImage from "@/components/BackgroundImage";
import SectionHeader from "@/components/SectionHeader";
import TechnologyNav from "../../components/TechnologyNav";

export default function Destination() {
  const technology = data.technology;
  const [id, setId] = useState(0);

  return (
    <div className="flex flex-col max-[375px]:mt-0 mt-10 px-[clamp(20px,5vw,80px)] max-lg:px-0 mb-10">
      <BackgroundImage section="technology" />
      <div className="max-lg:ml-10 max-lg:mb-6 max-[375px]:mx-auto max-[375px]:mb-0">
        <SectionHeader number="03" title="space launch 101" />
      </div>
      <div className="grid grid-cols-2 justify-center max-lg:grid-cols-1 max-lg:self-center mt-0">
        <section className="relative flex max-lg:flex-col gap-10 items-center max-w-md max-lg:text-center max-[375px]:order-2 mt-20 max-sm:mt-10 max-lg:mx-auto">
          <div className="max-[375px]:-order-3 max-[375px]:mb-0">
            <TechnologyNav setId={setId} />
          </div>
          <div>
            <h2 className="text-[100px] max-lg:text-7xl max-[375px]:text-6xl font-bellefair uppercase max-lg:my-6 max-[375px]:mt-0 max-[375px]:mb-2  grid ">
              <span className="text-base text-text-light-blue font-barlowCondensed tracking-widest max-[375px]:text-sm">
                the terminology...
              </span>
              <span className="text-5xl  mt-2 mb-6 max-lg:m-0 max-lg:text-4xl max-[375px]:text-[24px] text-nowrap max-[1100px]:text-wrap">
                {technology[id].name}
              </span>
            </h2>
            <p className="max-lg:text-base text-text-light-blue font-barlow max-[375px]:text-[15px] max-lg:mb-10 max-lg:px-8">
              {technology[id].description}
            </p>
          </div>
        </section>{" "}
        <section className="max-lg:order-first">
          <div className="max-lg:hidden absolute right-0">
            <Image
              src={technology[id].images.portrait}
              width={515}
              height={527}
              alt={technology[id].name}
            ></Image>
          </div>
          <div className="hidden max-lg:block ">
            <Image
              src={technology[id].images.landscape}
              width={768}
              height={310}
              alt={technology[id].name}
            ></Image>
          </div>
        </section>
      </div>
    </div>
  );
}
