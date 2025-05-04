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
  const [games, setGames] = useState([]);
  const [addOns, setAddOns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { id } = useParams();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { filters, setFilter } = useUrlFilters({ 
    gamesPage: 1, 
    addOnsPage: 1 
  });

  const itemsPerPage = 8;
  const [gamesPageData, setGamesPageData] = useState([]);
  const [gamesTotalCount, setGamesTotalCount] = useState(0);
  const [addOnsPageData, setAddOnsPageData] = useState([]);
  const [addOnsTotalCount, setAddOnsTotalCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const res = await axios.get(`${backendUrl}/api/wishlist/Games/${id}`);
        setGames(res.data);
        setGamesTotalCount(res.data.length);
      } catch (err) {
        console.error("Failed to load wishlist games:", err);
        setGames([]);
        setGamesTotalCount(0);
      }
    }
    fetchWishlist();
  }, [id, backendUrl]);

  useEffect(() => {
    async function fetchAddons() {
      try {
        const res = await axios.get(`${backendUrl}/api/wishlist/AddOns/${id}`);
        setAddOns(res.data);
        setAddOnsTotalCount(res.data.length);
      } catch (err) {
        console.error("Failed to load wishlist add-ons:", err);
        setAddOns([]);
        setAddOnsTotalCount(0);
      }
    }
    fetchAddons();
  }, [id, backendUrl]);

  // Handle pagination for games
  useEffect(() => {
    const page = Number(filters.gamesPage ?? 1);
    const filteredGames = games.filter(game =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setGamesPageData(filteredGames.slice(startIndex, endIndex));
    setGamesTotalCount(filteredGames.length);
  }, [filters.gamesPage, searchQuery, games]);

  // Handle pagination for add-ons
  useEffect(() => {
    const page = Number(filters.addOnsPage ?? 1);
    const filteredAddOns = addOns.filter(addOn =>
      addOn.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setAddOnsPageData(filteredAddOns.slice(startIndex, endIndex));
    setAddOnsTotalCount(filteredAddOns.length);
  }, [filters.addOnsPage, searchQuery, addOns]);

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
            onEnter={() => {
              setFilter("gamesPage", 1);
              setFilter("addOnsPage", 1);
            }}
          />
        </div>

        {/* RANKED GAMES (keep this section the same) */}
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
            {/* {Rankedgames.map((game, index) => (
              <div
                key={game.title}
                className="relative"
                style={{
                  marginTop: game.ranking > 3 ? "80px" : `${(index % 3) * 40}px`
                }}
              >
                <GameCardRanking game={game} />
              </div>
            ))} */}
          </motion.div>
        </motion.div>

        {/* GAMES WISHLIST - 8 items per page */}
        <div className="mt-12 w-full">
          <Title>Wishlist Games</Title>
          <div className="mt-5 grid grid-cols-2 items-start justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {gamesPageData.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          <Pagination
            totalItems={gamesTotalCount}
            itemsPerPage={itemsPerPage}
            onPageChange={page => setFilter("gamesPage", page)}
            currentPage={Number(filters.gamesPage)}
            maxVisiblePages={7}
            className="mt-4"
          />
        </div>
        
        {/* ADD-ONS WISHLIST - 8 items per page */}
        <div className="mt-12 w-full">
          <Title>Wishlist Add-Ons</Title>
          <div className="mt-5 grid grid-cols-2 items-start justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {addOnsPageData.map(addOn => (
              <GameCard key={addOn.id} game={addOn} />
            ))}
          </div>
          <Pagination
            totalItems={addOnsTotalCount}
            itemsPerPage={itemsPerPage}
            onPageChange={page => setFilter("addOnsPage", page)}
            currentPage={Number(filters.addOnsPage)}
            maxVisiblePages={7}
            className="mt-4"
          />
        </div>
      </div>
    </Container>
  );
}

export default WishlistPage;


