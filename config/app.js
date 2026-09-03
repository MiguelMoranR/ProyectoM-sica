const express = require('express');
const conectarDB = require('./config/db');
const userRoutes = require('./routes/usuariosRoutes');
const productRoutes = require('./routes/musicaRoutes');

const app = express();

// Conectar a MongoDB
conectarDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registrar rutas
app.use('/api/users', usuariosRoutes);
app.use('/api/products', musicaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: '¡API funcionando!' });
});

module.exports = app;