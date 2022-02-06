import { useState } from "react";
import axios from 'axios'; 

import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";

import { starterToDos } from "./data/starterToDos";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(starterToDos);

  const addTodo = function (formData) {
    let newTodo = {
      id: uuidv4(), // randomly generate
      name: formData.name, // event.target.value()
      isComplete: false,
    };

    let newTodos = [newTodo, ...todos];

    console.log(newTodos);
    setTodos(newTodos);
  };

  const updateTodoCompletion = (todoId) => {
    let newTodos = [...todos];
    let changeIndex = newTodos.findIndex((todo) => todo.id === todoId);
    let changeTodo = newTodos.find((todo) => todo.id === todoId);
    changeTodo = { ...changeTodo, isComplete: !changeTodo.isComplete };
    newTodos[changeIndex] = changeTodo;
    setTodos(newTodos);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
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
