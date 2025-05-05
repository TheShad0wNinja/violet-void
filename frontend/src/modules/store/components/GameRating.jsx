import React from "react";
import { Stars } from "../App";

import { motion } from "framer-motion";

function GameRating({rating,gameName}) {
  return (
  <div
        
      className="w-full h-fit flex flex-col md:flex-row items-center md:justify-between sm:justify-center mt-8 bg-secondary-900 rounded-2xl p-4"
    >
      <h1 className="text-lg md:text-2xl font-bold mb-2 hidden md:block">
         {gameName} Rating
      </h1>
      <Stars rating={rating} />
    </div>
  );
}

export default GameRating;
