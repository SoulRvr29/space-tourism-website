"use client";

import React from "react";
import DestinationNav from "../../components/DestinationNav";
import Image from "next/image";
import { useState } from "react";
import data from "../../app/data.json";
import BackgroundImage from "@/components/BackgroundImage";
import SectionHeader from "@/components/SectionHeader";

export default function Destination() {
  const destinations = data.destinations;
  const [id, setId] = useState(0);

  return (
    <div className="flex flex-col mt-10 px-10">
      <BackgroundImage section="destination" />
      <SectionHeader number="01" title="pick your destination" />
      <div className="grid grid-cols-2 gap-[clamp(10px,8vw,130px)] justify-center max-md:grid-cols-1 max-md:self-center">
        <section className="max-w-md">
          <Image
            src={destinations[id].images.png}
            width={445}
            height={445}
            alt={destinations[id].name}
          ></Image>
        </section>
        <section className="max-w-md max-md:text-center">
          <DestinationNav setId={setId} />
          <h2 className="text-[100px] max-md:text-7xl max-[375px]:text-6xl font-bellefair uppercase max-md:my-6">
            {destinations[id].name}
          </h2>
          <p className="border-b border-white border-opacity-25 pb-8 mb-8 max-md:text-base">
            {destinations[id].description}
          </p>
          <div className="flex gap-14 max-md:justify-center max-[400px]:flex-col max-[400px]:gap-6">
            <div>
              <h3 className="uppercase text-[14px] text-text-light-blue font-barlow">
                avg.distance
              </h3>
              <div className="font-bellefair text-[28px] uppercase">
                {destinations[id].distance}
              </div>
            </div>
            <div>
              {" "}
              <h3 className="uppercase text-[14px] text-text-light-blue font-barlow">
                est.travel time
              </h3>
              <div className="font-bellefair text-[28px] uppercase">
                {destinations[id].travel}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
