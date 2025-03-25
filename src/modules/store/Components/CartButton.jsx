import React from "react";
import Cart from "@modules/_shared/Assets/Cart.png";

function CartButton() {
  return (
    <button className="bg-primary flex items-center justify-between w-full rounded-xl p-2.5 pr-3">
      <h1 className="text-md  flex-grow text-center">Add to Cart</h1>
      <img className="w-7 h-7" src={Cart} alt="Cart Icon" />
    </button>
  );
}

export default CartButton;
