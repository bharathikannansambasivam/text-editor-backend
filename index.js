const express = require("express");
const fileRouter = require("./src/routes/fileRoutes.js");
const variableRouter = require("./src/routes/variableRoutes.js");

const { mongo, default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use(fileRouter);
app.use(variableRouter);

mongoose
  .connect("mongodb://localhost:27017/file")
  .then(() => {
    console.log("DB connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((e) => console.log(e));
