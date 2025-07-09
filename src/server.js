require('dotenv').config();
const connectDB = require('./config/db');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Importante para Railway/Docker

// Manejo de errores no capturados
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

connectDB()
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`✅ Servidor corriendo en http://${HOST}:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar con MongoDB:', err);
    process.exit(1);
  });