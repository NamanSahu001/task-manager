import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ setTasks }) => {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const handleAddTask = (e) => {
    e.preventDefault(); 
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, { task, done: false }]);
      setTask("");
      navigate("/tasks");
    }
  };

return (
    <div className="card shadow p-4">
        <h2 className="card-title text-center">Add New Task</h2>
        <form onSubmit={handleAddTask}>
            <div className="form-group mt-3">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter your task"
                    className="form-control"
                />
            </div>
            <button
                type="submit" 
                className="btn btn-primary btn-block mt-3 w-100"
            >
                Add Task
            </button>
        </form>
    </div>
);
};

export default AddTask;
