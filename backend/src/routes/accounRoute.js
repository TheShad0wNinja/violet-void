const express = require("express");

const User = require("../models/User");

const category = require("../models/Category");
const router = express.Router();

const Review = require("../models/Review");

router.get("/:id", async (req, res) => {
    try {
      // Changed from req.params.id to req.params.account
      const userData = await User.findById( req.params.id )
        .populate("library")
        .populate("wishlist")
        .populate("friends")
  
      if (!userData) {
        return res.status(404).json({ message: "User not found" });
      }
          console.log(userData);

      res.json(userData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
