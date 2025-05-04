import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "@modules/_shared/components/Container";
import { GamesHolder } from "@modules/_shared/App";
import {
  GameRequirements,
  GenreHolder,
  PhotoCollage,
  PurchaseDetails,
  GameRating,
  useCart
} from "@modules/store/App";
import axios from "axios";
import { motion } from "framer-motion";
import { IconStarFilled } from "@tabler/icons-react";
import { useNavigate } from 'react-router-dom';

function ProductPage() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();
  const [loading, setLoading] = useState(true); 
  const [gameData, setGameData] = useState(null);
  const navigate = useNavigate(); 

  const [relatedGames, setRelatedGames] = useState([]);

useEffect(() => {
  async function fetchRelatedGames() {
    try {
      const ids = gameData.relatedGames.game; // array of IDs
      const response = await axios.post(`${backendUrl}/api/games/multiple`, {
        ids, // Pass the array of game IDs to the backend
      });
      setRelatedGames(response.data); 
    } catch (error) {
      console.error("Failed to fetch related games", error);
    }
  }

  if (gameData?.relatedGames?.game) {
    fetchRelatedGames();
  }
}, [gameData]);

  useEffect(() => {
    
    async function fetchGameData() {
      try {
        setLoading(true);
        setGameData(null);

        const res = await axios.get(`${backendUrl}/api/games/${id}`);
        setGameData(res.data);
        setLoading(false);

      } catch (err) {
        console.error(err);
        setLoading(false);

      }
    }
    fetchGameData()
  },[id]);

  useEffect(() => {
    if (!gameData && !loading) {
      navigate("*"); // Navigate to 404 route
    }
  }, [gameData,navigate,loading]);


  if (!gameData) {// need to set inital value otherwise data shows as undefined and doesnt work
    return <div>Game not found!</div>; 
  }

  return (
    <Container>
      <div className="m-5">
        <div className="mb-3.5 flex gap-5">
          <h1 className="text-3xl font-bold">{gameData.title}</h1>
          <div className="bg-secondary flex items-center justify-center gap-1.5 rounded-md pr-1.5 pl-1.5">
            <h1 className="text-accent text-xl font-semibold">{gameData.rating}</h1> {/*change it to pull from reviews section */}
            <IconStarFilled className="text-accent" size={22} />
          </div>
        </div>
        <div className="from-accent via-accent to-background h-[1px] w-[90] bg-gradient-to-r"></div>
        {/*faded line*/}
        <div className="sm:flex-n items-start gap-4 md:flex">
          <div
           
            className="md:flex-3/4"
          >
            <PhotoCollage images={gameData.images} />
            <div>
              <h1
                
                className="mt-4"
              >
                {gameData.description}
              </h1>
              <GenreHolder tags={gameData.categories} features={gameData.features} />
              <h1
               
                className="mt-5 w-fit text-2xl font-bold"
              >
                More about {gameData.name}
              </h1>
              <h1
                
                className="text-text-dark m-2 w-fit"
              >
                {gameData.detailedDescription}
              </h1>
              <GameRating gameName={gameData.title} rating={5} /> {/*change it to pull from reviews section */}
            </div>
          </div>

          <PurchaseDetails game={gameData} />
        </div>
        <div
       
          className="my-4"
        >
          <h1 className="mt-5 text-2xl font-bold">System requirements</h1>
          <GameRequirements requirements={gameData.requirements} />
          <GamesHolder type2games Sectionname="Similar Games" detailsOn   games={gameData.similarGames.map((rel) => rel.game)}
 />
          <GamesHolder
            type2games
            Sectionname="Games related to"
            detailsOn
            games={gameData.relatedGames.map((rel) => rel.game)}
            />
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
