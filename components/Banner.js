import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="flex relative items py-0 xl:py-40  xl:p-10">
      {/* left */}
      <img
        className="absolute top-0 opacity-20"
        src="/images/circle-1.svg"
        alt="control"
      />
      <img
        className="absolute top-10 opacity-20"
        src="/images/circle-2.svg"
        alt="control"
      />

      <div
        className="text-white 
      xl:block flex flex-col items-center justify-center"
      >
        <h2 className="xl:text-[80px] text-6xl  lg:text-6xl mb-4 font-extrabold">
          <span className="font-medium ">GETSET</span>PLAY
        </h2>
        <p
          className="w-[469px]  font-bold lg:text-2xl 
        lg:mb-5 text-center xl:text-left text-xl mb-3"
        >
          A DAO-POWERED ESPORTS AND STREAMING METAVERSE
        </p>

        <button
          className="rounded-xl bg-filter-blur
          w-[165px] h-[61px] bg-transparent border-4 border-white
        text-white  "
        >
          EXPLORE
        </button>
      </div>
      {/* right */}
      <div className="relativer">
        <img
          className="absolute bottom-[-20px]
          opacity-20 blur-2xl"
          src="/images/blured.svg"
        />
        <Image
          layout="fixed"
          className="xl:w-[1000px] hidden"
          width={700}
          height={700}
          src="/images/controls.svg"
        />
      </div>
    </div>
  );
};

export default Banner;
