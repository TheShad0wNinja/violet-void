const { getAllScreenshots, getScreenshot } = require("@controller/screenshotController");
const express = require("express");

const router = express.Router();

router.get("/", getAllScreenshots);
router.get("/:id", getScreenshot);

module.exports = router;
