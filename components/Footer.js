import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white Footer 
    relative xl:py-[200px] xl:px-[100px] 
    py-20 px-20"
    >
      <div className="flex items-end">
        <div className="flex flex-col flex-grow">
          <h1
            className="xl:text-2xl text-xl
          mb-3 font-extrabold"
          >
            Stay in the loop
          </h1>
          <p className="min-w-[300px]  max-w-[339px]">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem
          </p>
        </div>

        <div className="xl:space-x-2">
          <input
            type="email"
            className="rounded-xl
            px-4 bg-white outline-none
            text-black p-2 h-12 w-[400px]"
            placeholder="Your email address"
          />
          <button
            className="rounded-xl bg-filter-blur
          w-[165px] h-[61px] bg-transparent border-4 border-white
        text-white  "
          >
            SIGN UP
          </button>
        </div>
      </div>

      <p
        className="absolute 
        left-20 bottom-10 text-sm"
      >
        © 2022 Get Set Play. All Rights Reserved.
      </p>
      <div
        className="absolute 
        right-20 bottom-10 flex items-center
         xl:space-x-6 "
      >
        <Link href="">
          <p className="text-sm cursor-pointer">Privacy Policy</p>
        </Link>
        <Link href="">
          <p className="text-sm cursor-pointer">Terms of Service</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
