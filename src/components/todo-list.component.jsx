import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TodosList(props) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("http://localhost:4000/todo/")
      .then((result) => {
        setTodo(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const DeleteStudent = async (value) => {
    await axios
      .delete("http://localhost:4000/todo/" + value)
      .then((result) => {
        console.log("Todo successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.assign("/");
  };

  const Todo = (props) => (
    <tr>
      <td className={props.todo.todo_completed ? "completed" : ""}>
        {props.todo.todo_description}
      </td>
      <td className={props.todo.todo_completed ? "completed" : ""}>
        {props.todo.todo_responsible}
      </td>
      <td className={props.todo.todo_completed ? "completed" : ""}>
        {props.todo.todo_priority}
      </td>
      <td>
        <Link to={"/edit/" + props.todo._id}>Edit</Link>
      </td>
      <td>
        <button
          onClick={() => DeleteStudent(props.todo._id)}
          size="sm"
          variant="danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );

  function TodoList() {
    return todo.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  return (
    <div>
      <h3>Todos List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{TodoList()}</tbody>
      </table>
    </div>
  );
}
