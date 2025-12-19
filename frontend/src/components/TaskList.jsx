import TaskCard from "./TaskCard";
import "../styles/TaskList.css";

export default function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-state">No tasks found. Add a new task to get started!</p>
      ) : (
        tasks.map(task => (
          <TaskCard key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} onToggle={onToggle} />
        ))
      )}
    </div>
  );
}
