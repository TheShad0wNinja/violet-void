import React from "react";
import { WishlistButton, CartButton, useCart } from "../App";

function PurchaseDetails({ game }) {
  const { addCartItem, cartItems } = useCart();

  return (
    <div className="sticky top-20 mt-5 h-fit md:flex-1/4">
      <div className="bg-secondary-900 rounded-2xl">
        <div className="bg-secondary w-fit rounded-br-full p-2 pr-8 font-bold md:text-2xl">
          {game.name}{" "}
        </div>
        <div className="p-8">
          <div className="mt-3 grid grid-cols-2 gap-y-2">
            <h1 className="text-md text-text-dark w-auto">Age Rating</h1>
            <h1 className="text-md text-text-dark w-auto text-right">{game.ageRating}</h1>

            <h1 className="text-md text-text-dark w-auto">Developer</h1>
            <h1 className="text-md text-text-dark w-auto text-right">{game.developer}</h1>

            <h1 className="text-md text-text-dark w-auto">Release date</h1>
            <h1 className="text-md text-text-dark w-auto text-right">{game.releaseDate}</h1>

            <h1 className="text-md text-text-dark w-auto">Players</h1>
            <h1 className="text-md text-text-dark w-auto text-right">{game.playersAmount}</h1>
          </div>
        </div>
        <div className="space-y-4 p-5">
          <div className="flex justify-between">
            <h1 className="text-text-dark w-auto text-2xl">Cost</h1>
            <h1 className="text-text-dark w-auto text-2xl font-semibold">${game.price}</h1>
          </div>
          <CartButton disabled={cartItems.find(g => g.name === game.name)} onClick={() => addCartItem(game)} />
          <WishlistButton />
        </div>
      </div>
    </div>
  );
}

export default PurchaseDetails;
