const express = require("express");
const router = express.Router();
const Package = require("../models/Package");

// CREATE package
router.post("/", async (req, res) => {
  try {
    const pkg = new Package(req.body);
    const saved = await pkg.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all packages
router.get("/", async (req, res) => {
  try {
    const packages = await Package.find().sort({ createdAt: -1 });
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ UPDATE package (THIS WAS MISSING)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Package.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE package
router.delete("/:id", async (req, res) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.json({ message: "Package deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
