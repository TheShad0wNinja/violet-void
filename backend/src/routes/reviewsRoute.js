const { getAllReviews, getReviews } = require('@controller/reviewsController');
const express = require('express')

const router = express.Router();

router.get("/", getAllReviews)
router.get("/:id", getReviews)

module.exports = router;