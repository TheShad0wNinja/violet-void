import { getGamesList } from "../utils/mockData";
import { Container, Divider, Title } from "@modules/_shared/App";
import GameCard from "../components/GameCard.jsx";
import FilterBtn from "../components/filters/FilterBtn";
import FilterDrawer from "../components/filters/FilterDrawer";
import { useState } from "react";
import useUrlFilters from "../hooks/useUrlFilters";

export default function BrowsePage() {
  const games = getGamesList();
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const {filters} = useUrlFilters();
  console.log(filters);
  return (
    <>
      <Container>
        <div className="flex justify-between">
          <Title>Browse Games</Title>
          <FilterBtn onClick={() => setFilterDrawerOpen(!filterDrawerOpen)} />
        </div>
        <Divider direction="left" className="mb-5" />
        <div className="flex gap-4">
          <div className="grid grid-cols-2 items-start justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {games.length > 0 && games.map(game => <GameCard game={game} key={game.title} />)}
          </div>
          <FilterDrawer isOpen={filterDrawerOpen} setIsOpen={setFilterDrawerOpen} />
        </div>
      </Container>
    </>
  );
}
