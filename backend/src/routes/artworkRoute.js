const { getArtwork, getShuffledArtworks } = require("@controller/artworkController");
const express = require("express");

const router = express.Router();

router.get("/", getShuffledArtworks);
router.get("/:id", getArtwork);

module.exports = router;
