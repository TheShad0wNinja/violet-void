const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password,birthday } = req.body;
    //check if user already exists
    const existingEmail = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });

    if (existingUsername && existingEmail) {
      return res.status(400).json({ message: "Username and Email in use" });
    }

    if (existingEmail) return res.status(400).json({ message: "Email already exists" });

    if (existingUsername) return res.status(400).json({ message: "Username already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword, birthday });
    await newUser.save();
    // generate JWT token
    const token = jwt.sign({ userId: newUser._id, name: newUser.name }, process.env.JWT_SECRET, {
      expiresIn: "1hr"
    });
    console.log("working");
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password doesn't match" });
    }

    const token = jwt.sign({ userId: user._id, username: user.name }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    return res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
