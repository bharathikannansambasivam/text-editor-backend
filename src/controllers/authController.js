const express = require("express");
const app = express();
const userschema = require("../models/userSchema");
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = { name, password, email };
    const newUser = await userschema.create(user);
    return res.send(newUser);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userschema.findOne({ email });
    if (!user) {
      return res.json({ message: "Email not found" });
    }
    if (password !== user.password) {
      return res.json({ message: "Wrong password" });
    }
    return res.json({
      message: "Login successful",
      userId: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
