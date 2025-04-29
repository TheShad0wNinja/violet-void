const express = require("express");
const bcrypt = requrie("bcrypt");
const jwt = require(jsonwebtoken);
const User = require("../controllers/User");

const router = express.Router();

router.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    // generate JWT token
    const token = jwt.sign({ userId: newUser._id, name: newUser.name }, process.env.JWT_SECRET, {
      expiresIn: "1hr"
    });
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).status({ message: "Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    //Match Username
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User doesn't exist" });

    //Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Password doesn't match " });

    if (user && isMatch) {
      const token = jwt.sign({ userId: user._id, name: user.name }, process.env.JWT_SECRET, {
        expiresIn: "1hr"
      });
    }

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
};
