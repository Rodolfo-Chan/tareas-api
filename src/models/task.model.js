const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  estado: { type: String, enum: ['pendiente', 'en_progreso', 'completada'], default: 'pendiente' }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
