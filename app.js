const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta raíz para verificar que el servidor responde
app.get('/', (req, res) => {
  res.send('🚀 API de tareas funcionandoo en Railway');
});

// Rutas de tareas
app.use('/api/tasks', taskRoutes);

module.exports = app;