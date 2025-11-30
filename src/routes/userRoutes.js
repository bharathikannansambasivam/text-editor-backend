const authControl = require("../controllers/authController");
const express = require("express");
const router = express.Router();
router.post("/signup", authControl.createUser);

router.post("/login", authControl.loginUser);
module.exports = router;
