const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    text: {
      type: String,
      required: true,
      minlength: 3,
    },
    versions: [{ title: String, text: String }],
  },
  { timestamps: true }
);
const File = mongoose.model("File", fileSchema);
module.exports = File;
