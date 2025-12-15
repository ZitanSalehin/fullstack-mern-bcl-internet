const express = require("express");
const router = express.Router();
const Package = require("../models/Package");

// ==========================
// CREATE PACKAGE
// ==========================
router.post("/", async (req, res) => {
  try {
    const { title, speed, price, privileges } = req.body;

    // 🔒 VALIDATION
    if (!title || !/^[A-Za-z\s]+$/.test(title)) {
      return res.status(400).json({ message: "Invalid title" });
    }

    if (speed < 10 || speed > 450) {
      return res.status(400).json({ message: "Invalid speed" });
    }

    if (price < 500 || price > 10000) {
      return res.status(400).json({ message: "Invalid price" });
    }

    if (!Array.isArray(privileges) || privileges.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one privilege is required" });
    }

    const newPackage = new Package({
      title,
      speed,
      price,
      privileges: privileges.map((p) => p.trim()).filter(Boolean),
    });

    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ==========================
// GET ALL PACKAGES
// (lowest price → lowest speed)
// ==========================
router.get("/", async (req, res) => {
  try {
    const packages = await Package.find().sort({
      price: 1,
      speed: 1,
    });
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ==========================
// UPDATE PACKAGE
// ==========================
router.put("/:id", async (req, res) => {
  try {
    const { title, speed, price, privileges } = req.body;

    if (!Array.isArray(privileges) || privileges.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one privilege is required" });
    }

    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      {
        title,
        speed,
        price,
        privileges: privileges.map((p) => p.trim()).filter(Boolean),
      },
      { new: true, runValidators: true }
    );

    if (!updatedPackage) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.json(updatedPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ==========================
// DELETE PACKAGE
// ==========================
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Package.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.json({ message: "Package deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
