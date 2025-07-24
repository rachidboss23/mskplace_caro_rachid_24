import React, { useState } from 'react';
import api from '../services/api';  // ✅ Usa tu instancia central
import '../assets/styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    try {
      await api.post('/usuarios/login', { email, password });  // ✅ SOLO usa api
      setMensaje('Inicio de sesión exitoso');
    } catch (error) {
      setError('Error al iniciar sesión');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
        {error && <p>{error}</p>}
        {mensaje && <p>{mensaje}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
