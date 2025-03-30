import React from "react";
import Stars from "../Components/Stars";
import AOS from "aos";

import "aos/dist/aos.css"; // Import AOS styles
function GameRating() {
  return (
    <div data-aos="fade-up" className="w-full h-fit  justify-between mt-8  bg-secondary-dark  flex  rounded-2xl  p-4 ">
      <h1 className="text-xl font-bold mb-2">Rate GameName</h1>
      <Stars></Stars>
    </div>
  );
}

export default GameRating;
