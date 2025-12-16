import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, loading }) {
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (taskId) => {
    setDeletingId(taskId);
    await onDelete(taskId);
    setDeletingId(null);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading tasks...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-message">📝 No tasks yet. Add your first task!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={handleDelete}
          deleting={deletingId === task._id}
        />
      ))}
    </div>
  );
}

export default TaskList;
