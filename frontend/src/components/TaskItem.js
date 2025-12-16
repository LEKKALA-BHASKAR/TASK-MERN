import React from 'react';

function TaskItem({ task, onDelete, deleting }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="task-item">
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        <span className="task-date">{formatDate(task.createdAt)}</span>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDelete(task._id)}
        disabled={deleting}
        title="Delete task"
      >
        {deleting ? '⏳' : '🗑️'}
      </button>
    </div>
  );
}

export default TaskItem;
