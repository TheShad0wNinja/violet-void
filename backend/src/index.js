require("dotenv").config();
require("module-alias/register");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const discussionRouter = require("@routes/discussionRoute");
const artworkRouter = require("@routes/artworkRoute");
const screenshotRouter = require("@routes/screenshotRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/discussions", discussionRouter);
app.use("/artworks", artworkRouter);
app.use("/screenshots", screenshotRouter);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("Connected to MongoDB Succesfully");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error("Couldn't connected to mongodb: " + err));
