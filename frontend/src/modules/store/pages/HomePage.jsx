import {
  Carousel,
  Container,
  Divider,
  GamesHolder,
  SkeletonBox,
  Title
} from "@modules/_shared/App";
import { getGamesList, getGamesPageData, getSimilarGamesData } from "../utils/mockData";
import { getShuffledArtworks } from "@modules/community/utils/mockUserData";
import { ArtworkComponent, MoreButton } from "@modules/community/App";

import { useState } from "react";
import GameCardFullData from "../components/GameCardFullData";
import CategoriesGrid from "../components/CategoriesGrid";
import GameSection from "../components/GameSection";

const games = getGamesPageData();
const imagesgames = getGamesList();

const artworks = getShuffledArtworks();

function Home() {
  return (
    <>
      <Container>
				<Carousel 
					items={imagesgames}
					itemsPerPage={1}
					infiniteLoop={true}
					renderItem={(panel) => <CarouselItem panel={panel} />}
					containerClass="max-h-[500px]"
				/>
        <div className="p-5">
					<div className="hidden md:block">
						<GamesHolder Sectionname="Trending games" games={games} />
					</div>
          <GamesHolder Sectionname="Lastest Games" type2games games={games} smallerHeight />
          <div className="mt-5 mb-3 flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Browse by genre</h1>
            <CategoriesGrid />
          </div>
          <div className="flex flex-wrap">
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
  return (
		<img src={panel.bannerImageUrl} alt={panel.id+"_carousel"} className="w-full h-full object-cover rounded-xl" />
  );
}

export default Home;
