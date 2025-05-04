const { Screenshot } = require("@model/index");
const { getPaginationConstraints } = require("@utils/pagination");

const DEFAULT_PAGE_LIMIT = 6;

async function getAllScreenshots(req, res) {
  const { offset, limit } = getPaginationConstraints(req, DEFAULT_PAGE_LIMIT);
  const screenshots = await Screenshot.find({}).skip(offset).limit(limit);
  const totalCount = await Screenshot.countDocuments();
  res.status(200).json({ totalCount, screenshots });
}

async function getScreenshot(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).json({ message: "Invalid body" });
  try {
    const screenshot = Screenshot.find(id);
    res.status(200).json({ screenshot });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

module.exports = { getAllScreenshots, getScreenshot };