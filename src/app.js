const express = require("express");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.json({
    message: "CI/CD Assignment API",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Alice"
    },
    {
      id: 2,
      name: "Bob"
    }
  ]);
});

module.exports = app;