const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    speed: {
      type: Number,
      required: true,
      min: 10,
      max: 450,
    },

    price: {
      type: Number,
      required: true,
      min: 500,
      max: 10000,
    },

    // ✅ REQUIRED FIELD
    privileges: {
      type: [String],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Package", packageSchema);
