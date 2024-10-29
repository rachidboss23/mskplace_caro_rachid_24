// src/routes/userRoutes.js
const express = require('express');
const { loginUsuario, registrarUsuario } = require('../controllers/userController');
const { verificarToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login', loginUsuario); // Ruta de login
router.post('/registro', registrarUsuario); // Ruta de registro

// Ruta protegida para verificar el token
router.get('/perfil', verificarToken, (req, res) => {
  res.json({ mensaje: 'Token válido', usuario: req.usuario });
});

module.exports = router;
