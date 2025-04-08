import React from "react";

function GameHolderBox({ gameName, gamePrice, gameDetails ,gameImage}) {
  return (
    <div data-aos="fade-up" className="cursor-pointer w-full h-full">
      {/* Image Container */}
      <div className="max-w-xs md:max-w-md lg:max-w-lg h-[65%]">
  <img className="w-full h-full object-cover" src={gameImage} />
</div>

      {/* Game Info */}
      <div className="p-3">
        <div className="flex justify-between">
          <h1 className="text-sm font-bold md:text-lg">{gameName}</h1>
          <h1 className="text-sm font-bold md:text-lg text-text-dark">
            {gamePrice}
          </h1>
        </div>
        <h1 className="text-accent text-sm mt-1 md:text-lg">{gameDetails}</h1>
      </div>
    </div>
  );
}

export default GameHolderBox;
