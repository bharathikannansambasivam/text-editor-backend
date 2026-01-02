const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  refreshToken: String,
});

const userModel = mongoose.model("loginDetail", userSchema);

module.exports = userModel;
