import React from "react";
import AboutIcon from "./AboutIcon";

const About = () => {
  return (
    <div
      className="text-white
    grid place-items-center p-10"
    >
      <h1 className="text-2xl mb-20">About GETSETPLAY</h1>

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
