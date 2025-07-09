const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('🟢 MongoDB conectado');
  } catch (err) {
    console.error('🔴 Error de conexión a MongoDB:', err.message);
    throw err; // Propaga el error para manejarlo en server.js
  }
};

module.exports = connectDB;