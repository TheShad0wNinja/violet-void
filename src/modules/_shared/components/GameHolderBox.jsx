import React from "react";
import ACShadows from "@modules/_shared/Assets/GamePhotos/ACShadows.jpg";

function GameHolderBox({ gameName, gamePrice, gameDetails }) {
  return (
    <div data-aos="fade-up" className="cursor-pointer w-full">
      {/* Image Container */}
      <div className="max-w-xs md:max-w-md lg:max-w-lg">
  <img className="w-full h-auto object-cover" src={ACShadows} />
</div>

      {/* Game Info */}
      <div className="p-3">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold sm:text-md">{gameName}</h1>
          <h1 className="text-lg font-bold sm:text-md text-text-dark">
            {gamePrice}
          </h1>
        </div>
        <h1 className="text-accent text-sm mt-1">{gameDetails}</h1>
      </div>
    </div>
  );
}

export default GameHolderBox;
