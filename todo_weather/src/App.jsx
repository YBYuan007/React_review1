
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoListItem from './components/ToDoListItem';

function App() {
  return (
    <div className="App">
      <Header /> 
      <ToDoForm />
      <ToDoList /> 

    </div>
  );
}

export default App;
