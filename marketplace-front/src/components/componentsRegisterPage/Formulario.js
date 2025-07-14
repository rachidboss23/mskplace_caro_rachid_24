// src/components/componentsRegisterPage/Formulario.js
import React, { useState } from 'react';

const Formulario = ({ mensaje, setMensaje }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleContrasenaChange = (e) => setContrasena(e.target.value);
  const handleConfirmarContrasenaChange = (e) => setConfirmarContrasena(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === '' || email === '' || contrasena === '' || confirmarContrasena === '') {
      setMensaje('Por favor, complete todos los campos.');
    } else {
      setMensaje('¡Registro exitoso!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="form-control mb-2" value={nombre} onChange={handleNombreChange} placeholder="Nombre" />
      <input type="email" className="form-control mb-2" value={email} onChange={handleEmailChange} placeholder="Email" />
      <input type="password" className="form-control mb-2" value={contrasena} onChange={handleContrasenaChange} placeholder="Contraseña" />
      <input type="password" className="form-control mb-2" value={confirmarContrasena} onChange={handleConfirmarContrasenaChange} placeholder="Confirmar Contraseña" />
      <button type="submit" className='btn btn-success'>Registrarse</button>
    </form>
  );
};

export default Formulario;
