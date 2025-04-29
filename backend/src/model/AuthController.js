const express = require("express");
const bcrypt = requrie("bcrypt");
const jwt = require(jsonwebtoken);
const User = require("../controllers/User");

const router = express.Router();

router.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //check if user already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) return res.status(400).json({ message: "Email already exists" });

    const existingUsername = await User.findOne({ username });
    if (existingUsername) return res.status(400).json({ message: "Username already exists" });
      
    if(existingUsername && existingEmail)
    {
        return res.status(400).json({ error: "Username and Email in use" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
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
    res.json({  message: "Login successful", token  });
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message  });
  }
};
