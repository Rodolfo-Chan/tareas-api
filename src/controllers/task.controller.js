//controllers/task.controllers.js 

const Task = require('../models/task.model');

// Obtener todas las tareas del usuario autenticado

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ usuario: req.user.userId });
    res.json(tasks);
  } catch (error) {
    console.error('Error en getAllTasks:', error);
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};
// Obtener una tarea específica por ID (del usuario autenticado)
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, usuario: req.user.userId });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar la tarea' });
  }
};

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const { titulo, descripcion, estado } = req.body;

    const nuevaTarea = new Task({
      titulo,
      descripcion,
      estado,
      usuario: req.user.userId // 👈 Aquí se usa correctamente
    });

    await nuevaTarea.save();
    res.status(201).json(nuevaTarea);
  } catch (error) {
    console.error('Error al crear la tareassss:', error);
    console.log('Usuario autenticado:', req.user); // Esto debe mostrar el objeto decodificado del JWT

    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};


// Actualizar una tarea del usuario autenticado
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, usuario: req.user.userId },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};

// Eliminar una tarea del usuario autenticado
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, usuario: req.user.userId });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json({ mensaje: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};
