import React from "react";
import { Link } from "react-router";

const GameCardHorizontal = ({ game }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const coverImages = backendUrl + game.images?.cover;
  return (
    <Link to={`/store/product/${game._id}`}>

    <div className="flex w-full max-w-md overflow-hidden">
      {/* Image on the left */}
      <div className="w-1/3 h-[200px]">
        <img
          src={coverImages}
          alt="Game cover"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      {/* Game details on the right */}
      <div className="w-2/3 p-3 text-white">
        <h3 className="mb-2 text-xl font-bold">{game.title}</h3>

        <div className="text-primary-300 mb-2 text-sm">{game.ageRating}</div>

        <div className="text-left">
          <span className="text-md font-semibold"> {game.price == 0 ? "Free" : "$" + game.price }</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default GameCardHorizontal;
