// routes/pedidoRoutes.js
const express = require('express');
const pool = require('../config/db');
const router = express.Router();

// Obtener todos los pedidos
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pedidos');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener pedidos:', error);
    res.status(500).json({ error: 'Error al obtener pedidos' });
  }
});

// Crear un nuevo pedido
router.post('/', async (req, res) => {
  const { usuario_id, metodo_pago, total } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO pedidos (usuario_id, metodo_pago, total) VALUES ($1, $2, $3) RETURNING *',
      [usuario_id, metodo_pago, total]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    res.status(500).json({ error: 'Error al crear el pedido' });
  }
});

module.exports = router;
