// src/controllers/userController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../config/db');

const registrarUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;
  
  try {
    console.log('Intentando registrar usuario:', nombre, email);
    
    const usuarioExistente = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    if (usuarioExistente.rows.length > 0) {
      console.log('El email ya está registrado');
      return res.status(400).json({ mensaje: 'El email ya está registrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await pool.query(
      'INSERT INTO usuarios (nombre, email, contraseña) VALUES ($1, $2, $3) RETURNING *',
      [nombre, email, hashedPassword]
    );
    const usuario = result.rows[0];
    
    console.log('Usuario registrado con éxito:', usuario);

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.json({ token });
  } catch (error) {
    console.error('Error en registro de usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
};

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    const usuario = result.rows[0];

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const contrasenaCorrecta = await bcrypt.compare(password, usuario.contraseña);
    if (!contrasenaCorrecta) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
};

module.exports = { registrarUsuario, loginUsuario };
