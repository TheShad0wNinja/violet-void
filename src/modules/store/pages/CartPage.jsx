import { useState } from "react";
import { getGamesList } from "../utils/mockData";
import { Container } from "@modules/_shared/App";

const games = getGamesList().slice(0, 3);

export default function CartPage() {
  const [cartItems, setCartItems] = useState(games);

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  // Remove item from cart
  const removeItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Container>
      <h1 className="mb-8 text-3xl font-bold">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="py-12 text-center">
          <p className="mb-4 text-xl">Your cart is empty</p>
          <button className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
            Browse Games
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="hidden grid-cols-12 bg-gray-100 p-4 font-medium md:grid">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>

              {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-12 items-center border-b p-4">
                  {/* Product Info */}
                  <div className="col-span-6 flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mr-4 h-16 w-16 rounded object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="mt-1 text-sm text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-center">
                    <span className="mr-2 text-gray-500 md:hidden">Price:</span>$
                    {item.price.toFixed(2)}
                  </div>

                  {/* Quantity */}
                  <div className="col-span-2 flex justify-center">
                    <div className="flex items-center rounded-md border">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-lg"
                      >
                        -
                      </button>
                      <span className="border-x px-3 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="col-span-2 text-center">
                    <span className="mr-2 text-gray-500 md:hidden">Total:</span>$
                    {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-bold">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>

                <div className="flex justify-between border-t pt-4 text-lg font-bold">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <button className="mt-4 w-full rounded-md bg-green-500 py-3 font-medium text-white hover:bg-green-600">
                  Proceed to Checkout
                </button>

                <p className="mt-2 text-center text-sm text-gray-500">
                  or{" "}
                  <a href="#" className="text-blue-500">
                    Continue Shopping
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
