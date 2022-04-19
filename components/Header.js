import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-10">
      <img
        className="h-50 w-50 object-contain
      
      "
        src="./images/logo.svg"
        alt="logo"
      />

      <div
        className="lg:flex xl:flex  text-white 
        hidden
      font-bold text-md items-center lg:space-x-6 space-x-3 "
      >
        <Link href="">
          <li
            className="cursor-pointer list-none
          "
          >
            HOME
          </li>
        </Link>
        <Link href="">
          <li
            className="cursor-pointer list-none
          "
          >
            ABOUT
          </li>
        </Link>
        <Link href="">
          <li
            className="cursor-pointer list-none
          "
          >
            PLAY TO EARN
          </li>
        </Link>
        <Link href="">
          <li
            className="cursor-pointer list-none
          "
          >
            ROADMAP
          </li>
        </Link>
        <Link href="">
          <li
            className="cursor-pointer list-none
          "
          >
            TEAM
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
