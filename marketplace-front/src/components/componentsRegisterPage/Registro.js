// src/components/componentsRegisterPage/Registro.js
import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
  const iconos = {
    facebook: 'bi bi-facebook',
    git: 'bi bi-github',
    linkedin: 'bi bi-linkedin'
  };

  const [mensaje, setMensaje] = useState('');

  return (
    <div className="registro text-center mt-5">
      <h1>Crea una cuenta</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '20px 0' }}>
        <SocialButton icono={iconos.facebook} />
        <SocialButton icono={iconos.git} />
        <SocialButton icono={iconos.linkedin} />
      </div>
      <p>O usa tu email para registrarte</p>
      <Formulario mensaje={mensaje} setMensaje={setMensaje} />
      <Alert mensaje={mensaje} tipo={mensaje ? 'danger' : 'success'} />
    </div>
  );
};

export default Registro;
