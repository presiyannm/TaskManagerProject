import React from "react";

const ShowAllTasks = ({
  tasks,
}: {
  tasks: { task: string; description: string; status: boolean }[];
}) => {
  return (
    <ul className="d-flex flex-wrap gap-3">
      {tasks.map((task) => (
          <div className="card mt-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <li key={task.task}>
                {task.task} : {task.description} :{" "}
                {task.status ? "Complete" : "Incomplete"}
              </li>
            </div>
          </div>
      ))}
    </ul>
  );
};

export default ShowAllTasks;
