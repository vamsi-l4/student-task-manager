import { useState, useEffect } from "react";
import "../styles/AddTaskForm.css";

export default function AddTaskForm({ task, onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "low",
    dueDate: ""
  });

  useEffect(() => {
    if (task) {
      setForm({
        title: task.title || "",
        description: task.description || "",
        priority: task.priority || "low",
        dueDate: task.dueDate ? task.dueDate.slice(0, 10) : ""
      });
    }
  }, [task]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    if (!task) {
      setForm({ title: "", description: "", priority: "low", dueDate: "" });
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h2>{task ? "Edit Task" : "Add New Task"}</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          required
          placeholder="Enter task title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Enter task description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Priority</label>
        <select
          value={form.priority}
          onChange={e => setForm({ ...form, priority: e.target.value })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          value={form.dueDate}
          onChange={e => setForm({ ...form, dueDate: e.target.value })}
        />
      </div>
      <button type="submit" className="submit-btn">{task ? "Update Task" : "Add Task"}</button>
    </form>
  );
}
