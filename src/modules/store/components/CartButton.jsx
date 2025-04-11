import React from "react";
import Cart from "@modules/_shared/Assets/Cart.png";
import { IconShoppingCartFilled } from "@tabler/icons-react";

function CartButton({ onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-primary group disabled:cursor-auto disabled:saturate-50 disabled:text-gray-400 disabled:bg-primary-700 hover:bg-primary-500 flex w-full cursor-pointer items-center justify-between rounded-xl p-2.5 pr-3"
    >
      <h1 className="text-md flex-grow text-center">Add to Cart</h1>
			<IconShoppingCartFilled size={28} />
    </button>
  );
}

export default CartButton;
