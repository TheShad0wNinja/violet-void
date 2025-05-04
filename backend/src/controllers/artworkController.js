const { Artwork, User, Game } = require("@model/index");

async function getAllArtworks(req, res) {
  const artworks = await Artwork.find();
  const totalCount = await Artwork.countDocuments();
  res.status(200).json({ totalCount, artworks });
}

async function getArtwork(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).json({ message: "Invalid body" });
  try {
    const artwork = await Artwork.findById(id);
    await User.populate(artwork, { path: "artist" });
    await Game.populate(artwork, { path: "game" });
    res.status(200).json(artwork);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

async function getShuffledArtworks(req, res) {
  const totalCount = await Artwork.countDocuments();
  const shuffledArtworks = await Artwork.aggregate([{ $sample: { size: totalCount } }]);
  await User.populate(shuffledArtworks, { path: "artist" });
  await Game.populate(shuffledArtworks, { path: "game" });
  res.status(200).json({ totalCount, shuffledArtworks });
}

module.exports = { getAllArtworks, getArtwork, getShuffledArtworks };
