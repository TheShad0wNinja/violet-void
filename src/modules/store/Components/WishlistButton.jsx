import React from "react";
import Like from "@modules/_shared/Assets/like.png";

function WishlistButton() {
  return <button className="bg-secondary hover:bg-secondary-600 cursor-pointer flex items-center justify-between w-full rounded-xl p-2.5 pr-3">
       <h1 className="text-md  flex-grow text-center">Add to Wishlist</h1>
       <img className="w-6 h-6" src={Like} alt="Cart Icon" />
     </button>
}

export default WishlistButton;
