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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    try {
      const nuevoUsuario = { email, password, nombre };
      await axios.post('http://localhost:5001/api/usuarios/registro', nuevoUsuario);
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

          {/* Mensaje de error */}
          {error && <p className="error-message">{error}</p>}

          {/* Mensaje de éxito */}
          {mensaje && <p className="success-message">{mensaje}</p>}

          <button type="submit" className="register-button">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
