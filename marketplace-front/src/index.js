// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap primero
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa JS de Bootstrap para funcionalidad hamburguesa
import './index.css';                           // Luego, estilos globales personalizados
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Opcional para medir el rendimiento de la aplicación
reportWebVitals();
