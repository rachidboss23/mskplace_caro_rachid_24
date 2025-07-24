const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: [
    "https://mskplace-caro-rachid-24-1.onrender.com",
    "http://localhost:3000"
  ],
  credentials: true
}));

app.use(express.json());

// Tus rutas
app.use('/api', require('./routes/api')); // O como tengas montado

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
