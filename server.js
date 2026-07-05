import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Enable CORS for frontend API calls
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

// Endpoint to register beta emails
app.post("/api/beta-register", (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const filePath = path.join(__dirname, "beta_registrations.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    let registrations = [];
    if (!err && data) {
      try {
        registrations = JSON.parse(data);
      } catch (parseErr) {
        registrations = [];
      }
    }

    if (!registrations.includes(email)) {
      registrations.push(email);
    }

    fs.writeFile(filePath, JSON.stringify(registrations, null, 2), "utf8", (writeErr) => {
      if (writeErr) {
        console.error("Failed to write registration:", writeErr);
        return res.status(500).json({ error: "Failed to write registration to database." });
      }
      console.log(`Successfully registered: ${email}`);
      res.json({ message: "Success", email });
    });
  });
});

app.listen(PORT, () => {
  console.log(`WinkyX Beta backend API running on http://localhost:${PORT}`);
});
