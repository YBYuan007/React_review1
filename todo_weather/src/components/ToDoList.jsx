import ToDoListItem from "./ToDoListItem";

export default function ToDoList (props) {
  const {todos} = (props);
  const parsedTodos = Array.isArray(todos) && todos.map(todo => <ToDoListItem key = {todo.id} {...todo}/> ) 

  return (
    <section>
      {parsedTodos }
    </section>
  )
}