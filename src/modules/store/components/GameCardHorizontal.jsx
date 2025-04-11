import React from "react";

const GameCardHorizontal = ({ game }) => {
  return (
    <div className="flex w-full max-w-md overflow-hidden">
      {/* Image on the left */}
      <div className="w-1/3 h-[200px]">
        <img
          src={game.images[0]}
          alt="Game cover"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      {/* Game details on the right */}
      <div className="w-2/3 p-3 text-white">
        <h3 className="mb-2 text-xl font-bold">{game.name}</h3>

        <div className="text-primary-300 mb-2 text-sm">{game.ageRating}</div>

        <div className="text-left">
          <span className="text-md font-semibold"> {game.price}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCardHorizontal;
