import { Carousel, Container, GamesHolder } from "@modules/_shared/App";
import { getGamesList, getGamesPageData } from "../utils/mockData";

import CategoriesGrid from "../components/CategoriesGrid";
import GameSection from "../components/GameSection";

const games = getGamesPageData();
const imagesgames = getGamesList();

function Home() {
  return (
    <>
      <Container>
        <Carousel
          items={imagesgames}
          itemsPerPage={1}
          infiniteLoop={true}
          renderItem={panel => <CarouselItem panel={panel} />}
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
        </div>
      </Container>
    </>
  );
}
function CarouselItem({ panel }) {
  return (
    <img
      src={panel.bannerImageUrl}
      alt={panel.id + "_carousel"}
      className="h-full w-full rounded-xl object-cover"
    />
  );
}

export default Home;
