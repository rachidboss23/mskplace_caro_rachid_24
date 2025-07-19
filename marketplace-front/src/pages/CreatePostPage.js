// src/pages/CreatePostPage.js

import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/CreatePostPage.css';

function CreatePostPage() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const API_URL = "https://mskplace-caro-rachid-24-1.onrender.com/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    try {
      const nuevoProducto = { titulo, descripcion, precio };
      await axios.post(`${API_URL}/products`, nuevoProducto);
      setMensaje('Producto creado exitosamente');
      setTitulo('');
      setDescripcion('');
      setPrecio('');
    } catch (error) {
      setError('Error al crear producto');
      console.error(error);
    }
  };

  return (
    <div className="create-post-container">
      <h1>Crear Publicación</h1>
      <form onSubmit={handleSubmit}>
        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" required />
        <input value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" required />
        {error && <p>{error}</p>}
        {mensaje && <p>{mensaje}</p>}
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
}

export default CreatePostPage;
