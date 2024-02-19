import Image from "next/image";
import bkgHome from "../public/home/background-home-desktop.jpg";
import logo from "../public/shared/logo.svg";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col gap-52">
      <Image
        src={bkgHome}
        alt="background"
        className="absolute top-0 left-0 -z-10"
      />
      <header className="flex p-8 pr-0 pl-12 items-center">
        <Image src={logo} alt="logo" />
        <div className="h-[1px] bg-white opacity-30 w-full ml-8"></div>
        <nav className="bg-white bg-opacity-10 px-14 backdrop-blur-md font-barlowCondensed tracking-widest">
          <ul className="uppercase flex gap-12">
            <li className="hover:cursor-pointer flex gap-2 border-b-2 border-transparent py-6 hover:border-white hover:border-opacity-50">
              <span className="font-bold ">00</span>home
            </li>
            <li className="hover:cursor-pointer flex gap-2 border-b-2 border-transparent py-6 hover:border-white hover:border-opacity-50">
              <span className="font-bold ">01</span>destination
            </li>
            <li className="hover:cursor-pointer flex gap-2 border-b-2 border-transparent py-6 hover:border-white hover:border-opacity-50">
              <span className="font-bold ">02</span>crew
            </li>
            <li className="hover:cursor-pointer flex gap-2 border-b-2 border-transparent py-6 hover:border-white hover:border-opacity-50">
              <span className="font-bold ">03</span>technology
            </li>
          </ul>
        </nav>
      </header>
      <main className="font-barlow flex justify-evenly">
        <div className="flex flex-col max-w-md">
          <h1 className="uppercase text-2xl font-thin font-barlow text-text-light-blue tracking-widest">
            so, you want to travel to
          </h1>
          <span className="font-bellefair uppercase text-8xl">space</span>
          <p className="text-[18px] text-text-light-blue tracking-wide">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="font-bellefair text-black text-4xl uppercase bg-white p-16 rounded-full aspect-square">
          explore
        </button>
      </main>
    </div>
  );
}
