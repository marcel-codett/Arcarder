import React from "react";

const RoadMap = () => {
  return (
    <div
      className="text-white xl:grid
     xl:place-items-center items-center
    "
    >
      <h4
        className="text-2xl text-center font-bold
      mb-20 text-md"
      >
        RoadMap
      </h4>
      <div
        className="xl:flex lg:grid
         xl:space-x-4 
            p-20 items-center"
      >
        <h3 className="font-bold text-3xl mb-10 text-purple-800">2022</h3>
        <div
          className="xl:flex relative
        space-x-4 xl:space-x-8
        items-center lg:grid lg:grid-cols-2 lg:gap-6 place-items-center"
        >
          <div className="px-10 mb-20 pt-20 RoadMap ">
            <h2
              className=" absolute
              font-extrabold text-xl  top-[-20px] left-10 
            py-4 px-6 RoadMap_Q"
            >
              Q2
            </h2>
            <p className="text-sm">
              Seed and Private Backers and Partners Onboarding MVP - ArcArena
              P2P version - DAO based IDO launch of ARD token Launch of ARD
              Staking Pools - Vote Escrow distribution model
            </p>
          </div>
          <div className="xl:px-10 mb-20 pt-20 RoadMap ">
            <h2
              className=" absolute
              font-extrabold text-xl  top-[-20px] left-10 
            py-4 px-6 RoadMap_Q"
            >
              Q3
            </h2>
            <p className="text-sm px-6">
              CEX listing of ARD token Launch DAO app and Snapshot spaces Arc
              Tournaments (testnet) Audit of ArcArena Smart Contracts Testnet
              launch - ArcArena v1 - DAO based
            </p>
          </div>
          <div className="px-10 pt-20 RoadMap ">
            <h2
              className=" absolute
              font-extrabold text-xl  top-[-20px] left-10 
            py-4 px-6 RoadMap_Q"
            >
              Q4
            </h2>
            <p className="text-sm">
              Mainnet launch - ArcArena v1 - DAO based Add support for Top 3
              games and 10 Match templates on ArcArena Referral program for
              eSports teams, streamers, high stakes bettors, influencers, etc
              Testnet Launch - ArcStreams dApp - P2P streaming with Lite-nodes
            </p>
          </div>
        </div>
      </div>
      {/* 2023 */}
      <div
        className="xl:flex lg:grid
         xl:space-x-4 
            p-20 items-center"
      >
        <h3 className="font-bold text-3xl mb-10 text-purple-800">2022</h3>
        <div
          className="xl:flex relative
        space-x-4 xl:space-x-8
        items-center lg:grid lg:grid-cols-2 lg:gap-6 place-items-center"
        >
          <div className="px-10 mb-20 pt-20 RoadMap ">
            <h2
              className=" absolute
              font-extrabold text-xl  top-[-20px] left-10 
            py-4 px-6 RoadMap_Q"
            >
              Q2
            </h2>
            <p className="text-sm">
              Seed and Private Backers and Partners Onboarding MVP - ArcArena
              P2P version - DAO based IDO launch of ARD token Launch of ARD
              Staking Pools - Vote Escrow distribution model
            </p>
          </div>
          <div className="xl:px-10 mb-20 pt-20 RoadMap ">
            <h2
              className=" absolute
              font-extrabold text-xl  top-[-20px] left-10 
            py-4 px-6 RoadMap_Q"
            >
              Q3
            </h2>
            <p className="text-sm px-6">
              CEX listing of ARD token Launch DAO app and Snapshot spaces Arc
              Tournaments (testnet) Audit of ArcArena Smart Contracts Testnet
              launch - ArcArena v1 - DAO based
            </p>
          </div>
          <div className="px-10 pt-20 RoadMap ">
            <h2
              className=" absolute
              font-extrabold text-xl  top-[-20px] left-10 
            py-4 px-6 RoadMap_Q"
            >
              Q4
            </h2>
            <p className="text-sm">
              Mainnet launch - ArcArena v1 - DAO based Add support for Top 3
              games and 10 Match templates on ArcArena Referral program for
              eSports teams, streamers, high stakes bettors, influencers, etc
              Testnet Launch - ArcStreams dApp - P2P streaming with Lite-nodes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
