import React, { useState } from "react";
import { getGamesList, getRankingGamesList } from "../utils/mockData";
import { TextInput, Title } from "@modules/_shared/App";
import GameCard from "../components/GameCard.jsx";
import { Container } from "@modules/_shared/App";
import useUrlFilters from "../hooks/useUrlFilters";
import GameCardRanking from "../components/GameCardRanking";

function WishlistPage() {
  const games = getGamesList();
  const Rankedgames = getRankingGamesList();

  const [searchQuery, setSearchQuery] = useState("");
  const { filters, setFilter } = useUrlFilters("");

  return (
    <Container>
      <div className="flex flex-col items-center p-5">
        <div className="flex w-full justify-between p-2">
          <Title>Wishlist</Title>
          <TextInput
            rightSection={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            }
            value={searchQuery}
            setValue={val => setSearchQuery(val)}
            placeholder="Search..."
            onEnter={() => setFilter("search", searchQuery)}
          />
        </div>
        <div className="bg-secondary-900 mt-8 flex h-fit w-full justify-center rounded-2xl p-10">
          <div className="flex h-fit w-full flex-wrap justify-center gap-8">
            {Rankedgames.map((game, index) => (
              <div
                key={game.title}
                className="relative"
                style={{
                  marginTop: game.Ranking > 3 ?  '80px': `${(index % 3) * 40}px`, // Cascading effect for Rank > 3
                }}
              >
                <GameCardRanking game={game} />
              </div>
            ))}
          </div>
        </div>

        <Title>Games</Title>

        <div className="grid grid-cols-2 items-start justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {games.length > 0 && games.map(game => <GameCard game={game} key={game.title} />)}
        </div>

        <Title>Add ons</Title>
        <div className="grid grid-cols-2 items-start justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {games.length > 0 && games.map(game => <GameCard game={game} key={game.title} />)}
        </div>
      </div>
    </Container>
  );
}

export default WishlistPage;
