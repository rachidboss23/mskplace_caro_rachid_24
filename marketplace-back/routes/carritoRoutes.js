// routes/carritoRoutes.js
const express = require('express');
const pool = require('../config/db');
const router = express.Router();

// Obtener todos los carritos
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM carrito');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener carritos:', error);
    res.status(500).json({ error: 'Error al obtener carritos' });
  }
});

module.exports = router;
