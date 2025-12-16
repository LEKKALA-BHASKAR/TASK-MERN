import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim()) {
      setError('Task title cannot be empty');
      return;
    }

    if (title.trim().length > 200) {
      setError('Task title cannot exceed 200 characters');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_URL}/tasks`, {
        title: title.trim()
      });
      
      setTitle('');
      onTaskAdded(response.data);
      setError('');
    } catch (err) {
      console.error('Error adding task:', err);
      setError(err.response?.data?.error || 'Failed to add task. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="task-input"
            placeholder="Enter a new task..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError('');
            }}
            disabled={loading}
            maxLength={200}
          />
          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading || !title.trim()}
          >
            {loading ? 'Adding...' : 'Add Task'}
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="char-count">
          {title.length}/200 characters
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
