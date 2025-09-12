const express = require("express");
const fileRouter = require("./src/routes/fileRoutes.js");
const variableRouter = require("./src/routes/variableRoutes.js");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(fileRouter);
app.use(variableRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((e) => console.log(e));
