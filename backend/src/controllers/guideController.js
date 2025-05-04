const { Guide } = require("@model/index");
const { getPaginationConstraints } = require("@utils/pagination");

const DEFAULT_PAGE_LIMIT = 5;

async function getAllGuide(req, res) {
  
  const { offset, limit } = getPaginationConstraints(req, DEFAULT_PAGE_LIMIT);
  const guide = await Guide.find({}).skip(offset).limit(limit);
  const totalCount = await Guide.countDocuments();
  res.status(200).json({ totalCount, guide });
}

async function getGuide(req, res) {
  const id = req.params.id;3
  if (!id) return res.status(400).json({ message: "Invalid body" });

  try {
    const guide = await Guide.findById(id);
    res.status(200).json(guide);
  } catch(e) {
    res.status(400).json({message: e.message})
  }

}

module.exports = { getAllGuide, getGuide };
