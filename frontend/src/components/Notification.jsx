import { useEffect, useState } from "react";
import "../styles/Notification.css";

export default function Notification({ tasks }) {
  const [overdue, setOverdue] = useState([]);

  useEffect(() => {
    const now = new Date();
    const overdueTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) < now);
    setOverdue(overdueTasks);
  }, [tasks]);

  if (overdue.length === 0) return null;

  return (
    <div className="notification">
      <h3>Overdue Tasks</h3>
      <ul>
        {overdue.map(task => (
          <li key={task._id}>{task.title} - Due: {task.dueDate.slice(0, 10)}</li>
        ))}
      </ul>
    </div>
  );
}