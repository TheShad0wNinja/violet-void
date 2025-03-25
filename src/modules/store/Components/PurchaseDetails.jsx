import React from "react";
import pfp1 from "@modules/_shared/Assets/pfp1.jpg";
import pfp2 from "@modules/_shared/Assets/pfp2.jpg";
import pfp3 from "@modules/_shared/Assets/pfp3.jpg";
import CartButton from "./CartButton";
import WishlistButton from "./WishlistButton";

function PurchaseDetails() {
  return (
    <div className="w-1/4 h-fit top-20 sticky mt-8">
      <div className="bg-secondary-dark   rounded-2xl">
        <div className="text-2xl font-bold bg-secondary-light w-fit p-2 pr-8 rounded-br-full text-text-dark">
          Game Name
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-md text-text-dark">Recommended by </h1>
            <div className="flex items-center  relative">
              <img src={pfp1} className="rounded-full w-10 h-10 border-2 border-secondary-dark" />
              <img
                src={pfp2}
                className="rounded-full w-10 h-10 border-2 border-secondary-dark -ml-3 z-10"
              />
              <img
                src={pfp3}
                className="rounded-full w-10 h-10 border-2 border-secondary-dark -ml-3 z-20"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-2 mt-3">
            <h1 className="text-md text-text-dark w-auto">Age Rating</h1>
            <h1 className="text-md text-text-dark w-auto text-right">19+</h1>

            <h1 className="text-md text-text-dark w-auto ">Developer</h1>
            <h1 className="text-md text-text-dark w-auto text-right">Ubisoft</h1>

            <h1 className="text-md text-text-dark w-auto ">Release date</h1>
            <h1 className="text-md text-text-dark w-auto text-right">3/10/2023</h1>

            <h1 className="text-md text-text-dark w-auto ">Players</h1>
            <h1 className="text-md text-text-dark w-auto text-right">4,000,000</h1>
          </div>
        </div>
        <div className="p-8 space-y-2">
          <div className="flex justify-between ">
            <h1 className="text-2xl  text-text-dark w-auto">Cost</h1>
            <h1 className="text-2xl font-bold font-display text-text-dark w-auto">$15.55</h1>
          </div>
          <CartButton></CartButton>
          <WishlistButton></WishlistButton>
        </div>
      </div>{" "}
    </div>
  );
}

export default PurchaseDetails;
