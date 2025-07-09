//middlewares/validateTask.js

module.exports = (req, res, next) => {
  const { titulo, descripcion, estado } = req.body;
  if (!titulo || !descripcion) {
    return res.status(400).json({ error: 'Título y descripción son obligatorios' });
  }
  if (estado && !['pendiente', 'en_progreso', 'completada'].includes(estado)) {
    return res.status(400).json({ error: 'Estado inválido' });
  }
  next();
};
