import Link from "next/link";

export default function Home() {
  return (
    <div className="relative justify-center flex flex-col gap-52">
      <main className="flex justify-evenly items-end px-20 gap-10 max-md:flex-col max-md:items-center">
        <div className="flex flex-col max-w-md max-md:text-center">
          <h1 className="uppercase text-[28px] max-md:text-[20px] max-sm:text-[16px] font-thin font-barlow text-text-light-blue tracking-widest">
            so, you want to travel to
          </h1>
          <span className="font-bellefair uppercase text-[clamp(100px,15vw,150px)] max-sm:text-[80px] text-white">
            space
          </span>
          <p className="max-sm:text-[15px]">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <Link
          href="/destination"
          className="flex items-center font-bellefair text-black text-[32px] max-sm:text-[20px] uppercase bg-white p-16 max-sm:p-8 rounded-full h-min aspect-square transition-all ease-in-out duration-700 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_0_50px_rgba(255,255,255,0.1)]"
        >
          explore
        </Link>
      </main>
    </div>
  );
}
