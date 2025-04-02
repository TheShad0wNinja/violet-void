import React from "react";

function GameCardRanking({ game }) {
  const { coverImageUrl, title, price, type, Ranking } = game;

  return (
    <div className="flex w-full cursor-pointer flex-col items-center justify-center transition-transform hover:scale-105 hover:saturate-[120%]">
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl sm:h-[280px] xl:h-[400px]">
      <div className="bg-secondary w-fit z-10 absolute rounded-br-3xl pl-3 pr-3 p-2 font-bold md:text-2xl">
      {Ranking + "."}
      </div>
        <img
          className=" h-full w-full object-cover object-center"
          src={coverImageUrl}
          alt={title + " cover"}
        />
      </div>
     
      <div className="mt-2 flex w-full flex-col">
        <p className="text-xs text-gray-400">{type}</p>
        <p className="line-clamp-2 text-sm font-semibold md:text-base">{title}</p>
        <p className="text-xs text-gray-200 md:text-sm">${price}</p>
      </div>
    </div>
  );
}

export default GameCardRanking;
