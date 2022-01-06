import {useState} from 'react';


import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoListItem from './components/ToDoListItem';

import { starterToDos } from './data/starterToDos';


import './App.css';

function App() {
  const [todos, setTodos] = useState(starterToDos);

  const updateTodoCompletion = () => {}
  const deleteTodo = () => {} 

  return (
    <div className="App">
      <Header /> 
      <ToDoForm />
      {todos && <ToDoList {...{todos}}/> }
{/* ^ is the same as todos = {todos} */}
    </div>
  );
}

export default App;
