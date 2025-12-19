import { useEffect, useState } from "react";
import { api } from "./services/api";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Modal from "./components/Modal";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("createdAt");
  const [editingTask, setEditingTask] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const fetchTasks = async () => {
    const params = {};
    if (filter !== "all") params.status = filter;
    // For simplicity, sort client-side for now, but backend can be updated
    const res = await api.get("/tasks", { params });
    let sortedTasks = res.data;
    if (sort === "priority") {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      sortedTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    } else if (sort === "dueDate") {
      sortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
    setTasks(sortedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter, sort]);

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

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <Header onAdd={() => { setEditingTask(null); setShowAddForm(true); }} />
      {showAddForm && (
        <Modal onClose={() => setShowAddForm(false)}>
          <AddTaskForm task={editingTask} onSubmit={handleAddTask} />
        </Modal>
      )}
      <FilterBar setFilter={setFilter} setSort={setSort} />
      <TaskList tasks={filteredTasks} onEdit={handleEdit} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}

export default App;
