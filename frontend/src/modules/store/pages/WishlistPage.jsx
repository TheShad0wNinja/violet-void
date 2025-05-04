import React, { useEffect, useState } from "react";
import { getGamesList, getRankingGamesList } from "../utils/mockData";
import { Pagination, TextInput, Title, Container } from "@modules/_shared/App";
import { GameCard, GameCardRanking } from "../App";
import useUrlFilters from "../hooks/useUrlFilters";
import { IconSearch } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import axios from "axios";

function WishlistPage() {
  const [Games, setGames] = useState([]);
  const [dlcs, setDlcs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { id } = useParams();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { filters, setFilter } = useUrlFilters({ page: 1, pagedlc: 1 });

  const Rankedgames = getRankingGamesList();
  const allGames = getGamesList();

  const itemsPerPage = 8;
  const [gamesTotalCount, setGamesTotalCount] = useState(0);
  const [gamesPageData, setGamesPageData] = useState([]);
  const gameDetails =[];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchWishlist() {
      try {
        // Fetch the wishlist which contains game IDs
        const res = await axios.get(`${backendUrl}/api/wishlist/${id}`);
        const gameIds = res.data || [];
        console.log("made it ehere");

        if (gameIds.length > 0) {
          
          for (const gameId of gameIds) {
            try {
                const response = await axios.get(`${backendUrl}/api/games/${gameId}`);
                gameDetails.push(response.data);
            } catch (error) {
                console.error(`Error fetching details for game ID ${gameId}:`, error);
            }
        }          // Separate the games into base games and DLCs
          const baseGamesList = gameDetails.data.filter(game => game.type !== "dlc");
          const dlcsList = gameDetails.data.filter(game => game.type === "dlc");
          console.log(baseGamesList);
          setGames(baseGamesList);
          setDlcs(dlcsList);
        }
      } catch (err) {
        console.error("Failed to load wishlist:", err);
      }
    }

    fetchWishlist();
  }, [id]);

 
  // Handle pagination for games (mock data)
  useEffect(() => {
    const page = Number(filters.page ?? 1);
    const filteredGames = allGames.filter(game =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setGamesPageData(filteredGames.slice(startIndex, endIndex));
    setGamesTotalCount(filteredGames.length);
  }, [filters.page, searchQuery]);

  return (
    <Container>
      <div className="flex flex-col items-center p-5">
        <div className="flex w-full justify-between p-2">
          <Title>Wishlist</Title>
          <TextInput
            rightSection={<IconSearch size={20} />}
            value={searchQuery}
            setValue={setSearchQuery}
            placeholder="Search..."
            onEnter={() => setFilter("page", 1)}
          />
        </div>

        {/* RANKED GAMES */}
        <motion.div
          initial={{ scale: 0.8, y: 30, opacity: 0 }}
          whileInView={{ scale: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="bg-secondary-900 mt-8 flex h-fit w-full justify-center rounded-2xl p-10"
        >
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex h-fit w-full flex-wrap justify-start gap-14"
          >
            {Rankedgames.map((game, index) => (
              <div
                key={game.title}
                className="relative"
                style={{
                  marginTop: game.ranking > 3 ? "80px" : `${(index % 3) * 40}px`
                }}
              >
                <GameCardRanking game={game} />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* GAMES WISHLIST */}
        <div className="mt-12 w-full">
          <Title>Wishlist Games</Title>
          <div className="mt-5 grid grid-cols-2 items-start justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {Games.length > 0 ? (
              Games.map(game => <GameCard game={game} key={game._id || game.title} />)
            ) : (
              <p className="col-span-full text-center text-gray-400">No games in wishlist.</p>
            )}
          </div>
        </div>
        {/* DLC WISHLIST  */}

        <div className="mt-12 w-full">
          <Title>Wishlist Dlc</Title>
          <div className="mt-5 grid grid-cols-2 items-start justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {dlcs.map(game => (
              <GameCard game={game} key={game.title} />
            ))}
          </div>
          <Pagination
            totalItems={gamesTotalCount}
            itemsPerPage={itemsPerPage}
            onPageChange={page => setFilter("page", page)}
            currentPage={Number(filters.page)}
            maxVisiblePages={7}
          />
        </div>
      </div>
    </Container>
  );
}

export default WishlistPage;
