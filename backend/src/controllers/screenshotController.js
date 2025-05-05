const { Screenshot, User, Game } = require("@model/index");
const { getPaginationConstraints } = require("@utils/pagination");

const DEFAULT_PAGE_LIMIT = 6;

async function getAllScreenshots(req, res) {
  const { offset, limit } = getPaginationConstraints(req, DEFAULT_PAGE_LIMIT);
  const screenshots = await Screenshot.find({}).skip(offset).limit(limit);
  const totalCount = await Screenshot.countDocuments();
  await User.populate(screenshots, { path: "author" });
  await Game.populate(screenshots, { path: "game" });
  res.status(200).json({ totalCount, screenshots });
}

async function getScreenshot(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).json({ message: "Invalid body" });
  try {
    const screenshot = await Screenshot.findById(id).populate("author", "game");
    res.status(200).json({ screenshot });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

module.exports = { getAllScreenshots, getScreenshot };
