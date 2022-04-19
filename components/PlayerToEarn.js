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
        alt="vector"
      />
      <img
        className="absolute transform rotate-180 left-0 
        bottom-0 h-80"
        alt="vector"
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
        <Player big title="WARZONE" image="/images/cod_war.svg" />
        <Player title="FORNITE" image="/images/fortnite.png" />
        <Player title="CS-GO" image="/images/csgo.svg" />
        <Player title="LEAGUE OF LEGENDS" image="/images/dota.png" />
        <Player title="DOTA 2" image="/images/legends.svg" />
        <Player title="RAINBOW 6" image="/images/rainbow_six.svg" />
      </div>
    </div>
  );
};

export default PlayerToEarn;
