import { Container, Divider, Title, TextInput, Button, Pagination } from "@modules/_shared/App";
import { getGamesList } from "../utils/mockData";
import GameCard from "../components/GameCard";
import { useEffect, useRef, useState } from "react";
import useUrlFilters from "../hooks/useUrlFilters";
import LibraryBanner from "../components/LibraryBanner";

function mockPagination(page, limit = 8) {
  const games = getGamesList();

  const pagedGameList = games.slice(page * limit, page * limit + limit);

  return { totalGameCount: games.length, gameList: pagedGameList };
}
const defaultBanner = "https://i.pinimg.com/736x/6f/c6/a2/6fc6a21697bfb51e7e8b84574362a020.jpg";

export default function LibraryPage() {
  const [bannerUrl, setBannerUrl] = useState([defaultBanner, defaultBanner]);
  const [selectedGame, setSelectedGame] = useState(null);
  const firstBannerTurn = useRef(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [gamesTotalCount, setGamesTotalCount] = useState(0);

  const { filters, setFilter } = useUrlFilters({ search: "", sortBy: "", tag: "", page: 0 });

  const [games, setGames] = useState([]);

  useEffect(() => {
    const { totalGameCount, gameList } = mockPagination(Number(filters.page ?? 1) - 1);
    setGamesTotalCount(totalGameCount);
    setGames(gameList);
  }, [filters.page]);

  const handleHover = game => {
    if (game.bannerImageUrl === bannerUrl[1]) return;

    firstBannerTurn.current = !firstBannerTurn.current;
    setBannerUrl([bannerUrl[1], game.bannerImageUrl ?? defaultBanner]);
    setSelectedGame(game);
  };

  return (
    <>
      <LibraryBanner
        selectedGame={selectedGame}
        bannerUrl={bannerUrl}
        firstBannerTurn={firstBannerTurn.current}
      />

      <Container className="mt-8">

        {/* Filters */}
        <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row">
          <div className="flex gap-2">
            <Button onClick={() => setFilter("tag", "")} className="text-sm md:text-base">
              All Games
            </Button>
            <Button onClick={() => setFilter("tag", "favorite")} className="text-sm md:text-base">
              Favorite Games
            </Button>
            <Button onClick={() => setFilter("tag", "newest")} className="text-sm md:text-base">
              Newest Additions
            </Button>
          </div>
          <TextInput
            rightSection={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
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

        <Divider direction="left" className="mb-4" />

        {/* Game Grid */}
        <div className="grid grid-cols-2 items-start justify-center gap-4 rounded-md sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {games.length > 0 &&
            games.map(game => (
              <GameCard
                onMouseOver={() => handleHover(game)}
                withoutPrice
                withoutType
                game={game}
                key={game.title}
              />
            ))}
        </div>

        <Pagination
          totalItems={gamesTotalCount}
          itemsPerPage={8}
          onPageChange={page => setFilter("page", page)}
          maxVisiblePages={7}
        />
      </Container>
    </>
  );
}
