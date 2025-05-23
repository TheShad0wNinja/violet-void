import { getGamesList } from "../utils/mockData";
import { Carousel, Container, Divider, Title } from "@modules/_shared/App";
import GameCard from "../components/GameCard.jsx";
import FilterBtn from "../components/filters/FilterBtn";
import FilterDrawer from "../components/filters/FilterDrawer";
import { useState } from "react";
import useUrlFilters from "../hooks/useUrlFilters";
import { Link } from "react-router";

export default function BrowsePage() {
  const games = getGamesList();
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const { filters } = useUrlFilters();
  return (
    <>
      <Container>
				<Carousel 
					items={games}
					renderItem={ (game) =>
						<img src={game.bannerImageUrl} className="w-full h-full object-cover" alt={game.title + "_banner"} />
					}
					itemsPerPage={1}
					containerClass="mb-8 rounded-xl"
				/>
        <div className="flex justify-between">
          <Title>Browse Games</Title>
          <FilterBtn onClick={() => setFilterDrawerOpen(!filterDrawerOpen)} />
        </div>
        <Divider direction="left" className="mb-5" />
        <div className="flex gap-4">
          <div className="grid grid-cols-2 items-start justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {games.length > 0 &&
              games.map((game, idx) => (
                <Link key={game.title} to={`/store/product/${(idx % 2) + 101}`}>
                  <GameCard  game={game} />
                </Link>
              ))}
          </div>
          <FilterDrawer isOpen={filterDrawerOpen} setIsOpen={setFilterDrawerOpen} />
        </div>
      </Container>
    </>
  );
}
