const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("combined"));

app.get("/api/hello", (req, res) => {
  res.json("Hello World");
});

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

console.log("Starting express server");
app.listen(port, () => console.log(`App listening on port ${port}!`));
