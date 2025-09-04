import express from "express";
import fs from "fs";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.post("/submit", (req, res) => {
  const newData = req.body;

  let existing = [];
  if (fs.existsSync("data.json")) {
    try {
      const fileContent = fs.readFileSync("data.json", "utf8");
      if (fileContent.trim()) {
        existing = JSON.parse(fileContent);
      }
    } catch (error) {
      console.error("Error parsing data.json:", error.message);
      existing = [];
    }
  }

  existing.push(newData);

  fs.writeFileSync("data.json", JSON.stringify(existing, null, 2));

  res.json({ message: "Data saved!" });
});

app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));