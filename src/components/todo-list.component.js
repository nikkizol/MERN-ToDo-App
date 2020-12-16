import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TodosList() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:4000/todo/");
    console.log(result.data);
    setTodo(result.data);
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/todo/")
  //     .then((response) => {
  //       setTodo(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const Todo = (props) => (
    <tr>
      <td>{props.todo.todo_description}</td>
      <td>{props.todo.todo_responsible}</td>
      <td>{props.todo.todo_priority}</td>
      <td>
        <Link to={"/edit/" + props.todo._id}>Edit</Link>
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
