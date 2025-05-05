import React, { useState } from "react";
import { GameHolderBox } from "../App";
import { motion } from "framer-motion";
import GameCardFullData from "@modules/store/components/GameCardFullData";
import { IconChevronRight } from "@tabler/icons-react";

function GamesHolder({
  Sectionname,
  games,
  type2games = false,
  detailsOn = true,
  smallerHeight = false
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const gamesPerPage = 2;

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setIndex(prevIndex => (prevIndex + gamesPerPage) % games.length);
      setFade(false);
    }, 300);
  };

  if (!games || games.length === 0) {
    return null;
  }

  const visibleGames = type2games ? games.slice(index, index + gamesPerPage) : games;
  console.log("Visible games:", visibleGames);

  return (
    <div>
      <div className="mt-5 mb-3 flex items-end gap-2">
        <h1 className="text-2xl font-bold">{Sectionname}</h1>
        {type2games && games.length > gamesPerPage && (
          <button className="cursor-pointer" onClick={handleNext}>
            <IconChevronRight size={30} />
          </button>
        )}
      </div>

      <div
        className={`grid gap-3 transition-all duration-300 ease-in-out ${
          type2games ? "grid-cols-1" : "grid-cols-2"
        } md:grid-cols-2 ${fade ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        {type2games
          ? visibleGames.map((game, i) => (
              <GameHolderBox
                key={i}
                gameID={game._id}
                gameName={game.title}
                gamePrice={game.price}
                gameDetails={detailsOn ? game.description : game.rating}
                gameImage={game.images}
                smallerHeight
              />
            ))
          : games.map((game, i) => <GameCardFullData key={game.id || i} game={game} />)}
      </div>
    </div>
  );
}

export default GamesHolder;
