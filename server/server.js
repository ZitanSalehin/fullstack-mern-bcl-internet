const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const path = require("path");

connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// 🔥 IMPORTANT – allow static access to uploaded images
app.use("/uploads", express.static("uploads")); // <-- add this line

// Routes (already exist)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

// ⭐ ADD THIS (Hero Slider API)
app.use("/api/hero", require("./routes/heroRoutes")); // <-- add this

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
