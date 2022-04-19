import React from "react";
import Player from "./Player";
const PlayerToEarn = () => {
  return (
    <div
      className="px-20 py-80
      grid place-items-center
    mb-40 mt-10 relative text-white"
    >
      <img
        className="absolute right-0 top-0 h-80"
        src="images/Vector_94.svg "
      />
      <img
        className="absolute transform rotate-180 left-0 
        bottom-0 h-80"
        src="images/Vector_94.svg "
      />
      <h1
        className="text-center text-2xl font-bold mb-5 text-md
      "
      >
        PLAY TO EARN
      </h1>

      <div
        className="grid lg:grid-cols-2 xl:grid-cols-3
      md:gap-5 space-y-10 xl:gap-7"
      >
        <Player image="/images/cod_war.svg" />
        <Player image="/images/fortnite.png" />
        <Player image="/images/csgo.svg" />
        <Player image="/images/dota.png" />
        <Player image="/images/legends.svg" />
        <Player image="/images/rainbow_six.svg" />
      </div>
    </div>
  );
};

export default PlayerToEarn;
