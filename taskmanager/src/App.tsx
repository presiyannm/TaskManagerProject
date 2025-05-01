import { useState } from 'react'
import TaskManagerGetForm from './components/TaskManagerGetForm'
import ShowAllTasks from './components/ShowAllTasks'
function App() {
  const [tasks, setTasks] = useState<{task: string, description: string, status: boolean}[]>([]);
  const [showAllTasks, setShowAllTasks] = useState(false);

  const handleTaskSubmit = (task: string, description: string, status: boolean) => {
    setTasks([...tasks, {task, description, status}]);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskManagerGetForm className="mb-3" onTaskSubmit={handleTaskSubmit}/>
      <button onClick={() => setShowAllTasks(!showAllTasks)}>Show All Tasks</button>
      {showAllTasks && <ShowAllTasks tasks={tasks} />}
    </div>
  );
}

export default App
