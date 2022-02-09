import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";

import { starterToDos } from "./data/starterToDos";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  console.log("rendering??????")

  useEffect(() => {
    axios
    .get("/api/todos")
    .then((res) => {setTodos(Object.values(res.data))} )
    // .then(()=> console.log("++++++++++"));
  },[])


  const addTodo = function (formData) {
    let newTodo = {
      id: uuidv4(), // randomly generate
      name: formData.name,
      isComplete: false,
    };

    let newTodos = [newTodo, ...todos];

    console.log(newTodos);
    setTodos(newTodos);
    axios.post("/api/todos", newTodo)
    .then(()=> {console.log("post newTodo: ", newTodo)})

  };

  const updateTodoCompletion = (todoId) => {
    let newTodos = [...todos];
    let changeIndex = newTodos.findIndex((todo) => todo.id === todoId);
    let changeTodo = newTodos.find((todo) => todo.id === todoId);
    changeTodo = { ...changeTodo, isComplete: !changeTodo.isComplete };
    newTodos[changeIndex] = changeTodo;
    setTodos(newTodos);

    axios.put(`/api/todos/${todoId}`, changeTodo)
    .then(()=> {console.log("update todo: ", newTodos)})
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);

    axios.delete(`/api/todos/${todoId}`)
    .then(()=> {console.log("delete:  ", todoId)})
  };

  return (
    <div className="App">
      <Header />
      <ToDoForm addTodo={addTodo} />
      {todos && (
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodoCompletion={updateTodoCompletion}
        />
      )}
    </div>
  );
}

export default App;
