import React from "react";
import Stars from "../Components/Stars";
import PhotoCollage from "../Components/PhotoCollage";
import PurchaseDetails from "../Components/PurchaseDetails";

import Container from "@modules/_shared/components/Container";
import GenreHolder from "../Components/GenreHolder";

function ProductPage() {
  return (
    <Container>
      <div>
        <div className="flex justify-between mb-3.5">
          <h1 className="text-3xl font-bold ">Game Name</h1>
          <div className="flex justify-center items-center gap-3">
            <h1 className="text-2xl  font-semibold text-primary font-display">6.4</h1>
            <Stars></Stars>
          </div>
        </div>
        <div className="w-[90] h-[1px]  bg-gradient-to-r  from-accent via-accent to-background"></div>
        {/*faded line*/}
        <div className="flex gap-8  items-start">
          <div className="w-[75%]">
            <PhotoCollage></PhotoCollage>
            <div className="mt-4">
              <h1 className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem nisl,
                tempus eu mattis sed, tincidunt vel dui. Nam felis ante, condimentum sit amet Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem nisl, tempus eu
                mattis sed, tincidunt vel dui. Nam felis ante, condimentum sit amet
              </h1>
              <GenreHolder></GenreHolder>
            </div>
          </div>

          <PurchaseDetails></PurchaseDetails>
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
