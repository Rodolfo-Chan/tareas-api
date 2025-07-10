const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/task.routes');
// Prepara rutas de usuarios/autenticación
const authRoutes = require('./routes/auth.routes'); // <-- por agregar

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('🚀 API de tareas funcionando en Railway');
});

// Rutas
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes); // <-- login y registro

module.exports = app;
