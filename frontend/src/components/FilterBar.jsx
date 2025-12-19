import "../styles/FilterBar.css";

export default function FilterBar({ setFilter, setSort }) {
  return (
    <div className="filter-bar">
      <div className="filters">
        <label>Filter:</label>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <div className="sorts">
        <label>Sort by:</label>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="createdAt">Created Date</option>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
    </div>
  );
}
