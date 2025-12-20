const HeroImage = require("../models/HeroImage");
const fs = require("fs");
const path = require("path");

// Upload Image
exports.uploadImage = async (req, res) => {
  try {
    const image = await HeroImage.create({
      url: `/api/uploads/${req.file.filename}`,
    });
    res.json(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Images
exports.getImages = async (req, res) => {
  try {
    const images = await HeroImage.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Image
exports.deleteImage = async (req, res) => {
  try {
    const image = await HeroImage.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    const filename = image.url.split("/").pop();
    const filePath = path.resolve(__dirname, "../uploads", filename);

    fs.unlink(filePath, (err) => {
      if (err) console.error("File delete error:", err);
    });

    await HeroImage.findByIdAndDelete(req.params.id);

    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
