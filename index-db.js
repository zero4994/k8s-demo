/* eslint-disable no-console */

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("combined"));

//configures database
const database = require("./db/knexfile");
const Knex = require("knex");

const knex = Knex({
  client: database.client,
  port: 3306,
  connection: database.connection
});

app.get("/api/hello", async (req, res) => {
  try {
    const result = await knex("visits").insert([{ created_at: new Date() }]);
    console.log("=>result:", result);
    let data = await knex("visits")
      .select()
      .orderBy("id", "desc");

    data = data[0];
    console.log("selectResult =>", data);

    res.json(
      `Hello World - You are the visitor ${data.id} - at - ${data.created_at}`
    );
  } catch (error) {
    console.error(error);
    res.json("Error processing request");
  }
});

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

console.log("Starting express server in db mode");
app.listen(port, () => console.log(`App listening on port ${port}!`));
