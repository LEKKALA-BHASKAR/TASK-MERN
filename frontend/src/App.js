import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Failed to load tasks. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleTaskAdded = (newTask) => {
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/tasks/${taskId}`);
      setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
    } catch (err) {
      console.error('Error deleting task:', err);
      alert('Failed to delete task. Please try again.');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">📋 Task Manager</h1>
          <p className="app-subtitle">Stay organized, stay productive</p>
        </header>

        <TaskForm onTaskAdded={handleTaskAdded} />

        {error && (
          <div className="error-banner">
            <span>⚠️ {error}</span>
            <button onClick={fetchTasks} className="retry-btn">
              Retry
            </button>
          </div>
        )}

        <div className="tasks-container">
          <div className="tasks-header">
            <h2>Your Tasks ({tasks.length})</h2>
            {tasks.length > 0 && (
              <button onClick={fetchTasks} className="refresh-btn" title="Refresh tasks">
                🔄
              </button>
            )}
          </div>
          <TaskList 
            tasks={tasks} 
            onDelete={handleDeleteTask} 
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
