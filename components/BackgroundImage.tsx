import React from "react";
import Image from "next/image";

interface BackgroundImageProps {
  section: string;
}
const BackgroundImage: React.FC<BackgroundImageProps> = ({ section }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 -z-10 grid">
      <Image
        src={`/assets/${section}/background-${section}-desktop.jpg`}
        alt="background"
        className="fixed top-0 justify-self-center z-0 min-w-[1440px] max-md:hidden "
        width={1440}
        height={900}
      />

      <Image
        src={`/assets/${section}/background-${section}-tablet.jpg`}
        alt="background"
        className="fixed top-0 z-0 justify-self-center min-w-[768px] hidden max-md:block max-[375px]:hidden"
        width={768}
        height={1024}
      />

      <Image
        src={`/assets/${section}/background-${section}-mobile.jpg`}
        alt="background"
        className="fixed bottom-0 z-0 justify-self-center min-w-[375px] hidden max-[375px]:block"
        width={375}
        height={667}
      />
    </div>
  );
};

export default BackgroundImage;
