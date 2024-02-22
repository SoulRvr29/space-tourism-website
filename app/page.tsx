import Link from "next/link";
import Image from "next/image";
import bkgHomeDesktop from "../public/assets/home/background-home-desktop.jpg";
import bkgHomeTablet from "../public/assets/home/background-home-tablet.jpg";
import bkgHomeMobile from "../public/assets/home/background-home-mobile.jpg";
export default function Home() {
  return (
    <div className="relative justify-center flex flex-col gap-52">
      <div className="w-screen h-screen fixed top-0 left-0 -z-10 grid">
        <Image
          src={bkgHomeDesktop}
          alt="background"
          className="fixed top-0 justify-self-center z-0 min-w-[1440px] max-md:hidden "
        />

        <Image
          src={bkgHomeTablet}
          alt="background"
          className="fixed top-0 z-0 justify-self-center min-w-[768px] hidden max-md:block max-[375px]:hidden"
        />

        <Image
          src={bkgHomeMobile}
          alt="background"
          className="fixed top-0 z-0 justify-self-center min-w-[375px] hidden max-[375px]:block"
        />
      </div>
      <main className="flex justify-evenly items-end px-20 max-md:px-6 gap-10 max-md:flex-col max-md:items-center">
        <div className="flex flex-col max-w-md max-md:text-center">
          <h1 className="uppercase text-[28px] max-md:text-[20px] max-[375px]:text-[16px] font-thin font-barlow text-text-light-blue tracking-widest">
            so, you want to travel to
          </h1>
          <span className="font-bellefair uppercase text-[clamp(100px,15vw,150px)] max-[375px]:text-[80px] text-white">
            space
          </span>
          <p className="max-[375px]:text-[15px]">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <Link
          href="/destination"
          className="flex items-center font-bellefair text-black text-[32px] max-[375px]:text-[20px] uppercase bg-white p-16 max-[375px]:p-8 rounded-full h-min aspect-square transition-all ease-in-out duration-700 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_0_50px_rgba(255,255,255,0.1)]"
        >
          explore
        </Link>
      </main>
    </div>
  );
}
