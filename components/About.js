import React from "react";
import AboutIcon from "./AboutIcon";

const About = () => {
  return (
    <div
      className="text-white relative
    grid place-items-center p-10"
    >
      <img
        className="absolute right-0 top-0 h-80"
        src="images/Vector_94.svg "
        alt="vector"
      />
      <img
        className="absolute transform rotate-180 left-0 
        bottom-[-220px] h-80"
        alt="vector"
        src="images/Vector_94.svg "
      />
      <img
        className="absolute left-0 bottom-[-220px]
       opacity-30 blur-2xl"
        src="images/blured2.svg"
        alt="vector"
      />
      <img
        className="absolute bottom-[0px]
       opacity-30 blur-2xl"
        src="images/blured2.svg"
      />
      <img
        className="absolute bottom-[100px]
       opacity-30 blur-2xl"
        src="images/blured2.svg"
      />
      <h1 className="z-10 font-semibold text-2xl mb-20">ABOUT GETSETPLAY</h1>

      <div
        className="relative
      grid grid-cols-1
      place-items-center xl:flex lg:space-x-8  items-start"
      >
        <AboutIcon
          src="/images/headset.svg"
          title="FOR STREAMERS"
          description='The world"s first exculsive gaming stream-2-earn 
      platform allow free and fair monetisation of your gaming skills, for
      streamer and viewers alike'
        />
        <AboutIcon
          src="/images/player.svg"
          title="FOR STREAMERS"
          description='The world"s first exculsive gaming stream-2-earn 
      platform allow free and fair monetisation of your gaming skills, for
      streamer and viewers alike'
        />
        <AboutIcon
          src="/images/vr.svg"
          title="FOR STREAMERS"
          description='The world"s first exculsive gaming stream-2-earn 
      platform allow free and fair monetisation of your gaming skills, for
      streamer and viewers alike'
        />
      </div>
    </div>
  );
};

export default About;
