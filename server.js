require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const urlRouter1 = require("./Router/authRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/url", urlRouter1);

mongoose
  .connect("mongodb://0.0.0.0:27017/Practice")
  .then(() => console.log("Connected"))
  .catch((error) => console.log(error.messege));
app.listen(PORT, () => {
  console.log("server is running");
});
