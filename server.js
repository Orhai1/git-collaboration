// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// Host the "dist" folder statically
app.use(express.static("dist"));

// Add a GET route at /message
app.get("/message", (req, res) => {
  res.send("This is a secret message from Partner B!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
