const express = require("express");

const Game = require("../controllers/Game");
const category = require("../controllers/Category");
const router = express.Router();

//get game by id
router.get("/:id", async (req, res) => {
  console.log("pepeppe", req.params);
  try {
    const gamedata = await Game.findById(req.params.id).populate("categories","relatedGames");
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
router.post('/relatedgames', async (req, res) => {
    try {
      const { ids } = req.body;
      const games = await Game.find({ '_id': { $in: ids } }); 
      res.json(games); 
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch games' });
    }
  });
  
module.exports = router;
