import React from "react";

const Player = ({ image, title, big }) => {
  return (
    <div className="relative xl:p-10  p-5 Players">
      <div
        className="Border absolute left-[-30px] 
      top-[50px]  xl:p-10  p-5  w-[440px] h-[80%]"
      ></div>
      <img src={image} alt="player" />

      <h3
        className="absolute bottom-10 left-[50%] transform
      translate-x-[-50%] font-extrabold text-2xl"
      >
        {title}
      </h3>
    </div>
  );
};

export default Player;
