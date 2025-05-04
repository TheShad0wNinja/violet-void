import React from "react";
import { motion } from "framer-motion";

function GameRequirements({ requirements }) {
  const { minimum, recommended } = requirements;

  return (
     <div
           className="mt-8 bg-secondary-900 w-full rounded-2xl p-4">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 my-8">
        {/* Minimum Requirements */}
        <div className="ml-4">
          <h1 className="text-xl font-semibold mb-2">Minimum</h1>
          <div className="grid grid-cols-2 gap-y-2 mt-3">
            {minimum && Object.entries(minimum).map(([key, value]) => (
              <React.Fragment key={key}>
                <h1 className="text-md text-text-dark w-auto">{key}</h1>
                <h1 className="text-md text-text-dark w-auto">{value}</h1>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Recommended Requirements */}
        <div className="ml-4">
          <h1 className="text-xl font-semibold mb-2">Recommended</h1>
          <div className="grid grid-cols-2 gap-y-2 mt-3">
            {recommended && Object.entries(recommended).map(([key, value]) => (
              <React.Fragment key={key}>
                <h1 className="text-md text-text-dark w-auto">{key}</h1>
                <h1 className="text-md text-text-dark w-auto">{value}</h1>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameRequirements;
