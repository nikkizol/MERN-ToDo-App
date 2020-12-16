import React, { useState } from "react";

export default function CreateTodo() {
  const [todo_description, setTodo_description] = useState("");
  const [todo_responsible, setTodo_responsible] = useState("");
  const [todo_priority, setTodo_priority] = useState("");
  const [todo_completed, setTodo_completed] = useState(false);

  function HandleChangeTodoDescription(e) {
    setTodo_description(e.target.value);
  }

  function HandleChangeTodoResponsible(e) {
    setTodo_responsible(e.target.value);
  }

  function HandleChangeTodoPriority(e) {
    setTodo_priority(e.target.value);
  }

  function HandleSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${todo_description}`);
    console.log(`Todo Responsible: ${todo_responsible}`);
    console.log(`Todo Priority: ${todo_priority}`);

    setTodo_description("");
    setTodo_responsible("");
    setTodo_priority("");
    setTodo_completed(false);
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
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

        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
