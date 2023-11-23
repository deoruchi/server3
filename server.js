require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const urlRouter1 = require("./Router/authRouter");

const app = express();
app.use(cors());
mongoose
  .connect("mongodb://0.0.0.0:27017/Practice")
  .then(() => console.log("Connected"))
  .catch((error) => console.log(error.messege));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/url", urlRouter1);
app.listen(PORT, () => {
  console.log("server is running");
});
