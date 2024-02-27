"use client";

import Link from "next/link";
import BackgroundImage from "../components/BackgroundImage";
import { motion } from "framer-motion";

export default function Home() {
  const exploreBtnVariant = {
    initial: {
      scale: 0,
      rotate: 360,
      opacity: 0,
    },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hover: {
      boxShadow:
        "0 0 70px rgba(255,255,255,0.5), 0 0 0 50px rgba(255,255,255,0.1)",
    },
  };

  const fadeWithZoomVariant = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative justify-center max-[375px]:justify-start flex flex-col gap-52">
      <BackgroundImage section="home" />

      <main className="flex justify-evenly items-end px-20 max-md:px-6 gap-10 max-md:flex-col max-md:items-center">
        <motion.div
          className="flex flex-col max-w-md max-md:text-center"
          variants={fadeWithZoomVariant}
          initial="initial"
          animate="animate"
        >
          <h1 className="uppercase text-[28px] max-md:text-[20px] max-[375px]:text-[16px] font-thin font-barlowCondensed text-text-light-blue tracking-[4px]">
            so, you want to travel to
          </h1>
          <span className="font-bellefair uppercase text-[clamp(100px,15vw,150px)] max-[375px]:text-[80px] text-white">
            space
          </span>
          <p className="max-[375px]:text-[15px]  text-text-light-blue">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </motion.div>
        <motion.div
          variants={exploreBtnVariant}
          initial="initial"
          animate="animate"
        >
          <Link href="/destination" className="">
            <motion.div
              className="flex items-center font-bellefair text-black text-[32px] max-[375px]:text-[20px] uppercase bg-white p-16 max-md:p-12 max-[375px]:p-8 rounded-full h-min aspect-square transition-all ease-in-out duration-700 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_0_50px_rgba(255,255,255,0.1)]"
              variants={exploreBtnVariant}
              whileHover="hover"
            >
              explore
            </motion.div>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
