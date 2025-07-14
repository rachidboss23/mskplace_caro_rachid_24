import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/LoginPage.css';  // Verifica que el estilo esté bien importado

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!email || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/usuarios/login', { email, password });

      if (response.data.token) {
        // Almacenar el token JWT en localStorage
        localStorage.setItem('token', response.data.token);

        setSuccessMessage('Acceso exitoso. ¡Bienvenido!');
        navigate('/galeria');  // Redirigir a la galería después de iniciar sesión
      }
    } catch (error) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Inicio de Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Ingresa tu email" 
              className="input-field" 
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
            />
          </div>

          {/* Mensaje de error */}
          {error && <p className="error-message">{error}</p>}

          {/* Mensaje de éxito */}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
