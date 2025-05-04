const { Reviews, Review } = require("@model/index");
const { getPaginationConstraints } = require("@utils/pagination");

const DEFAULT_PAGE_LIMIT = 5;

async function getAllReviews(req, res) {
  
  const { offset, limit } = getPaginationConstraints(req, DEFAULT_PAGE_LIMIT);
  const reviews = await Reviews.find({}).skip(offset).limit(limit);
  const totalCount = await Reviews.countDocuments();
  res.status(200).json({ totalCount, reviews });
}

async function getReviews(req, res) {
  const id = req.params.id;3
  if (!id) return res.status(400).json({ message: "Invalid body" });

  try {
    const reviews= await Reviews.findById(id);
    res.status(200).json(Reviews);
  } catch(e) {
    res.status(400).json({message: e.message})
  }

}

module.exports = { getAllReviews, getReviews };
