require("dotenv").config();
require('module-alias/register')
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const discussionRouter = require("@routes/discussionRoute");

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static("public"))
app.use("/discussions", discussionRouter)
const gameRoutes = require("../src/routes/productPageRoutes");
const authRoutes = require("./controllers/AuthController");

app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("Connected to MongoDB Succesfully");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error("Couldn't connected to mongodb: " + err));
