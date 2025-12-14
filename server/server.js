const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");

// ROUTES
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const heroRoutes = require("./routes/heroRoutes");
const packageRoutes = require("./routes/packageRoutes"); // ✅ ADD THIS

const app = express();

/* -------------------- DB -------------------- */
connectDB();

/* ---------------- Middleware ---------------- */
app.use(cors());
app.use(express.json());

/* ---------- Static Files (Uploads) ---------- */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ------------------ Routes ------------------ */
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/packages", packageRoutes); // ✅ WORKING NOW

/* ------------------ Server ------------------ */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
