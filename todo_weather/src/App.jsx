import { useEffect, useState } from "react";
import axios from "axios";

import useTodos from "./hooks/useTodos";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";

// import { starterToDos } from "./data/starterToDos";

import "./App.css";

function App() {
  const { todos,  addTodo, updateTodoCompletion, deleteTodo } = useTodos();




  return (
    <div className="App">
      <Header />
      <ToDoForm addTodo={addTodo} />
      {todos.length>0 && (
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
