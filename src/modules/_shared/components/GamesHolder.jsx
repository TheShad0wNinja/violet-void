import React, { useState } from "react";
import { GameHolderBox } from "../App";
import rightArrow from "@modules/_shared/Assets/right-arrow.png";
import { motion } from "framer-motion";


function GamesHolder({ Sectionname, games }) {
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
    }}>
      <div className="mt-5 mb-3 flex items-center gap-2">
        <h1 className="text-2xl font-bold">{Sectionname}</h1>
        <button className="w-5 cursor-pointer" onClick={handleNext}>
          <img src={rightArrow} alt="Next" />
        </button>
      </div>

      <div
        className={`grid grid-cols-2 gap-3 transition-all duration-300 ease-in-out md:grid-cols-3 ${
          fade ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {games.map((game, i) => (
          <GameHolderBox
            key={i}
            gameName={game.name}
            gamePrice={game.price}
            gameDetails={game.rating}
            gameImage={game.image}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default GamesHolder;
