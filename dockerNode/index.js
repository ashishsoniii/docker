const express = require("express");

const app = express();
app.use(express.json());

const port = 8000;

// Simple GET 
app.get("/", (req, res) => {
  res.json({ msg: "Hello from docker to lab exam!" });
});
// Simple GET request with query parameter
app.get("/getWithQuery", (req, res) => {
  const name = req.query.name;
  res.json({ msg: `Hello, ${name}` });
});

// Another simple GET request
app.get("/anotherGet", (req, res) => {
  res.json({ msg: "This is another GET request." });
});

// Simple POST request with JSON body
app.post("/postWithName", (req, res) => {
  const name = req.body.name;
  res.json({ msg: `Hello, ${name}` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
