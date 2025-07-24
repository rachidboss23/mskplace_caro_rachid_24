// ✅ pages/RegisterPage.js
import React, { useState } from 'react';
import api from '../services/api';
import '../assets/styles/RegisterPage.css';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    try {
      const nuevoUsuario = { email, password, nombre };
      await api.post('/usuarios/registro', nuevoUsuario);
      setMensaje('Usuario registrado exitosamente');
      setEmail('');
      setPassword('');
      setNombre('');
    } catch (error) {
      setError('Error al registrar el usuario');
      console.error(error);
    }
  };

  return (
    <div className="register-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/fondo2.jpg'})` }}>
      <div className="register-box">
        <h1>Registro de Usuario</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
          {error && <p className="error-message">{error}</p>}
          {mensaje && <p className="success-message">{mensaje}</p>}
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
