import React from "react";

function GameHolderBox({ gameName, gamePrice, gameDetails, gameImage, smallerHeight }) {
  return (
    <div data-aos="fade-up" className="group h-full w-full cursor-pointer overflow-hidden">
      {/* Image Container */}
      <div
        className={`relative overflow-hidden rounded-2xl ${smallerHeight ? "h-[280px]" : "h-[250px]"}`}
      >
        <img
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={gameImage}
          alt={gameName}
        />
      </div>

      {/* Game Info */}
      <div className="space-y-2 p-3">
        <div className="flex w-full justify-between">
          <h1 className="line-clamp-1 text-lg font-semibold">{gameName}</h1>

          <h1 className="line-clamp-1 text-lg font-semibold"> {gamePrice}</h1>
        </div>

        {gameDetails && (
          <div className="flex items-center justify-between">
            <span className="bg-accent/10 text-accent rounded-md px-2 py-1 text-xs">
              ★ {gameDetails}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameHolderBox;
