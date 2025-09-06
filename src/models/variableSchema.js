const mongoose = require("mongoose");

const variableSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Variable = mongoose.model("Variable", variableSchema);

module.exports = Variable;
