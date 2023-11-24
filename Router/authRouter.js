const express = require("express");
const router = express.Router();
const model = require("../model/authentication");
router.use(express.json());
router.get("/", (req, res) => {
  res.setHeader("Access-Controll-Allow-Credentials", "true");
  res.send("Hellow");
});

router.post("/", async (req, res) => {
  try {
    if (!req.body) return res.json({ message: "Request body is missing" });
    const body = req.body;
    console.log(body);
    const result = new model(body);
    const savedResult = await result.save();
    res.send(savedResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const Id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const result = await model.findByIdAndUpdate(Id, {
    _id: Id,
    name: name,
    email: email,
  });

  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await model.findByIdAndDelete(id);
  } catch (error) {
    res.send("error");
  } finally {
    res.send("╰(*°▽°*)╯");
  }
});

module.exports = router;
