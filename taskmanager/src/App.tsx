import { useState } from 'react'
import TaskManagerGetForm from './components/TaskManagerGetForm'
import ShowAllTasks from './components/ShowAllTasks'

function App() {
  const [tasks, setTasks] = useState<{task: string, description: string, status: boolean}[]>([]);
  const [showAllTasks, setShowAllTasks] = useState(false);

  const handleTaskSubmit = (task: string, description: string, status: boolean) => {
    setTasks([...tasks, {task, description, status}]);
  };

  const handleTaskStatusChange = (task: string, status: boolean) => {
    setTasks(tasks.map(t => t.task === task ? {...t, status} : t));
  };

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Task Manager</span>
        </div>
      </nav>
      
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <TaskManagerGetForm className="mb-3" onTaskSubmit={handleTaskSubmit}/>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Your Tasks</h4>
              <button 
                className={`btn ${showAllTasks ? 'btn-danger' : 'btn-primary'}`}
                onClick={() => setShowAllTasks(!showAllTasks)}
              >
                {showAllTasks ? 'Hide Tasks' : 'Show All Tasks'}
              </button>
            </div>

            {showAllTasks && <ShowAllTasks tasks={tasks} onTaskStatusChange={handleTaskStatusChange} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
