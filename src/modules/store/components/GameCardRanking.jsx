import React from "react";

function GameCardRanking({ game }) {
  const { coverImageUrl, title, price, type } = game;

  return (
    <div className="flex w-full cursor-pointer flex-col items-center justify-center transition-transform hover:scale-105 hover:saturate-[120%]">
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl sm:h-[280px] xl:h-[300px]">
        <img
          className="absolute top-1/2 left-1/2 aspect-[3/4] h-full w-full -translate-1/2 object-cover"
          src={coverImageUrl}
          alt={title + " cover"}
        />
      </div>
      <div className="bg-secondary w-fit rounded-br-full p-2 pr-8 font-bold md:text-2xl">
        1.
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
