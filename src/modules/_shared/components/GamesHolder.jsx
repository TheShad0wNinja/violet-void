import React, { useState } from "react";
import { GameHolderBox } from "../App";
import rightArrow from "@modules/_shared/Assets/right-arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";

function GamesHolder({ Sectionname }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const gameSets = [
    [
      { gameName: "Game 1", gamePrice: "$10.99", gameDetails: "Details of Game 1" },
      { gameName: "Game 2", gamePrice: "$14.99", gameDetails: "Details of Game 2" },
      { gameName: "Game 3", gamePrice: "$19.99", gameDetails: "Details of Game 3" }
    ],
    [
      { gameName: "Game 4", gamePrice: "$12.49", gameDetails: "Details of Game 4" },
      { gameName: "Game 5", gamePrice: "$8.99", gameDetails: "Details of Game 5" },
      { gameName: "Game 6", gamePrice: "$16.99", gameDetails: "Details of Game 6" }
    ],
    [
      { gameName: "Game 7", gamePrice: "$9.99", gameDetails: "Details of Game 7" },
      { gameName: "Game 8", gamePrice: "$18.99", gameDetails: "Details of Game 8" },
      { gameName: "Game 9", gamePrice: "$11.99", gameDetails: "Details of Game 9" }
    ]
  ];

  const handleNext = () => {
    setFade(true); // Start animation
    setTimeout(() => {
      setIndex(prevIndex => (prevIndex + 1) % gameSets.length);
      setFade(false);
    }, 300);
  };

  return (
    <div>
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
        {gameSets[index].map((game, i) => (
          <GameHolderBox
            key={i}
            gameName={game.gameName}
            gamePrice={game.gamePrice}
            gameDetails={game.gameDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default GamesHolder;
