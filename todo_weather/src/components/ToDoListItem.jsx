export default function ToDoListItem(props) {
 
  const {name,isComplete} = {props};

  return (
    <article className ={props.isComplete ? "complete" : "incomplete"}>
      <h1> {props.name}</h1>
      {!props.isComplete && <button> completed </button> }
      {/* {!props.isComplete && <button> complete </button>} */}
      {props.isComplete &&  <button> delete! </button>}

    </article>
  )
}