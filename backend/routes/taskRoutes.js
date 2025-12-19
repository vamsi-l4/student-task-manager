const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET /api/tasks - list tasks for the authenticated user, with optional filters
router.get('/', async (req, res) => {
  try {
    const { status, sort } = req.query;
    let filter = { userId: req.userId };
    if (status === 'pending') filter.completed = false;
    else if (status === 'completed') filter.completed = true;
    
    let sortOption = { createdAt: -1 };
    if (sort === 'priority') {
      sortOption = { priority: 1 }; // alphabetical: high, low, medium - not ideal, but ok
    } else if (sort === 'dueDate') {
      sortOption = { dueDate: 1 };
    }
    
    const tasks = await Task.find(filter).sort(sortOption);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/tasks/:id - get single task if owned by user
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/tasks - create task for the user
router.post('/', async (req, res) => {
  const task = new Task({
    userId: req.userId,
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/tasks/:id - update task if owned by user
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.priority = req.body.priority || task.priority;
    task.dueDate = req.body.dueDate || task.dueDate;
    task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/tasks/:id - delete task if owned by user
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    await task.deleteOne();
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
