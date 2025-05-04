import React from "react";
import GameCardHorizontal from "./GameCardHorizontal";


// GameSection.jsx
const GameSection = ({ games, sectionName = "" }) => {
    return (
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-5">{sectionName}</h1>
        <div className="space-y-4">
          {games?.map((game, index) => (
            <GameCardHorizontal game={game} key={index} />
          ))}
        </div>
      </div>
    );
  };

export default GameSection;
