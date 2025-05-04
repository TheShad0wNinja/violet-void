const { getAllNews, getNews } = require('@controller/newsController');
const express = require('express')

const router = express.Router();

router.get("/", getAllNews)
router.get("/:id", getNews)

module.exports = router;