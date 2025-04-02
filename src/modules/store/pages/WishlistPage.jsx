import React from "react";
import { getGamesList } from "../utils/mockData";
import { Title } from "@modules/_shared/App";
import GameCard from "../components/GameCard.jsx";
import { Container,  } from "@modules/_shared/App";

function WishlistPage() {
  const games = getGamesList();

  return (
    <Container>
    <div>
      <div>
        <Title>Wishlist</Title>
      </div>
      <div className="bg-secondary-900 mt-8 flex h-fit w-full rounded-2xl p-4"></div>
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
