const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("combined"));

app.get("/api/hello", (req, res) => {
  res.json("Hello World");
});

const port = process.env.PORT || 3000;

console.log("Starting express server");
app.listen(port, () => console.log(`App listening on port ${port}!`));
