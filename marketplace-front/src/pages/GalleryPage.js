// ✅ marketplace-front/src/pages/GalleryPage.js (sin obtenerProductos)

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import '../assets/styles/GalleryPage.css';

function GalleryPage() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const respuesta = await api.get('/products');
        setProductos(respuesta.data);
      } catch (error) {
        setError('Error al cargar productos');
        console.error(error);
      }
    };
    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProductos(productos.filter(p => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="gallery-container">
      <h1>Productos</h1>
      {error && <p>{error}</p>}
      <div className="product-list">
        {productos.map(p => (
          <div key={p.id} className="product-item">
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
            <button onClick={() => handleDelete(p.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;