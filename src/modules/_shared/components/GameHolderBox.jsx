import React from "react";

import ACShadows from "@modules/_shared/Assets/GamePhotos/ACShadows.jpg";
import AOS from "aos";

import "aos/dist/aos.css"; // Import AOS styles
function GameHolderBox({gameName,gamePrice,gameDetails}) {
  
  return (
    <div data-aos="fade-up" className=" w-[35%] cursor-pointer	">
      <div className="w-full h-55 ">
        <img  className="w-full h-full rounded-3xl object-cover" src={ACShadows}  />
      </div>
      <div className=" p-3">
        <div className="flex justify-between ">
          <h1 className="text-xl font-bold w-fit   ">{gameName}</h1>
          <h1 className="text-xl font-bold w-fit text-text-dark">{gamePrice}</h1>
        </div>
        <h1 className="text-accent text-sm mt-1">{gameDetails} </h1>
      </div>
    </div>
  );
}

export default GameHolderBox;
