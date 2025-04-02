import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getGamesList } from "../utils/mockData";

const CartContext = createContext([]);

function CartProvider({ children }) {
  const [cartItems, setCartItemsState] = useState([]);

  useEffect(() => {
    // console.log("Fetching local storage data");
    // setCartItems(JSON.parse(localStorage.getItem("cart") || "[]"));
    setCartItems(getGamesList().slice(0, 3))
  }, []);

  function setCartItems(newCartItems) {
    // console.log("Cart items changed: ", newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
    setCartItemsState(newCartItems)
  }

  function addCartItem(newItem) {
    const newCartitems = [...cartItems, newItem];
    localStorage.setItem("cart", JSON.stringify(newCartitems))
    setCartItemsState(newCartitems)
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addCartItem }}>{children}</CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) throw new Error("useCart needs to be used within a CartProvider");

  return context;
}

export { CartProvider, useCart };
