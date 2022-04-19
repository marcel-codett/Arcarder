import React from "react";
import HelperIcon from "./HelperIcon";
import Image from "next/image";
const Card = ({ name, position, description, image, company1, company2 }) => {
  return (
    <div
      className="Card  flex flex-col
    py-16 items-center relative"
    >
      <HelperIcon ForCard src="/images/linkedin.svg" />
      <div className="relative mb-4 ">
        <img
          className="absolute top-0 right-6 w-100 h-100"
          src="/images/Image.svg"
          alt="abs"
        />
        <Image
          className=" rounded-full"
          width={150}
          height={150}
          layout="fixed"
          src={image}
          alt="card-image"
        />
      </div>

      <div className="border-b-blue-200 flex flex-col items-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-md font-light">{position}</p>
      </div>

      <p className="text-sm text-center mx-auto px-6 mt-6">{description}</p>

      <div className="mt-6 flex items-center space-x-4 ">
        <img
          className="Icon rounded-xl border-2 px-4 py-2"
          src={company1}
          alt="comp"
        />
        <img
          className="Icon rounded-xl border-2 px-4 py-2"
          src={company2}
          alt="comp2"
        />
      </div>
    </div>
  );
};

export default Card;
