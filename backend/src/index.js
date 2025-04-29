require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// ADD THE ROUTES HERE
const gameRoutes = require("../src/routes/productPageRoutes");
const { registerUser, loginUser } = require("../model/AuthController");

app.use("/signup", registerUser);
app.use("/login", loginUser);
app.use("/api", gameRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Succesfully");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error("Couldn't connected to mongodb: " + err));
