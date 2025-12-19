import { useEffect, useState } from "react";
import { api } from "./services/api";
import { useAuth } from "./contexts/AuthContext";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Modal from "./components/Modal";
import AuthForm from "./components/AuthForm";
import Notification from "./components/Notification";
import "./styles/App.css";

function App() {
  const { user, logout, loading } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("createdAt");
  const [editingTask, setEditingTask] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    if (!user) return;
    const params = { sort };
    if (filter !== "all") params.status = filter;
    const res = await api.get("/tasks", { params });
    setTasks(res.data);
  };

  useEffect(() => {
    if (user) fetchTasks();
  }, [user, filter, sort]);

  const handleAddTask = async (taskData) => {
    if (editingTask) {
      await api.put(`/tasks/${editingTask._id}`, taskData);
      setEditingTask(null);
    } else {
      await api.post("/tasks", taskData);
    }
    fetchTasks();
    setShowAddForm(false);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleToggle = async (id) => {
    const task = tasks.find(t => t._id === id);
    await api.put(`/tasks/${id}`, { completed: !task.completed });
    fetchTasks();
  };

  const handleReorder = (reorderedTasks) => {
    setTasks(reorderedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesFilter = filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (loading) return <div>Loading...</div>;
  if (!user) return <AuthForm />;

  return (
    <div className="app">
      <Header onAdd={() => { setEditingTask(null); setShowAddForm(true); }} onLogout={logout} user={user} />
      <Notification tasks={tasks} />
      {showAddForm && (
        <Modal onClose={() => setShowAddForm(false)}>
          <AddTaskForm task={editingTask} onSubmit={handleAddTask} />
        </Modal>
      )}
      <FilterBar setFilter={setFilter} setSort={setSort} setSearch={setSearch} />
      <TaskList tasks={filteredTasks} onEdit={handleEdit} onDelete={handleDelete} onToggle={handleToggle} onReorder={handleReorder} />
    </div>
  );
}

export default App;
