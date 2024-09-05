const express = require("express");
const { createTodo, updateTodo } = require("./types.js");

const app = express();

const PORT = 3000;

// to parse the express incoming request
app.use(express.json());

// I expect {
//   "title": "string",}
app.post("/todos", (req, res) => {});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {});

app.listen(PORT, () => {
  console.log("Server Started Listening on Port " + PORT);
});
