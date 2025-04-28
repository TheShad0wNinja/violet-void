const { getAllDiscussions, getDiscussion } = require('@controller/discussionController');
const express = require('express')

const router = express.Router();

router.get("/", getAllDiscussions)
router.get("/:id", getDiscussion)

module.exports = router;