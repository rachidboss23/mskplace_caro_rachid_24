// src/components/componentsRegisterPage/SocialButton.js
import React from 'react';

const SocialButton = ({ icono }) => {
  const style = {
    border: 'solid 1px black',
    padding: '5%',
    width: '18%',
    borderRadius: '100%'
  };

  return (
    <div style={style}>
      <i className={icono}></i>
    </div>
  );
};

export default SocialButton;
