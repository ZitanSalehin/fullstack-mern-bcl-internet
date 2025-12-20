const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");

// ROUTES
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const heroRoutes = require("./routes/heroRoutes");
const packageRoutes = require("./routes/packageRoutes"); // âœ… ADD THIS

const app = express();

/* -------------------- DB -------------------- */
connectDB();

/* ---------------- Middleware ---------------- */
app.use(cors());
app.use(express.json());

/* ---------- Static Files (Uploads) ---------- */
app.use("/api/uploads", express.static(path.resolve(__dirname, "uploads")));

app.get("/api/debug-path", (req, res) => {
  res.json({
    dirname: __dirname,
    uploadsExists: require("fs").existsSync(path.resolve(__dirname, "uploads")),
    files: require("fs").existsSync(path.resolve(__dirname, "uploads"))
      ? require("fs").readdirSync(path.resolve(__dirname, "uploads"))
      : [],
  });
});

app.get("/", (req, res) => {
  res.send("default route is live!");
});
app.get("/api", (req, res) => {
  res.send("API is live!");
});

// Simple /test route
app.get("/test", (req, res) => {
  res.send("✅ /test route is working!");
});

// Simple /api/test route
app.get("/api/test", (req, res) => {
  res.send("📡 /api/test route is working!");
});

/* ------------------ Routes ------------------ */
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/packages", packageRoutes); // âœ… WORKING NOW

/* ------------------ Server ------------------ */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ðŸš€ Server running on port ${PORT}`);
});
