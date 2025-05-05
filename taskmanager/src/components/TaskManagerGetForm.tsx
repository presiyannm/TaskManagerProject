import { useState } from "react";

const TaskManagerGetForm = ({onTaskSubmit, className}: {onTaskSubmit: (task: string, description: string, status: boolean) => void, className?: string}) => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!task.trim()) {
            setError("Task name is required");
            return;
        }
        if (!description.trim()) {
            setError("Description is required");
            return;
        }
        setError("");
        onTaskSubmit(task, description, status);
        setTask("");
        setDescription("");
        setStatus(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setError("");
        if (name === "task") {
            setTask(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "status") {
            setStatus(value === "true");
        }
    };

    return ( 
        <div className={`${className || ''}`}>
            <h5 className="card-title mb-3">Add New Task</h5>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Task Name</label>
                    <input 
                        type="text" 
                        id="task"
                        name="task" 
                        value={task} 
                        className="form-control" 
                        onChange={handleChange}
                        placeholder="Enter task name"
                    />
                </div>  
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input 
                        type="text" 
                        id="description"
                        name="description" 
                        value={description} 
                        className="form-control" 
                        onChange={handleChange}
                        placeholder="Enter task description"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select 
                        id="status"
                        name="status" 
                        value={status.toString()} 
                        className="form-select" 
                        onChange={handleChange}
                    >
                        <option value="false">Incomplete</option>
                        <option value="true">Complete</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default TaskManagerGetForm;