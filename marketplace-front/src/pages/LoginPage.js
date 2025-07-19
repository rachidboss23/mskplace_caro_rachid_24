// src/pages/LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const API_URL = "https://mskplace-caro-rachid-24-1.onrender.com/api";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    try {
      const response = await axios.post(`${API_URL}/usuarios/login`, { email, password });
      setMensaje('Login exitoso');
    } catch (error) {
      setError('Error en login');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
        {error && <p>{error}</p>}
        {mensaje && <p>{mensaje}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
