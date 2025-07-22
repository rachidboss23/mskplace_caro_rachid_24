// backend/index.js
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


// ✅ CORS CORRECTO: Render + Localhost + GitHub Pages
const allowedOrigins = [
  'https://mskplace-caro-rachid-24-1.onrender.com',
  'http://localhost:3000',
  'https://rachidboss23.github.io'
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// ✅ Monta rutas limpias
app.use('/api/products', productRoutes);
app.use('/api/usuarios', userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
