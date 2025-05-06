import React from "react";

function GameCardRanking({ game, ImageHeight = false }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="flex h-full w-full cursor-pointer flex-col items-center justify-start transition-transform hover:scale-105 hover:saturate-[120%]">
      <div className="relative w-full overflow-hidden rounded-xl">
 
        <img
          className={`w-full object-cover object-top ${ImageHeight ? "h-[300px]" : "h-[400px]"}`}
          src={backendUrl + game.images.cover}
          alt={game.title + " cover"}
        />
      </div>

      <div className="mt-2 flex w-full flex-col">
        <p className="text-xs text-gray-400">{game.type}</p>
        <p className="line-clamp-2 text-sm font-semibold md:text-base">{game.title}</p>
        <p className="text-xs text-gray-200 md:text-sm">${game.price}</p>
      </div>
    </div>
  );
}

export default GameCardRanking;
