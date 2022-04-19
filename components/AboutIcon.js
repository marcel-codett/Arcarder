import React from "react";
import Image from "next/image";
const AboutIcon = ({ src, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <Image width={300} height={300} layout="fixed" src={src} />

      <div className="flex flex-col items-center xl:items-start">
        <h2>{title}</h2>
        <p className="max-w-[475px]">{description}</p>
      </div>
    </div>
  );
};

export default AboutIcon;
