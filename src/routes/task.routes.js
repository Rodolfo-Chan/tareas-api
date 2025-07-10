const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/task.controller');

const validateTask = require('../middlewares/validateTask');
const verifyToken = require('../middlewares/verifyToken');

// Crear tarea
router.post('/', verifyToken, validateTask, createTask);

// ✅ Obtener todas las tareas del usuario autenticado
router.get('/', verifyToken, getAllTasks);

// ✅ Obtener una tarea específica por ID
router.get('/:id', verifyToken, getTaskById);

// ✅ Actualizar una tarea
router.put('/:id', verifyToken, updateTask);

// ✅ Eliminar una tarea
router.delete('/:id', verifyToken, deleteTask);

module.exports = router;
