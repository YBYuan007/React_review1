var createError = require('http-errors');
var express = require('express');
var path = require('path');
var http = require('http');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
app.use(express.json());
app.use(cookieParser());


var port = process.env.PORT || 3000;
var server = http.createServer(app);


server.listen(port, () =>{
  console.log('app is listening on port: ', port); 
});

const todos = {
  "192812": {
      id: "192812",
      name: "Make a bad pun",
      isComplete: true,
    },
    "1921323812":  {
      id: "1921323812",
      name: "Upload lecture content",
      isComplete: false,
    },
    "19281112":  {
      id: "19281112",
      name: "Drink coffee",
      isComplete: false,
    }
}


app.get("/api/todos", (req, res) => { // show to the public
  // console.log("backend /api/todos")
  res.json(todos); 
}); 

app.put("/api/todos/:todo_id", (req, res) => { // client request to update 
  const todo_id = req.params; 
  const todo = req.body; 
  todos[todo_id] = todo ; 
  console.log('from backend:', todos )
  res.json(todos);
}); 

app.post("/api/todos", (req, res) => { // client ask to create a new one 
  const todo = req.body; 
  todos[todo.id] = todo;
  res.json(todos); 
}); 

app.delete("/api/todos/:todo_id", (req, res) => {
  const todo_id = req.params; 
  delete todos[todo_id]; // javascript applies to the object... 
  res.json(todos);
})


module.exports = app;

