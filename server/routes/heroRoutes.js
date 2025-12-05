const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  uploadImage,
  getImages,
  deleteImage,
} = require("../controllers/heroController");

router.post("/upload", upload.single("image"), uploadImage);
router.get("/", getImages);
router.delete("/:id", deleteImage);

module.exports = router;
