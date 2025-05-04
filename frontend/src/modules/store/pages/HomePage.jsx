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

import { useEffect, useState } from "react";
import GameCardFullData from "../components/GameCardFullData";
import CategoriesGrid from "../components/CategoriesGrid";
import GameSection from "../components/GameSection";
import axios from "axios";

const games = getGamesPageData();
const imagesgames = getGamesList();

const artworks = getShuffledArtworks();

function Home() {
  const [gameData, setGameData] = useState(null);
  const [topGames, setTopGames] = useState([]);
  const [latestGames, setLatestGames] = useState([]);
  const [under20Games, setUnder20Games] = useState([]);
  const [onSaleGames, setOnSaleGames] = useState([]);
  const [freeGames, setfreeGames] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function fetchTopData() {
      try {
        setTopGames(null); // Set to null for loading state
        const res = await axios.get(`${backendUrl}/api/games/topRanked`);
        const transformedGames = res.data.map(game => ({
          _id: game.gameId,
          id: game.gameId, // Some components might expect 'id' instead of '_id'
          title: game.gameTitle,
          rating: game.averageRating, // This is what you want to access
          totalReviews: game.totalReviews,
          price: game.gameDetails?.price || 0,
          discount: game.gameDetails?.discount || 0,
          finalPrice: game.gameDetails?.finalPrice || 0,
          images: game.gameDetails?.images || { cover: '/default-cover.jpg' },
          description: game.gameDetails?.description || '',
          ageRating: game.gameDetails?.ageRating || '',
          developer: game.gameDetails?.developer || '',
          releaseDate: game.gameDetails?.releaseDate || '',

        }));
       
        
        setTopGames(transformedGames);
      } catch (err) {
        console.error(err);
        setTopGames([]); // Set empty array on error
      }
    }
    fetchTopData();
  }, []);

  useEffect(() => {
    const fetchLatestGames = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/games/latestGames`);
        const data = await response.json();
        setLatestGames(data);
      } catch (err) {
        console.error('Error fetching latest games:', err);
      }
    };

    fetchLatestGames();
  }, []);
  useEffect(() => {
    const fetchLatestGames = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/games/under20Games`);
        const data = await response.json();
        setUnder20Games(data);
      } catch (err) {
        console.error('Error fetching latest games:', err);
      }
    };

    fetchLatestGames();
  }, []);
  useEffect(() => {
    const fetchLatestGames = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/games/onSaleGames`);
        const data = await response.json();
        setOnSaleGames(data);
      } catch (err) {
        console.error('Error fetching latest games:', err);
      }
    };

    fetchLatestGames();
  }, []);
  useEffect(() => {
    const fetchLatestGames = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/games/freeGames`);
        const data = await response.json();
        setfreeGames(data);
      } catch (err) {
        console.error('Error fetching latest games:', err);
      }
    };

    fetchLatestGames();
  }, []);
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
						<GamesHolder Sectionname="Trending games" games={topGames} />
					</div>
          <GamesHolder Sectionname="Lastest Games" type2games games={latestGames} smallerHeight />
          <div className="mt-5 mb-3 flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Browse by genre</h1>
            {/* //TO DO */}
            <CategoriesGrid />
          </div>
          <div className="flex flex-wrap">
            <GameSection games={freeGames} sectionName="Free" />
            <GameSection games={under20Games} sectionName="Under $20" />
            <GameSection games={onSaleGames} sectionName="On sale" />
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
