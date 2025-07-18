// src/pages/GalleryPage.js
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/GalleryPage.css';
import { ProductContext } from '../context/ProductProvider';

function GalleryPage() {
  const [productosBackend, setProductosBackend] = useState([]);
  const [productosJson, setProductosJson] = useState([]);
  const { addCarrito } = useContext(ProductContext);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const obtenerProductosBackend = async () => {
    try {
      const respuesta = await axios.get('https://mskplace-caro-rachid-24-1.onrender.com/api/products');
      setProductosBackend(respuesta.data);
    } catch (error) {
      console.error('Error al cargar productos del backend:', error);
    }
  };

  const obtenerProductosJson = async () => {
    try {
      const respuesta = await fetch('/productos.json');
      if (!respuesta.ok) {
        throw new Error(`Error al cargar productos del JSON: ${respuesta.statusText}`);
      }
      const data = await respuesta.json();
      setProductosJson(data);
    } catch (error) {
      console.error('Error al cargar productos del JSON:', error);
    }
  };

  const eliminarProducto = async (id) => {
    if (!token) {
      alert('Por favor inicia sesión para eliminar productos.');
      return;
    }

    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      try {
        const response = await axios.delete(`https://mskplace-caro-rachid-24-1.onrender.com/api/products/${id}`, {

          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setProductosBackend(productosBackend.filter(producto => producto.id !== id));
          alert('Producto eliminado con éxito.');
        } else {
          alert('No se pudo eliminar el producto.');
        }
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
        alert('Hubo un error al eliminar el producto.');
      }
    }
  };

  useEffect(() => {
    obtenerProductosBackend();
    obtenerProductosJson();
  }, []);

  const verMasDetalles = (productoId) => {
    navigate(`/detalle/${productoId}`);
  };

  return (
    <div className="gallery-container">
      <h2>Galería de Productos</h2>
      <div className="gallery-grid">
        {productosBackend.map((producto) => (
          <div className="card" key={producto.id}>
            <img src={producto.img || '/images/default-product.jpg'} alt={producto.titulo} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{producto.titulo}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <p className="card-price">${producto.precio}</p>
              <button className="btn btn-primary" onClick={() => verMasDetalles(producto.id)}>Ver Más</button>
              <button className="btn btn-success" onClick={() => addCarrito(producto)}>Agregar</button>
              <button
                className={`btn ${token ? 'btn-danger' : 'btn-secondary'}`}
                onClick={() => token && eliminarProducto(producto.id)}
                disabled={!token}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
        {productosJson.map((producto) => (
          <div className="card" key={producto.id}>
            <img src={producto.img || '/images/default-product.jpg'} alt={producto.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{producto.name}</h5>
              <p className="card-text">{producto.desc || 'Descripción no disponible'}</p>
              <p className="card-price">${producto.price}</p>
              <button className="btn btn-primary" onClick={() => verMasDetalles(producto.id)}>Ver Más</button>
              <button className="btn btn-success" onClick={() => addCarrito(producto)}>Agregar</button>
              <button
                className={`btn ${token ? 'btn-danger' : 'btn-secondary'}`}
                onClick={() => token && eliminarProducto(producto.id)}
                disabled={!token}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
