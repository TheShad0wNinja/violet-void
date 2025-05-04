const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    //check if user already exists
    const existingEmail = await User.findOne({ email });
    console.log(existingEmail);
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

    res.cookie("jwt", token);
    res.status(201).json({
      newUser: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar || null,
        role: newUser.role || "user"
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username }, { username: 1, email: 1, avatar: 1, _id: 1, role: 1 });
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

    res.cookie("jwt", token);
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}

async function me(req, res) {
  try {
    const isValid = req.cookies.jwt && jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);

    if (!isValid) {
      res.clearCookie("jwt");
      res.status(200).json({ loggedIn: false, user: null });
    } else {
      const jwtData = jwt.decode(req.cookies.jwt);
      const user = await User.findById(jwtData.userId);
      res.status(200).json({ loggedIn: true, user });
    }
  } catch (err) {
    console.error(err);
    return res.staus(500).json({ message: "Server error", user: null });
  }
}

async function logout(req, res) {
  res.clearCookie("jwt");
  res.status(200).json({message: "logged out succesfully"});
}

module.exports = { register, login, me, logout };
