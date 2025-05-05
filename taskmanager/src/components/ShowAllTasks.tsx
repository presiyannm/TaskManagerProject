import React from "react";

const ShowAllTasks = ({
  tasks,
  onTaskStatusChange
}: {
  tasks: { task: string; description: string; status: boolean }[];
  onTaskStatusChange: (task: string, status: boolean) => void;
}) => {
  if (tasks.length === 0) {
    return (
      <div className="alert alert-info">
        No tasks available. Add some tasks to get started!
      </div>
    );
  }

  return (
    <div className="row g-4">
      {tasks.map((task) => (
        <div className="col-md-6 col-lg-4" key={task.task}>
          <div className={`card h-100 ${task.status ? 'border-success' : 'border-warning'}`}>
            <div className="card-header bg-transparent">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={task.status}
                  onChange={(e) => onTaskStatusChange(task.task, e.target.checked)}
                  id={`task-${task.task}`}
                />
                <label 
                  className={`form-check-label ${task.status ? 'text-decoration-line-through' : ''}`} 
                  htmlFor={`task-${task.task}`}
                >
                  {task.task}
                </label>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">{task.description}</p>
              <div className="d-flex justify-content-end">
                <span className={`badge ${task.status ? 'bg-success' : 'bg-warning'}`}>
                  {task.status ? 'Completed' : 'Pending'}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowAllTasks;
