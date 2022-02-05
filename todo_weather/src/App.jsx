import {useState} from 'react';


import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoListItem from './components/ToDoListItem';

import { starterToDos } from './data/starterToDos';


import './App.css';

function App() {
  const [todos, setTodos] = useState(starterToDos);

  const updateTodoCompletion = (todoId) => {
    let newTodos = [...todos]; 
    let changeIndex = newTodos.findIndex(todo => todo.id === todoId); 
    let changeTodo = newTodos.find(todo => todo.id === todoId); 
    changeTodo = {...changeTodo, isComplete: !changeTodo.isComplete};
    newTodos[changeIndex] = changeTodo;
    setTodos(newTodos);
  }


  const deleteTodo = (todoId) => {
    const newTodos = todos.filter(todo => todo.id !== todoId )
    setTodos(newTodos)
  } 

  return (
    <div className="App">
      <Header /> 
      <ToDoForm />
      {todos && <ToDoList todos = {todos}
                          deleteTodo = {deleteTodo}
                          updateTodoCompletion = {updateTodoCompletion} /> }
    </div>
  );
}

export default App;
