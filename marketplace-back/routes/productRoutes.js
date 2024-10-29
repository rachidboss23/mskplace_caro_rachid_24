// routes/productRoutes.js
const express = require('express');
const pool = require('../config/db');
const { verificarToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM publicaciones');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los productos' });
  }
});

router.post('/', async (req, res) => {
  const { titulo, descripcion, precio, categoria_id, usuario_id } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO publicaciones (titulo, descripcion, precio, categoria_id, usuario_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [titulo, descripcion, precio, categoria_id, usuario_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el producto' });
  }
});

router.delete('/:id', verificarToken, async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM publicaciones WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    res.json({ mensaje: 'Producto eliminado con éxito', producto: result.rows[0] });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el producto' });
  }
});

module.exports = router;
