import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddTask from "./pages/AddTask";
import TaskList from "./pages/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    return savedTasks || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Task Manager
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Add Task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasks">
                    Task List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<AddTask setTasks={setTasks} />} />
            <Route
              path="/tasks"
              element={<TaskList tasks={tasks} setTasks={setTasks} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
