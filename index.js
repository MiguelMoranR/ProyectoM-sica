// 1. Cargar variables de entorno PRIMERO (antes de cualquier import)
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const musicaRoutes = require('./routes/musicaRoutes')
const usuariosRoutes = require('./routes/usuariosRoutes')
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"])


const app = express()
// 2. Middleware para parsear JSON en el body de las peticiones
app.use(express.json())

// Montar las rutas bajo el prefijo /musica
app.use('/musica', musicaRoutes)
app.use('/usuarios', usuariosRoutes)

//app.listen(3000, () => console.log('🚀 Servidor en :3000'))

// 3. Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas');
  })
  .catch((error) => {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    process.exit(1); // detener la app si no hay conexión
  });

// 4. Importar rutas (las creamos después)
const musicaRouters = require('./routes/musicaRoutes');
app.use('/api/musica', musicaRoutes);

// 5. Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando', db: 'MongoDB Atlas' });
});

// 6. Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});