"use client";
import dgd from "/assets/destination/image-moon.png";
import React from "react";
import DestinationNav from "../../components/DestinationNav";
import Image from "next/image";
import { useState } from "react";
import data from "../../app/data.json";

export default function Destination() {
  const destinations = data.destinations;
  const [id, setId] = useState(0);

  return (
    <div className="flex gap-32 justify-center mt-10 px-10">
      <section className="max-w-md">
        <h1 className="mb-4 font-barlowCondensed tracking-widest">
          <span className="font-bold opacity-30 mr-8">01</span>pick your
          destination
        </h1>
        <Image
          src={destinations[id].images.png}
          width={445}
          height={445}
          alt={destinations[id].name}
        ></Image>
      </section>
      <section className="max-w-md">
        <DestinationNav setId={setId} />
        <h2 className="text-[100px] font-bellefair uppercase">
          {destinations[id].name}
        </h2>
        <p className="border-b border-white border-opacity-25 pb-8 mb-8">
          {destinations[id].description}
        </p>
        <div className="flex gap-14">
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
  );
}
