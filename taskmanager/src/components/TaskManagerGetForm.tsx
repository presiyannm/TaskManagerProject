import { useState } from "react";

const TaskManagerGetForm = ({onTaskSubmit, className}: {onTaskSubmit: (task: string, description: string, status: boolean) => void, className?: string}) => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(task, description, status);
        onTaskSubmit(task, description, status);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "task") {
            setTask(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "status") {
            setStatus(value === "true");
        }
    };

    return ( 
    <div className={`container ${className || ''}`}>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="task">Task</label>
            <input type="text" name="task" value={task} className="form-control" onChange={handleChange} />
        </div>  
        <div className="form-group pb-3">
            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={description} className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group pb-3">
            <label htmlFor="status">Status</label>
            <select name="status" value={status.toString()} className="form-control" onChange={handleChange}>
                <option value="false">Incomplete</option>
                <option value="true">Complete</option>
            </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    )
}

export default TaskManagerGetForm;