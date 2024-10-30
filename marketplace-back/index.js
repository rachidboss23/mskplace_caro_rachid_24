// backend/index.js
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Configuración de CORS para permitir solicitudes desde tu dominio de Render
const allowedOrigins = ['https://mskplace-caro-rachid-24-1.onrender.com'];
app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/usuarios', userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
