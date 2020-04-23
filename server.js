// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const pug = require("pug");

app.set("view engine", "pug");
app.set("views", "./views");

var todolist = [
  'Đi chợ',
  'Nấu cơm',
  'Rửa bát',
  'Học code tại CodersX'
]
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});

app.get("/todos", (request, response) => {
  response.render("todos",{
    todos : todolist
  });
});

app.get("/todos", (req, res) => {
  var q = req.body.
  res.render("todos",{
    todos : todolist
  });
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
