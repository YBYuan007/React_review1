import { useState } from "react";

export default function ToDoForm(props) {
  const addTodo = props.addTodo;

  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const targetChangeValue = event.target.value;
    const targetChangeName = event.target.name;

    const newFormData = { ...formData };
    newFormData[targetChangeName] = targetChangeValue;
    setFormData(newFormData);
  };

  const handleSumit = (event) => {
    event.preventDefault();
    addTodo(formData);
    setFormData({ ...formData, name: "" });
  };

  return (
    <form onSubmit={handleSumit}>
      <input
        type="text"
        placeholder="Enter task!"
        name="name"
        value={formData.name}
        onChange={handleChange}
        // onKeyDown={handleSumit}
      />
      <button>Add task to list</button>
    </form>
  );
}
