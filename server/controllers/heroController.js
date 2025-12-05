const HeroImage = require("../models/HeroImage");
const fs = require("fs");
const path = require("path");

// Upload Image
exports.uploadImage = async (req, res) => {
  try {
    const image = await HeroImage.create({
      url: `/uploads/${req.file.filename}`, // saved path
    });
    res.json(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Images
exports.getImages = async (req, res) => {
  try {
    const images = await HeroImage.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Image (DB + uploads folder)
exports.deleteImage = async (req, res) => {
  try {
    // 1️⃣ Find the image in DB
    const image = await HeroImage.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Image not found" });

    // 2️⃣ Delete file from uploads folder
    const filePath = path.join(
      __dirname,
      "../uploads",
      path.basename(image.url)
    );
    fs.unlink(filePath, (err) => {
      if (err) console.error("File delete error:", err);
    });

    // 3️⃣ Delete from DB
    await HeroImage.findByIdAndDelete(req.params.id);

    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
