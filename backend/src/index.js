require("dotenv").config();
require('module-alias/register')
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const cookieParser = require("cookie-parser");
const discussionRouter = require("@routes/discussionRoute");
const authRouter = require("@routes/authRoute")
const gameRoutes = require("../src/routes/productPageRoutes");
const wishlistRoute = require("../src/routes/wishlistRoute");
const artworkRouter = require("@routes/artworkRoute");
const screenshotRouter = require("@routes/screenshotRoute");
const guidesRouter = require("@routes/guideRoute");
const newsRouter = require("@routes/newsRoute");

const app = express();
app.use(cors({
  origin: (origin, callback) => {
    if(!origin) return callback(null, true);
    
    // Allow any origin that contains localhost or your domain
    if(origin.includes('localhost')) {
      return callback(null, true);
    }
    
    callback(null, true); // To allow all origins, just return true
  },
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"))

app.use("/api/discussions", discussionRouter);
app.use("/api/artworks", artworkRouter);
app.use("/api/screenshots", screenshotRouter);
app.use("/api/guides", guidesRouter);
app.use("/api/news", newsRouter);
app.use("/api/auth", authRouter);
app.use("/api/games", gameRoutes);
app.use("/api/wishlist", wishlistRoute);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("Connected to MongoDB Succesfully");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error("Couldn't connected to mongodb: " + err));
