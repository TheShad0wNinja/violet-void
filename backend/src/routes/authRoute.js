const { login, register, me, logout } = require('@controller/authController');
const express = require('express')

const router = express.Router();

router.post("/login", login)
router.post("/register", register)
router.get("/me", me)
router.get("/logout", logout);

module.exports = router;