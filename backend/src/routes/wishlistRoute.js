const express = require("express");

const User = require("../models/User");
const Game = require("../models/Game");

const router = express.Router();

//get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("wishlist");

    if (!user) {
      console.log(req.params);
      return res.status(404).json({ message: "User not found" });
    }
    // console.log(user);

    res.json(user.wishlist);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Assuming you're using Express and Mongoose
router.get("/filtergames", async (req, res) => {
    try {
      const gameIds = req.query.ids; // Expects an array of IDs
      const games = await Game.find({ _id: { $in: gameIds } });
      res.json(games);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch games" });
    }
  });
  

module.exports = router;
