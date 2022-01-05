import {useState} from 'react';


import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoListItem from './components/ToDoListItem';

import { starterToDos } from './data/starterToDos';


import './App.css';

function App() {
  const [toDos, setToDos] = useState(starterToDos);
  return (
    <div className="App">
      <Header /> 
      <ToDoForm />
      <ToDoList todos={toDos}/> 

    </div>
  );
}

export default App;
