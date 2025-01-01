import React from "react";
import { Link } from "react-router-dom";

const TaskList = ({ tasks, setTasks }) => {
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="card shadow p-4">
      <h2 className="card-title text-center mb-4">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-center">No tasks added yet.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.done ? "list-group-item-success" : ""
              }`}
            >
              <span
                style={{ cursor: "pointer" }}
                onClick={() => toggleTask(index)}
                className={task.done ? "text-decoration-line-through" : ""}
              >
                {task.task}
              </span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => toggleTask(index)}
              >
                {task.done ? "Undo" : "Complete"}
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-center">
        <Link to="/task-manager" className="btn btn-primary">
          Add New Task
        </Link>
      </div>
    </div>
  );
};

export default TaskList;
