const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// POST endpoint to log visitor data
app.post("/log", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log("Visitor IP:", ip);
  console.log("Visitor data:", req.body);
  res.json({ status: "ok" });
});

// Simple GET endpoint to test server
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
