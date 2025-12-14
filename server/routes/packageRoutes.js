const express = require("express");
const Package = require("../models/Package");

const router = express.Router();

// CREATE PACKAGE
router.post("/", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body); // 🔥 debug
    const pkg = await Package.create(req.body);
    console.log("PACKAGE CREATED:", pkg); // 🔥 debug
    res.status(201).json(pkg);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ message: err.message });
  }
});

// GET PACKAGES
router.get("/", async (req, res) => {
  try {
    const packages = await Package.find().sort({ price: 1 });
    res.json(packages);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

// DELETE PACKAGE
router.delete("/:id", async (req, res) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.json({ message: "Package deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
