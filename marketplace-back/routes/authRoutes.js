// routes/authRoutes.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
  const { nombre, email, password } = req.body;

  // Verificar si el usuario ya existe
  const usuarioExistente = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

  if (usuarioExistente.rows.length > 0) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }

  // Hashear la password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await pool.query(
      'INSERT INTO usuarios (nombre, email, contraseña) VALUES ($1, $2, $3)',
      [nombre, email, hashedPassword]
    );
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Login de usuario
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (usuario.rows.length === 0) {
      return res.status(400).json({ message: 'El usuario no existe' });
    }

    const validPassword = await bcrypt.compare(password, usuario.rows[0].contraseña);

    if (!validPassword) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: usuario.rows[0].id, email: usuario.rows[0].email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
