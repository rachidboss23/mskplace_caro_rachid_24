// src/pages/RegisterPage.js

import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/RegisterPage.css';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  // ✅ CORRECTO: Llama a la API BASE de .env
  const API_URL = "https://mskplace-caro-rachid-24-1.onrender.com/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    try {
      const nuevoUsuario = { email, password, nombre };
      await axios.post(`${API_URL}/usuarios/register`, nuevoUsuario);
      setMensaje('Usuario registrado exitosamente');
      setEmail('');
      setPassword('');
      setNombre('');
    } catch (error) {
      setError('Error al registrar el usuario');
      console.error(error);
    }
  };
console.log("API_URL en build:", API_URL);

  return (
    <div className="register-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/fondo2.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="register-box">
        <h1>Registro de Usuario</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="input-field"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          {mensaje && <p className="success-message">{mensaje}</p>}

          <button type="submit" className="register-button">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
