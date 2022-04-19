import React from "react";
import Image from "next/image";
import AboutIcon from "./AboutIcon";
import HelperIcon from "./HelperIcon";
const Help = () => {
  return (
    <div className="Helper p-20 w-full relative">
      <img
        className="absolute top-[-170px] h-[300px] right-0"
        layout="fixed"
        src="/images/mouse.svg"
      />
      <img
        className="absolute bottom-[-200px] h-[300px] left-0"
        layout="fixed"
        src="/images/keyboard.svg"
      />
      <div
        className="grid lg:space-x-10 grid-cols-5 p-10
       place-items-center "
      >
        <HelperIcon
          src="images/ICONS-02.png"
          title="EASY TO ACCESS"
          description="Player from all over the the world can 
          access our desktop client and use either usd, btc, ETH or ARD
           to deposit or withdraw from their arcarder account
           from anywhere in the world."
        />
        <HelperIcon
          src="images/ICONS-03.png"
          title="EASY TO ACCESS"
          description="Player from all over the the world can 
          access our desktop client and use either usd, btc, ETH or ARD
           to deposit or withdraw from their arcarder account
           from anywhere in the world."
        />
        <HelperIcon
          src="images/ICONS-01.png"
          title="EASY TO ACCESS"
          description="Player from all over the the world can 
          access our desktop client and use either usd, btc, ETH or ARD
           to deposit or withdraw from their arcarder account
           from anywhere in the world."
        />
        <HelperIcon
          src="images/ICONS-05.png"
          title="EASY TO ACCESS"
          description="Player from all over the the world can 
          access our desktop client and use either usd, btc, ETH or ARD
           to deposit or withdraw from their arcarder account
           from anywhere in the world."
        />
        <HelperIcon
          src="images/ICONS-04.png"
          title="EASY TO ACCESS"
          description="Player from all over the the world can 
          access our desktop client and use either usd, btc, ETH or ARD
           to deposit or withdraw from their arcarder account
           from anywhere in the world."
        />
      </div>
    </div>
  );
};

export default Help;
