import { PurpleHolder } from "@modules/_shared/App";
import React from "react";
import { motion } from "framer-motion";

function GenreHolder({ tags,features }) {
  return (
    <motion.div
    initial={{ scale: 0.8, y: 30, opacity: 0 }}
    whileInView={{ scale: 1, y: 0, opacity: 1 }}
    viewport={{ once: true }}

    transition={{
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1]
      
    }} className="bg-secondary-900 mt-8 flex h-fit w-full rounded-2xl p-4">
      <div className="w-1/2">
        <h1 className="mb-2 text-2xl font-bold">Genre</h1>
        <div className="flex flex-wrap gap-2.5">
          {tags.map((game, index) => (
            <PurpleHolder key={game._id} propName={game.name}></PurpleHolder>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="mb-2 text-2xl font-bold">Features</h1>
        <div className="flex flex-wrap gap-2.5">
        {features.map((game, index) => (
            <PurpleHolder key={game._id} propName={game.name}></PurpleHolder>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default GenreHolder;
