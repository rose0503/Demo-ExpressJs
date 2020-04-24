// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const pug = require("pug");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var todolist = [
  {id: 1, todo: 'Đi chợ'},
  {id: 2, todo: 'Nấu cơm'},
  {id: 3, todo: 'Rửa bát'},
  {id: 4, todo: 'Học code tại CodersX'}
]
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});

app.get("/todos", (request, response) => {
  response.render("todo/index",{
    todos : todolist
  });
});

app.get("/todos/search", (req, res) => {
  var q = req.query.q;
  var matchedToDo = todolist.filter((todo)=>{
    return todo.todo.toLowerCase().indexOf(q.toLowerCase()) !== -1
  })
  res.render("todo/index",{
    todos : matchedToDo,
    q: q
  });
});

app.get("/todos/create", (req, res) => {
  res.render("todo/create");
});

app.post("/todos/create", (req, res) => {
  todolist.push(req.body);
  res.redirect('/todos')
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
