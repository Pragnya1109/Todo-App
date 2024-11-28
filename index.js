// Creating a todo app by storing the data in the array

const express = require("express");

const app = express();
const PORT = 3000;

// for parsing JSON data
app.use(express.json());

let todos = [];

app.get("/", (req, res) => {
  //   return res.send(
  //     "1. All todos - /todos\n\n2. Delete todos - /todos/delete/:id\n\n3. Update todos - /todos/update/:id"
  //   );
  myRoutes = [
    "1. All todos - /todos",
    "2. Delete todos - /todos/delete/:id",
    "3. Delete all todos - /todos/delete/all",
    "4. Update todos - /todos/update/:id",
  ];

  return res.json({
    success: true,
    message: myRoutes,
  });
});

// creating a route handler to GET all the todos
app.get("/todos", (req, res) => {
  res.json({
    success: true,
    todos,
  });
});

// creating a route handler to POST request for todos object creation
app.post("/todos/create", (req, res) => {
  const { todo } = req.body;

  if (!todo || todo.trim() === "") {
    return res.status(400).json({
      sucess: false,
      message: "Todo required!!",
    });
  }

  const newTodo = {
    title: todo,
    id: todos.length + 1,
  };
  todos.push(newTodo);

  res.status(201).json({
    sucess: true,
    message: "Todo added sucessfully",
    todo: newTodo,
  });
});

// creating a route handler to DELETE the todos
app.delete("/todos/delete/all", (req, res) => {
  (todos = []), res.send("Sucessfully deleted all Todos");
});
app.delete("/todos/delete/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((t) => t.id === parseInt(id));

  if (todoIndex == -1) {
    return res.status(400).json({
      success: false,
      message: "No todo with given id found!!",
    });
  }

  //   using Splice(position, no. of elements to be removed) method
  const removedTodo = todos.splice(todoIndex, 1);
  res.json({
    success: true,
    message: "Todo deleted successfully!!",
    todo: removedTodo[0],
  });
});

// creating a route to UPDATE(PUT) todo
app.put("/todos/update/:id", (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;

  const todoItem = todos.find((t) => t.id === parseInt(id));

  if (!todoItem) {
    return res.status(404).json({
      success: false,
      message: "Todo not Found!!",
    });
  }

  if (!todo || todo.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Todo updation required",
    });
  }

  todoItem.title = todo;

  res.json({
    success: true,
    message: "Todo updated successfully!!",
    todo: todoItem,
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Todo app listening on PORT ${PORT}`);
});
