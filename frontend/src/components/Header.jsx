import "../styles/Header.css";

export default function Header({ onAdd, onLogout, user }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.jpg" alt="Student Task Manager Logo" className="logo" />
        <h1>Student Task Manager</h1>
      </div>
      <div className="user-info">
        <span>Welcome, {user?.name}</span>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
        <button className="add-btn" onClick={onAdd}>Add Task</button>
      </div>
    </header>
  );
}
