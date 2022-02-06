export default function ToDoListItem(props) {
 
  const name = props.todo.name; 
  const isComplete = props.todo.isComplete; 
  const deleteTodo = props.deleteTodo; 
  const updateTodoCompletion = props.updateTodoCompletion; 

  return (
    <article className ={isComplete ? "complete" : "incomplete"}>
      <h1> {name}</h1>
      {!isComplete && <button onClick = {() =>updateTodoCompletion(props.todo.id) }> completed </button> }
      {/* {!props.isComplete && <button> complete </button>} */}
      {isComplete &&  <button onClick = {()=>deleteTodo(props.todo.id)}> delete! </button>}
      {isComplete &&  <button onClick = {()=>updateTodoCompletion(props.todo.id)}> incompleted! </button>}

    </article>
  )
}