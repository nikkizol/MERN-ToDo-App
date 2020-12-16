import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./create-todo.component";
import EditTodo from "./edit-todo.component";
import TodoList from "./todo-list.component";

export default function NavBarr() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://codingthesmartway.com"
            target="_blank"
          ></a>
          <Link to="/" className="navbar-brand">
            MERN Todo App
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Todo
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}
