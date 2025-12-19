import "../styles/Header.css";

export default function Header({ onAdd }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.jpg" alt="Student Task Manager Logo" className="logo" />
        <h1>Student Task Manager</h1>
      </div>
      <button className="add-btn" onClick={onAdd}>Add Task</button>
    </header>
  );
}
