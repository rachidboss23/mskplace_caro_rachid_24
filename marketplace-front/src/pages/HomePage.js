// src/pages/HomePage.js
import React, { useContext, useEffect, useState } from 'react';
import '../assets/styles/HomePage.css';
import { ProductContext } from '../context/ProductProvider'; // Contexto de productos
import { obtenerProductos } from '../services/api';  // Función para obtener productos desde el backend
import { useNavigate } from 'react-router-dom';  // Para navegar a la vista de detalle

function HomePage() {
  const { productos: productosContext, addCarrito } = useContext(ProductContext); // Obtener productos del contexto y carrito
  const [productosBackend, setProductosBackend] = useState([]);  // Productos desde el backend
  const navigate = useNavigate();  // Para redirigir a detalle

  // Cargar productos desde el backend
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosApi = await obtenerProductos();
        setProductosBackend(productosApi);  // Guardar productos en el estado
      } catch (error) {
        console.error('Error al cargar productos desde el backend:', error);
      }
    };

    cargarProductos();
  }, []);

  // Usar productos del contexto si están disponibles, de lo contrario usar productos del backend
  const productosAMostrar = productosContext.length > 0 ? productosContext : productosBackend;
  const primerasCuatroCards = productosAMostrar.slice(0, 4);  // Mostrar solo las primeras 4 cards

  return (
    <div className="home-container">
      {/* Logo principal debajo del Navbar */}
      <div className="logo-container">
        <img 
          src="/images/Logoprincipal.jpg" 
          alt="Logo principal" 
          className="logo-image"
        />
      </div>

      {/* Texto en la parte superior */}
      <div className="top-text">
        <p>
          Bienvenid@s a un espacio diseñado para transformar la educación.
          Aquí podrás tomar y vender cursos con metodologías innovadoras de 
          aprendizaje, entregando a tus estudiantes habilidades y competencias 
          para la vida. ¡Atrévete a crear tu curso y sé parte de nuestra comunidad 
          coeducativa comprometida con la infancia y juventud! Musaika "Innovación educativa 
          hoy, para la ética del mañana".
        </p>
      </div>

      {/* Contenedor para las 3 imágenes de publicidad */}
      <div className="images-row">
        <img src="/images/publicidad01.jpg" alt="Publicidad 1" className="home-image" />
        <img src="/images/publicidad02.jpg" alt="Publicidad 2" className="home-image" />
        <img src="/images/publicidad03.jpg" alt="Publicidad 3" className="home-image" />
      </div>

      {/* Texto adicional en cursiva */}
      <div className="middle-section">
        <p>
          <i>
            Si eres profesor certificado o quieres ofrecer cursos innovadores, este es tu espacio.
            Aquí algunos de nuestros cursos:
          </i>
        </p>
      </div>

      {/* Mostrar productos */}
      <div className="card-container">
        {primerasCuatroCards.length > 0 ? (
          primerasCuatroCards.map((producto) => (
            <div key={producto.id} className="card">
              <img src={producto.img || '/images/default.jpg'} alt={producto.name} />
              <div className="card-body">
                <h5>{producto.name}</h5>
                <p>{producto.desc}</p>
                <p>${producto.price}</p>
                <button className="btn btn-primary" onClick={() => navigate(`/detalle/${producto.id}`)}>
                  Ver más
                </button>
                <button className="btn btn-success" onClick={() => addCarrito(producto)}>
                  Agregar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
