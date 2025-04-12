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

  if (!games) {
    return <h1>no games</h1>;
  }
  const handleNext = () => {
    setFade(true); // Start animation
    setTimeout(() => {
      setIndex(prevIndex => (prevIndex + 1) % games.length);
      setFade(false);
    }, 300);
  };
  if (!games || games.length === 0) {
    return <h1>No games available</h1>;
  }

  return (
    <motion.div
      initial={{ scale: 0.8, y: 30, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <div className="mt-5 mb-3 flex items-end gap-2">
        <h1 className="text-2xl font-bold">{Sectionname}</h1>
        <button className="cursor-pointer" onClick={handleNext}>
          <IconChevronRight size={30} />
        </button>
      </div>

      <div
        className={`grid gap-3 transition-all duration-300 ease-in-out ${
          type2games ? "grid-cols-1" : "grid-cols-2"
        } md:grid-cols-2 ${fade ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        {type2games &&
          games.map((game, i) => (
            <GameHolderBox
              key={i}
              gameName={game.name}
              gamePrice={game.price}
              gameDetails={detailsOn ? game.details : game.rating}
              gameImage={Array.isArray(game.images) ? game.images[0] : game.image}
              smallerHeight
            />
          ))}
        {!type2games && games.map((game, i) => <GameCardFullData key={game.id} game={game} />)}
      </div>
    </motion.div>
  );
}

export default GamesHolder;
