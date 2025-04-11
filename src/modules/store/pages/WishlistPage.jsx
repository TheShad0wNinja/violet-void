import React, { useEffect, useState } from "react";
import { getGamesList, getRankingGamesList } from "../utils/mockData";
import { Pagination, TextInput, Title, Container } from "@modules/_shared/App";
import { GameCard, GameCardRanking } from "../App";
import useUrlFilters from "../hooks/useUrlFilters";
import { IconSearch } from "@tabler/icons-react";

function mockPagination(page, limit = 8) {
  const games = getGamesList();

  const pagedGameList = games.slice(page * limit, page * limit + limit);

  return { totalGameCount: games.length, gameList: pagedGameList };
}
function WishlistPage() {
  const [games, setGames] = useState([]);
  const [dlcs, setDlcs] = useState([]);

  const Rankedgames = getRankingGamesList();
  const [searchQuery, setSearchQuery] = useState("");
  const { filters, setFilter } = useUrlFilters({ page: 1, pagedlc: 1 });
  const [gamesTotalCount, setGamesTotalCount] = useState(20);
  const [dlcsTotalCount, setDlcsTotalCount] = useState(20);

  useEffect(() => {
    const { totalGameCount, gameList } = mockPagination(Number(filters.page ?? 1) - 1);
    setGamesTotalCount(totalGameCount);
    setGames(gameList);
  }, [filters.page]);

  useEffect(() => {
    const { totalGameCount, gameList } = mockPagination(Number(filters.pagedlc ?? 1) - 1);
    setDlcsTotalCount(totalGameCount);
    setDlcs(gameList);
  }, [filters.pagedlc]);

  return (
    <Container>
      <div className="flex flex-col items-center p-5">
        <div className="flex w-full justify-between p-2">
          <Title>Wishlist</Title>
          <TextInput
            rightSection={<IconSearch size={20} />}
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
                  marginTop: game.ranking > 3 ? "80px" : `${(index % 3) * 40}px` // Cascading effect for Rank > 3
                }}
              >
                <GameCardRanking game={game} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Title>Games</Title>

          <div className="mt-5  grid grid-cols-2 items-start justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {games.length > 0 && games.map(game => <GameCard game={game} key={game.title} />)}
          </div>
          <Pagination
            totalItems={gamesTotalCount}
            itemsPerPage={8}
            onPageChange={page => setFilter("page", page)}
            currentPage={Number(filters["page"])}
            maxVisiblePages={7}
          />

          <Title>Add ons</Title>
          <div className="grid grid-cols-2 items-start justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {dlcs.length > 0 && dlcs.map(game => <GameCard game={game} key={game.title} />)}
          </div>
          <Pagination
            totalItems={dlcsTotalCount}
            itemsPerPage={8}
            onPageChange={pagedlc => setFilter("pagedlc", pagedlc)}
            currentPage={Number(filters["pagedlc"])}
            maxVisiblePages={7}
          />
        </div>
      </div>
    </Container>
  );
}

export default WishlistPage;
