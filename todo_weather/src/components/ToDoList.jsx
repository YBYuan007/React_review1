import ToDoListItem from "./ToDoListItem";

export default function ToDoList (props) {
  // const {todos, updateTodoCompletion, deleteTodo} = (props);
  const todos = props.todos; 
  const deleteTodo = props.deleteTodo; 
  const updateTodoCompletion = props.updateTodoCompletion;
  
  const parsedTodos = Array.isArray(todos) && todos.map(todo => <ToDoListItem 
                                                                    todo={todo}
                                                                key = {todo.id} 
                                
                                                                deleteTodo= {deleteTodo}
                                                                updateTodoCompletion= {updateTodoCompletion}
                                                                /> ) 

  return (
    <section>
      {parsedTodos }
    </section>
  )
}