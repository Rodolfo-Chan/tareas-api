//controllers/task.controllers.js 

const TaskService = require('../services/task.service');

exports.getAllTasks = async (req, res) => {
  const tasks = await TaskService.getAll();
  res.json(tasks);
};

exports.getTaskById = async (req, res) => {
  const task = await TaskService.getById(req.params.id);
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(task);
};

exports.createTask = async (req, res) => {
  const task = await TaskService.create(req.body);
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const updated = await TaskService.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  const deleted = await TaskService.delete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json({ mensaje: 'Tarea eliminada' });
};
