const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Example API to receive form data
app.post("/api/autofill", (req, res) => {
  console.log("Received autofill data:", req.body);
  res.status(200).json({ message: "Data received" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
