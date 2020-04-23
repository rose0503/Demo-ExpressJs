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
  {id: 1, val: 'Đi chợ'},
  {id: 2, val: 'Nấu cơm'},
  {id: 3, val: 'Rửa bát'},
  {id: 4, val: 'Học code tại CodersX'}
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

app.get("/todos/search", (req, res) => {
  var q = req.query.q;
  var matchedToDo = todolist.filter((todo)=>{
    return todo.val.toLowerCase().indexOf(q.toLowerCase()) !== -1
  })
  res.render("todos",{
    todos : matchedToDo,
    q: q
  });
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
