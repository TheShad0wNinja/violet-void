import React, { useEffect } from "react";
import Stars from "../Components/Stars";
import PhotoCollage from "../Components/PhotoCollage";
import PurchaseDetails from "../Components/PurchaseDetails";

import Container from "@modules/_shared/components/Container";
import GenreHolder from "../Components/GenreHolder";
import GameRequirements from "../Components/GameRequirements";
import GamesHolder from "@modules/_shared/components/GamesHolder";
import StarChecked from "@modules/_shared/Assets/starLighter.png";
import AOS from "aos";

import "aos/dist/aos.css"; // Import AOS styles
import GameRating from "../Components/GameRating";
function ProductPage() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  

  return (
    <Container>
      <div>
        <div className="flex  gap-5 mb-3.5">
          <h1 className="text-3xl font-bold ">Game Name</h1>
          <div className="flex justify-center items-center gap-1.5 bg-secondary-light  pl-1.5 pr-1.5 rounded-md  ">
            <h1 className="text-xl  font-semibold text-primary  ">6.4</h1>
            <div className="w-5 h-5">
              <img className="object-cover" src={StarChecked} />
            </div>
          </div>
        </div>
        <div className="w-[90] h-[1px]  bg-gradient-to-r  from-accent via-accent to-background"></div>
        {/*faded line*/}
        <div className="md:flex sm:flex-n gap-4 items-start ">
          <div className="md:w-[75%] sm:w-fit" data-aos="fade-up">
            <PhotoCollage></PhotoCollage>
            <div >
              <h1 className="mt-4" data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem nisl,
                tempus eu mattis sed, tincidunt vel dui. Nam felis ante, condimentum sit amet Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem nisl, tempus eu
                mattis sed, tincidunt vel dui. Nam felis ante, condimentum sit amet
              </h1>
              <GenreHolder></GenreHolder>
              <h1 className="text-2xl m-2 font-bold w-fit  mt-5 " data-aos="fade-up">
                More about Gamename
              </h1>
              <h1 className="m-2  w-fit text-text-dark" data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem nisl,
                tempus eu mattis sed, tincidunt vel dui. Nam felis ante, condimentum sit amet
                facilisis in, vestibulum non nisl. Integer eu ligula commodo, blandit sem ut,
                porttitor neque. Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Phasellus quis eros id erat scelerisque tempor. Vivamus vel
                sem sit amet felis condimentum volutpat ut non augue. Donec finibus cursus risus id
                tristique. Nulla fermentum non odio ut vehicula. Duis posuere lectus id ligula
                feugiat, eu porta orci porta. Phasellus at tempus nibh, et sollicitudin tortor.
              </h1>
              <GameRating></GameRating>
            </div>
          </div>

          <PurchaseDetails></PurchaseDetails>
        </div>
        <div className="w-[95%] m-4" data-aos="fade-up">
          <h1 className="text-2xl m-2 font-bold w-fit  mt-5 ">System requirements</h1>
          <GameRequirements></GameRequirements>
          <GamesHolder Sectionname="Game DLCS"></GamesHolder>
          <GamesHolder Sectionname="Game similar to"></GamesHolder>
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
