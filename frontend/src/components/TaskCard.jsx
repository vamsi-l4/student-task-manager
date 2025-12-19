import { api } from "../services/api";
import "../styles/TaskCard.css";

export default function TaskCard({ task, onEdit, onDelete, onToggle }) {
  const handleToggle = () => {
    onToggle(task._id);
  };

  const handleDelete = () => {
    onDelete(task._id);
  };

  const handleEdit = () => {
    onEdit(task);
  };

  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <span className={`priority ${task.priority}`}>{task.priority}</span>
      </div>
      <p className="task-description">{task.description}</p>
      <p className="task-due">Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No due date"}</p>
      <div className="task-actions">
        <button className="btn toggle-btn" onClick={handleToggle}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button className="btn edit-btn" onClick={handleEdit}>Edit</button>
        <button className="btn delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
