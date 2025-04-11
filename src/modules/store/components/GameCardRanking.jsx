import React from "react";
function GameCardRanking({ game }) {
  const { coverImageUrl, title, price, type, ranking } = game;

  return (
    <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center transition-transform hover:scale-105 hover:saturate-[120%]">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
        <div className="bg-secondary absolute z-10 w-fit rounded-br-3xl p-2 pl-3 pr-3 font-bold md:text-2xl">
          {ranking + "."}
        </div>
        <img
          className="h-full w-full object-cover object-center"
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
