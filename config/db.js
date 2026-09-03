const mongoose = require('mongoose');
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"])

const conectarDB = async () => {
  try {
    const conexion = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mi-proyecto', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('✅ MongoDB conectada:', conexion.connection.host);
    return conexion;
  } catch (error) {
    console.error('❌ Error al conectar MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = conectarDB;