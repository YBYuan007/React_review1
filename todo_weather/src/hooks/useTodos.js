import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  console.log("rendering??????");

  useEffect(() => {
    axios.get("/api/todos").then((res) => {
      console.log("++++++++++++=get")
      setTodos(Object.values(res.data));
    });
    // .then(()=> console.log("++++++++++"));
  }, []);

  const addTodo = function (formData) {
    let newTodo = {
      id: uuidv4(), // randomly generate
      name: formData.name,
      isComplete: false,
    };
    
    axios.post("/api/todos", newTodo).then(() => {
      let newTodos = [newTodo, ...todos];
      setTodos(newTodos);
      console.log("post newTodo: ", newTodo);
    });
  };

  const updateTodoCompletion = (todoId) => {
    let newTodos = [...todos];
    let changeIndex = newTodos.findIndex((todo) => todo.id === todoId);
    let changeTodo = newTodos.find((todo) => todo.id === todoId);
    changeTodo = { ...changeTodo, isComplete: !changeTodo.isComplete };
    newTodos[changeIndex] = changeTodo;
    setTodos(newTodos);

    axios.put(`/api/todos/${todoId}`, changeTodo).then(() => {
      console.log("update todo: ", newTodos);
    });
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);

    axios.delete(`/api/todos/${todoId}`).then(() => {
      console.log("delete:  ", todoId);
    }); 
   };

    return { todos, addTodo, updateTodoCompletion, deleteTodo };

}
