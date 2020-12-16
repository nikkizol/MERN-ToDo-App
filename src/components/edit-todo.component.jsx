import axios from "axios";
import React, { useEffect, useState } from "react";

export default function EditTodo(props) {
  const [todo_description, setTodo_description] = useState("");
  const [todo_responsible, setTodo_responsible] = useState("");
  const [todo_priority, setTodo_priority] = useState("");
  const [todo_completed, setTodo_completed] = useState(false);

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    const result = await axios.get(
      "http://localhost:4000/todo/" + props.match.params.id
    );
    console.log(result);
    setTodo_description(result.data.todo_description);
    setTodo_responsible(result.data.todo_responsible);
    setTodo_priority(result.data.todo_priority);
    setTodo_completed(result.data.todo_completed);
  };

  function HandleChangeTodoDescription(e) {
    setTodo_description(e.target.value);
  }

  function HandleChangeTodoResponsible(e) {
    setTodo_responsible(e.target.value);
  }

  function HandleChangeTodoPriority(e) {
    setTodo_priority(e.target.value);
  }

  function HandleChangeTodoCompleted(e) {
    setTodo_completed(!todo_completed);
  }

  function HandleSubmit(e) {
    e.preventDefault();

    const obj = {
      todo_description: todo_description,
      todo_responsible: todo_responsible,
      todo_priority: todo_priority,
      todo_completed: todo_completed,
    };

    axios
      .post("http://localhost:4000/todo/update/" + props.match.params.id, obj)
      .then((res) => console.log(res.data));

    props.history.push("/");
  }

  return (
    <div>
      <h3 align="center">Update Todo</h3>
      <form onSubmit={HandleSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            value={todo_description}
            onChange={HandleChangeTodoDescription}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            value={todo_responsible}
            onChange={HandleChangeTodoResponsible}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={todo_priority === "Low"}
              onChange={HandleChangeTodoPriority}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={todo_priority === "Medium"}
              onChange={HandleChangeTodoPriority}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={todo_priority === "High"}
              onChange={HandleChangeTodoPriority}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            id="completedCheckbox"
            type="checkbox"
            name="completedCheckbox"
            onChange={HandleChangeTodoCompleted}
            checked={todo_completed}
            value={todo_completed}
          />
          <label className="form-check-label" htmlFor="completedCheckbox">
            Completed
          </label>
        </div>

        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
