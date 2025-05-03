import React from "react";
import { Stars } from "../App";

import { motion } from "framer-motion";

function GameRating({rating}) {
  return (
  <motion.div
         initial={{ scale: 0.8, y: 30, opacity: 0 }}
         whileInView={{ scale: 1, y: 0, opacity: 1 }}
         transition={{
           duration: 1.5,
           ease: [0.16, 1, 0.3, 1]
         }}
         viewport={{ once: true }}

      className="w-full h-fit flex flex-col md:flex-row items-center md:justify-between sm:justify-center mt-8 bg-secondary-900 rounded-2xl p-4"
    >
      <h1 className="text-lg md:text-2xl font-bold mb-2 hidden md:block">
        Rate GameName
      </h1>
      <Stars rating={rating} />
    </motion.div>
  );
}

export default GameRating;
