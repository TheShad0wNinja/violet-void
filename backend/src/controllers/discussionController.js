const { Discussion } = require("@model/index");
const { getPaginationConstraints } = require("@utils/pagination");

const DEFAULT_PAGE_LIMIT = 5;

async function getAllDiscussions(req, res) {
  
  const { offset, limit } = getPaginationConstraints(req, DEFAULT_PAGE_LIMIT);
  const discussions = await Discussion.find({}).skip(offset).limit(limit);
  const totalCount = await Discussion.countDocuments();
  res.status(200).json({ totalCount, discussions });
}

async function getDiscussion(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).json({ message: "Invalid body" });

  try {
    const discussion = await Discussion.findById(id);
    res.status(200).json(discussion);
  } catch(e) {
    res.status(400).json({message: e.message})
  }

}

module.exports = { getAllDiscussions, getDiscussion };
