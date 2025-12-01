import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "FitPass API is running" });
});

// API Routes
app.get("/api/gyms", (req, res) => {
  res.json({ message: "Gyms endpoint - coming soon" });
});

app.get("/api/passes", (req, res) => {
  res.json({ message: "Passes endpoint - coming soon" });
});

app.post("/api/check-in", (req, res) => {
  res.json({ message: "Check-in endpoint - coming soon" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 FitPass Backend running on http://localhost:${PORT}`);
});

