import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="flex items pt-40 p-10">
      {/* left */}
      <Image
        layout="responsive"
        height={800}
        src="/images/circle-1.svg"
        width={800}
        alt="control"
      />

      <div className="text-white ">
        <h2 className="xl:text-[60px] text-7xl mb-4 font-extrabold">
          <span className="font-medium ">GETSET</span>PLAY
        </h2>
        <p
          className="w-[469px]  font-bold lg:text-2xl 
        lg:mb-5 text-xl mb-3"
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
      <div>
        <Image
          layout="fixed"
          width={700}
          height={700}
          src="/images/controls.svg"
        />
      </div>
    </div>
  );
};

export default Banner;
