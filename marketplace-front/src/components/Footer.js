// src/components/Footer.js
import React from 'react';
import '../assets/styles/Footer.css'; 
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <span className="footer-left">2024 Musaikaplace by Rachid - Musaika</span>
        <img src="/images/LogoMusaika.png" alt="Logo Musaika" className="footer-logo" />
        
        {/* Contenedor para los íconos */}
        <div className="social-icons">
          <a href="https://www.instagram.com/musaikaescuelaenlinea" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined />
          </a>
          <a href="https://web.facebook.com/p/MusaiKa-escuela-en-l%C3%ADnea-100046841773284/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined />
          </a>
          <a href="https://wa.me/56946339895" target="_blank" rel="noopener noreferrer">
            <WhatsAppOutlined />
          </a>
          <a href="https://www.youtube.com/@musaikaedukativa4935" target="_blank" rel="noopener noreferrer">
            <YoutubeOutlined />
          </a>
        </div>
        <span className="footer-right"><a href="https://wa.me/56946339895" target="_blank" rel="contactos">Contacto</a></span>
      </div>
    </footer>
  );
}

export default Footer;