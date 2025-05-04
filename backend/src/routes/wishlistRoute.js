const express = require("express");

const User = require("../models/User");
const Game = require("../models/Game");

const router = express.Router();

//get user by id
router.get("/Games/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("wishlist");

    const baseGame = user.wishlist.filter(game => game.type === "Base Game");
    if (!user) {
      console.log(req.params);
      return res.status(404).json({ message: "User not found" });
    }
    // console.log(baseGame);

    res.json(baseGame);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/AddOns/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("wishlist");

    const addons = user.wishlist.filter(game => game.type !== "Base Game");
    if (!user) {
      console.log(req.params);
      return res.status(404).json({ message: "User not found" });
    }
    // console.log(addons);

    res.json(addons);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
