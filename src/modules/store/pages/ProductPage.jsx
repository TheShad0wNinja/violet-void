import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@modules/_shared/components/Container";
import { GamesHolder } from "@modules/_shared/App";
import {
  GameRequirements,
  GenreHolder,
  PhotoCollage,
  PurchaseDetails,
  GameRating
} from "@modules/store/App";
import { getGamesPageData, getSimilarGamesData } from "../utils/mockData";
import StarChecked from "@modules/_shared/Assets/starLighter.png";
import AOS from "aos";

import "aos/dist/aos.css"; // Import AOS styles

function ProductPage() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const { id } = useParams();
  const game = getGamesPageData().find(g => g.id == id);


  if (!game) {
    return <h1>Game not found</h1>; // switch to 404 page later
  }

  const similarGameList = getSimilarGamesData().filter(g => game.similarGames.includes(g.name));

  return (
    <Container>
      <div className="m-5">
        <div className="mb-3.5 flex gap-5">
          <h1 className="text-3xl font-bold">{game.name}</h1>
          <div className="bg-secondary flex items-center justify-center gap-1.5 rounded-md pr-1.5 pl-1.5">
            <h1 className="text-accent text-xl font-semibold">{game.rating}</h1>
            <div className="h-5 w-5">
              <img className="object-cover" src={StarChecked} />
            </div>
          </div>
        </div>
        <div className="from-accent via-accent to-background h-[1px] w-[90] bg-gradient-to-r"></div>
        {/*faded line*/}
        <div className="sm:flex-n items-start gap-4 md:flex">
          <div className="md:flex-3/4" data-aos="fade-up">
            <PhotoCollage images={game.images} />
            <div>
              <h1 className="mt-4" data-aos="fade-up">
                {game.description}
              </h1>
              <GenreHolder tags={game.tags} features={game.gameFeatures} />
              <h1 className="mt-5 w-fit text-2xl font-bold" data-aos="fade-up">
                More about {game.name}
              </h1>
              <h1 className="text-text-dark m-2 w-fit" data-aos="fade-up">
                {game.detailedDescription}
              </h1>
              <GameRating rating={game.rating} />
            </div>
          </div>

          <PurchaseDetails game={game} />
        </div>
        <div className="my-4" data-aos="fade-up">
          <h1 className="mt-5 text-2xl font-bold">System requirements</h1>
          <GameRequirements requirements={game.requirements} />
          <GamesHolder Sectionname="Game DLCS" games={similarGameList} />
          <GamesHolder Sectionname="Games similar to" games={similarGameList} />
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
