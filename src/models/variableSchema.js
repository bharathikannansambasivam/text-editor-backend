const mongoose = require("mongoose");

const variableSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "loginDetail",
      required: true,
    },
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
variableSchema.index({ userId: 1, key: 1 }, { unique: true });

const Variable = mongoose.model("Variable", variableSchema);

module.exports = Variable;
