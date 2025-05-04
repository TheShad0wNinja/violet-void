const { News } = require("@model/index");
const { getPaginationConstraints } = require("@utils/pagination");

const DEFAULT_PAGE_LIMIT = 5;

async function getAllNews(req, res) {
  
  const { offset, limit } = getPaginationConstraints(req, DEFAULT_PAGE_LIMIT);
  const news = await News.find({}).skip(offset).limit(limit);
  const totalCount = await News.countDocuments();
  res.status(200).json({ totalCount, news });
}

async function getNews(req, res) {
  const id = req.params.id;3
  if (!id) return res.status(400).json({ message: "Invalid body" });

  try {
    const news= await News.findById(id);
    res.status(200).json(news);
  } catch(e) {
    res.status(400).json({message: e.message})
  }

}

module.exports = { getAllNews, getNews };
