import {
  Carousel,
  Container,
  Divider,
  GamesHolder,
  SkeletonBox,
  Title
} from "@modules/_shared/App";
import { getGamesPageData, getSimilarGamesData } from "../utils/mockData";
import { getShuffledArtworks } from "@modules/community/utils/mockUserData";
import { ArtworkComponent, MoreButton } from "@modules/community/App";

import { useState } from "react";
import GameCardFullData from "../components/GameCardFullData";
import CategoriesGrid from "../components/CategoriesGrid";
import GameSection from "../components/GameSection";

const games = getGamesPageData();
const imagesgames = getSimilarGamesData();

const artworks = getShuffledArtworks();


function Home() {
  return (
    <>
      <Container>
        {/* Carousel Section */}
        <div className="h-[200px] w-full">
          <Carousel
              items={artworks}
              renderItem={panel => <CarouselItem panel={panel} />}
              itemsPerPage={1}
              autoSlideInterval={10000}
              showIndicators={false}
              itemClass="bg-secondary-800 flex justify-center"
              containerClass="h-10 rounded-2xl block sm:hidden"
              infiniteLoop={true}
            />
            <Carousel
              items={artworks}
              renderItem={panel => <CarouselItem panel={panel} />}
              itemsPerPage={1}
              autoSlideInterval={10000}
              showIndicators={false}
              itemClass="bg-secondary-800 flex justify-center"
              containerClass="mx-auto w-full rounded-2xl hidden sm:block md:hidden"
              infiniteLoop={true}
            />
            <Carousel
              items={artworks.slice(0, 12)}
              renderItem={panel => <CarouselItem panel={panel} />}
              itemsPerPage={1}
              autoSlideInterval={10000}
              showIndicators={true}
              itemClass="bg-secondary-800 flex justify-center"
              containerClass="mx-auto w-full rounded-2xl hidden md:block"
              infiniteLoop={true}
            />
        </div>

        <div className="p-5">
          <GamesHolder Sectionname="Trending games" games={games} />
          <GamesHolder
            Sectionname="Lastest Games"
            type2games
            games={games}
            smallerHeight
          />
          <div className="mt-5 mb-3 flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Browse by genre</h1>
            <CategoriesGrid />
          </div>
          <div className="flex">
            <GameSection games={games} sectionName="Upcoming" />
            <GameSection games={games} sectionName="Under $20" />
            <GameSection games={games} sectionName="On sale" />
          </div>
          <ArtworkComponent />
        </div>
      </Container>
    </>
  );
}
function CarouselItem({ panel }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-h[500px] h-[500px] grid w-full grid-cols-1 justify-center px-2 py-2">
      <img
        key={imagesgames.id}
        src={imagesgames.image}
        onLoad={() => setLoading(false)}
        className={`${loading ? "hidden" : ""} bg-secondary-800 h-full w-full rounded-2xl object-cover`}
      />
    </div>
  );
}

export default Home;
