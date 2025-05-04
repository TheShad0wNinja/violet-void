import { PurpleHolder } from "@modules/_shared/App";
import React, { useState } from "react";
import { motion } from "framer-motion";

function GenreHolder({ tags, features }) {
  const [showAll, setShowAll] = useState(false); // State to control showing all features

  const getLimitedFeatures = (features, showAll) => {
    return showAll ? features : features.slice(0, 3);
  };

  const limitedFeatures = getLimitedFeatures(features, showAll); // Get features based on showAll state

  return (
    <motion.div
      initial={{ scale: 0.8, y: 30, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-secondary-900 mt-8 flex h-fit w-full rounded-2xl p-4"
    >
      <div className="w-1/2">
        <h1 className="mb-2 text-2xl font-bold">Genre</h1>
        <div className="flex flex-wrap gap-2.5">
          {tags.map((game) => (
            <PurpleHolder key={game._id} propName={game.name} />
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-2xl font-bold">Features</h1>
          {features.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll((prev) => !prev)} 
                className="bg-primary-800 text-sm cursor-pointer text-white py-2 px-2 rounded-2xl hover:bg-primary-600 transition duration-200"
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {limitedFeatures.map((game) => (
            <PurpleHolder key={game._id} propName={game.name} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default GenreHolder;
