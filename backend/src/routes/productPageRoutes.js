const express = require("express");

const Game = require("../models/Game");

const category = require("../models/Category");
const router = express.Router();

const Review = require('../models/Review');


router.get('/topRanked', async (req, res) => {
  try {
    // Step 1: Get the list of all games from the "games" collection
    const allGames = await Game.find();

    // Step 2: Fetch the top-ranked games based on reviews
    const topGames = await Review.aggregate([
      {
        $group: {
          _id: "$game", // Group by game ID
          averageRating: { $avg: "$rating" }, // Calculate the average rating
          totalReviews: { $sum: 1 } // Count the number of reviews
        }
      },
      { 
        $sort: { averageRating: -1 } // Sort by average rating in descending order
      },
      { 
        $limit: 5 
      },
    ]);

    const topRankedGames = topGames.map((gameData) => {
      // Find the matching game from the allGames array by matching game ID
      const game = allGames.find((game) => game._id.toString() === gameData._id.toString());

      if (game) {
        return {
          gameId: game._id,
          gameTitle: game.title,
          averageRating: gameData.averageRating,
          totalReviews: gameData.totalReviews,
          gameDetails: game 
        };
      }
    }).filter(Boolean); 

    console.log('Top ranked games: ', topRankedGames); 
    res.status(200).json(topRankedGames); 
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: 'Server error' }); 
  }
});
router.get('/latestGames', async (req, res) => {
  try {
  
    const latestGames = await Game.find()
      .sort({ releaseDate: -1 })  // Sort by releaseDate (latest first)
      .limit(5);  // Limit to the latest 5 games 

    res.status(200).json(latestGames);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});
// get game by id
router.get("/:id", async (req, res) => {
  console.log( req.params);
  try {
    const gamedata = await Game.findById(req.params.id)
      .populate("categories")
      .populate({
        path: "relatedGames.game",
        model: "Game"
      })
      .populate({
        path: "features",
        model: "Feature"
      })
      .populate("similarGames");

    console.log(gamedata);

    if (!gamedata) {
      console.log(req.params);
      return res.status(404).json({ message: "Game not found" });
    }
    res.json(gamedata);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
router.post("/relatedgames", async (req, res) => {
  try {
    const { ids } = req.body;
    const games = await Game.find({ _id: { $in: ids } });
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

router.post("/allGames", async (req, res) => {
  try {
    const { ids } = req.body;
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
});



module.exports = router;


