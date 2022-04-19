import React from "react";

const Player = ({ image }) => {
  return (
    <div className="xl:p-10 md:p-7  p-5 Players">
      <img src={image} />
    </div>
  );
};

export default Player;
