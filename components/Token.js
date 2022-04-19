import React from "react";
import Image from "next/image";
const Token = () => {
  return (
    <div className="text-white py-60 p-10">
      <h1 className="text-center text-2xl mb-5">Token</h1>

      <div className="lg:flex grid place-items items-center">
        {/* left content */}
        <div className="flex flex-col lg:space-y-20 xl:mr-20 w-[50%]">
          <div>
            <h4 className="font-bold">$GSP</h4>
            <p className="mt-3 w-[649px]">
              Tokenomics, the combination of token and economics, refers to a
              crypto assest's qualities that makes it appealing to both users
              and investors. It refers to the supply and demand characteristics
              of the assest
            </p>
          </div>
          <div>
            <h4 className="font-bold">$GSP</h4>
            <p className="mt-3 w-[649px]">
              Tokenomics, the combination of token and economics, refers to a
              crypto assest's qualities that makes it appealing to both users
              and investors. It refers to the supply and demand characteristics
              of the assest
            </p>
          </div>
          <div>
            <h4 className="font-bold">$GSP</h4>
            <p className="mt-3 w-[649px]">
              Tokenomics, the combination of token and economics, refers to a
              crypto assest's qualities that makes it appealing to both users
              and investors. It refers to the supply and demand characteristics
              of the assest
            </p>
          </div>
        </div>
        {/* Right content */}
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
