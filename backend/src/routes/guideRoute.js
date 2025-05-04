const { getAllGuide, getGuide } = require('@controller/guideController');
const express = require('express')

const router = express.Router();

router.get("/", getAllGuide)
router.get("/:id", getGuide)

module.exports = router;