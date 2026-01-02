const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userschema = require("../models/userSchema");
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userschema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { name, password: hashedPassword, email };
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
    console.log(req.body);

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_ACCESS_TOKEN, {
      expiresIn: "1d",
    });
    return res.json({
      message: "Login successful",
      token,
      userId: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
