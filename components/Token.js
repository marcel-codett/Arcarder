import React from "react";
import Image from "next/image";
const Token = () => {
  return (
    <div
      className="text-white relative 
    grid place-items-center py-60 p-10"
    >
      <h1 className="text-center text-2xl mb-5">Token</h1>
      <img
        src="images/line.svg"
        alt="line"
        className="absolute top-[50%] w-full left-0"
      />
      <img
        className="absolute left-[50%]
        z-8 transform translate-x-[-50%] top-[50%]

       opacity-40 blur-2xl"
        src="images/blured2.svg"
        alt="vector"
      />
      <div className="lg:flex grid xl:gap-16  place-items items-center z-10">
        <div className="flex flex-col mb-10 lg:space-y-20 xl:mr-20 w-[50%]">
          <div>
            <h4 className="font-bold">$GSP</h4>
            <p className="mt-3 w-[300px] xl:w-[649px]">
              Tokenomics, the combination of token and economics, refers to a
              crypto assest's qualities that makes it appealing to both users
              and investors. It refers to the supply and demand characteristics
              of the assest
            </p>
          </div>
          <div>
            <h4 className="font-bold">$GSP</h4>
            <p className="mt-3 w-[300px] xl:w-[649px]">
              Tokenomics, the combination of token and economics, refers to a
              crypto assest's qualities that makes it appealing to both users
              and investors. It refers to the supply and demand characteristics
              of the assest
            </p>
          </div>
          <div>
            <h4 className="font-bold">$GSP</h4>
            <p className="mt-3 w-[300px] xl:w-[649px]">
              Tokenomics, the combination of token and economics, refers to a
              crypto assest's qualities that makes it appealing to both users
              and investors. It refers to the supply and demand characteristics
              of the assest
            </p>
          </div>
        </div>
        <Image
          height={300}
          width={300}
          layout="fixed"
          src="/images/gsp_coin.svg"
          alt="gsp"
        />
      </div>
    </div>
  );
};

export default Token;
