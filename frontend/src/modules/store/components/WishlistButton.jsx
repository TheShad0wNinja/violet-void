import React from "react";
import { IconHeartFilled } from "@tabler/icons-react";

function WishlistButton() {
  return <button className="bg-secondary-700 hover:bg-secondary-500 cursor-pointer flex items-center justify-between w-full rounded-xl p-2.5 pr-3">
       <h1 className="text-md  flex-grow text-center">Add to Wishlist</h1>
       <IconHeartFilled size={26} />
     </button>
}

export default WishlistButton;
