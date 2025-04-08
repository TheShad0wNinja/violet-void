import React from "react";
import { Stars } from "../App";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function GameRating({rating}) {
  return (
    <div
      data-aos="fade-up"
      className="w-full h-fit flex flex-col md:flex-row items-center md:justify-between sm:justify-center mt-8 bg-secondary-900 rounded-2xl p-4"
    >
      {/* Hidden on sm, visible from md+ */}
      <h1 className="text-lg md:text-2xl font-bold mb-2 hidden md:block">
        Rate GameName
      </h1>
      <Stars rating={rating} />
    </div>
  );
}

export default GameRating;
