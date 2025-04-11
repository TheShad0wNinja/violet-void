import React, { useState } from "react";
import { getGamesList } from "../utils/mockData";
import { Button, Container, Divider, Title } from "@modules/_shared/App";
import { useCart } from "../context/cartContext";
import { Link } from "react-router";

const games = getGamesList().slice(0, 3);

export default function CartPage() {
  const { cartItems, setCartItems } = useCart();

  const priceTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Remove item from cart
  const handleRemove = item => {
    setCartItems(cartItems.filter(i => i.name !== item.name));
  };

	console.log(cartItems)

  return (
    <Container>
      <Title withDivider>My Cart</Title>
      {cartItems.length === 0 ? (
        <h1 className="text-2xl">You don't have anything in your cart</h1>
      ) : (
        <div className="flex w-full flex-col justify-stretch gap-10 md:flex-row">
          <div className="grid flex-3/5 gap-2">
            {cartItems.map((item, idx) => (
              <React.Fragment key={item.name}>
                <div className="flex gap-2">
                  <img
                    className="h-[200px] w-[180px] flex-none rounded-lg object-cover"
                    src={item.images[0]}
                    alt={item.name + " Cover"}
                  />
                  <div className="flex w-full flex-col flex-nowrap gap-2">
                    <h3 className="text-lg font-bold sm:text-xl lg:text-2xl">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <h6 className="text-lg text-gray-200">${item.price - item.discount}</h6>
											<h5 className="text-sm text-gray-200">{item.releaseDate}</h5>
                    </div>
										<p className="text-sm text-gray-400 line-clamp-3">{item.description}</p>
                    <div className="mt-auto self-end">
                      <button
                        onClick={() => handleRemove(item)}
                        className="cursor-pointer rounded-lg bg-red-800 px-2.5 py-2 text-sm hover:bg-red-700 active:scale-95"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                {idx !== cartItems.length - 1 && <Divider className="my-4" />}
              </React.Fragment>
            ))}
          </div>
          <div className="flex-2/5">
            <h3 className="mb-4 text-2xl font-semibold">Items Summary</h3>
            <div className="flex w-full flex-nowrap justify-between">
              <p>Total Price</p>
              <p className="text-lg font-bold">${priceTotal}</p>
            </div>
            <Link
              to="checkout"
              className="bg-primary hover:bg-primary-500 mt-4 block w-full cursor-pointer rounded-md p-2 text-center"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
}
