// ✅ marketplace-front/src/pages/HomePage.js limpio — sin obtenerProductos

import React, { useContext, useEffect, useState } from 'react';
import '../assets/styles/HomePage.css';
import { ProductContext } from '../context/ProductProvider';
import api from '../services/api'; // ✅ Usa instancia api.js
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { productos: productosContext, addCarrito } = useContext(ProductContext);
  const [productosBackend, setProductosBackend] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const res = await api.get('/products');
        setProductosBackend(res.data);
      } catch (error) {
        console.error('Error al cargar productos desde el backend:', error);
      }
    };

    cargarProductos();
  }, []);

  const productosAMostrar = productosContext.length > 0 ? productosContext : productosBackend;
  const primerasCuatroCards = productosAMostrar.slice(0, 4);

  return (
    <div className="home-container">
      <div className="logo-container">
        <img 
          src="/images/Logoprincipal.jpg" 
          alt="Logo principal" 
          className="logo-image"
        />
      </div>

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

      <div className="images-row">
        <img src="/images/publicidad01.jpg" alt="Publicidad 1" className="home-image" />
        <img src="/images/publicidad02.jpg" alt="Publicidad 2" className="home-image" />
        <img src="/images/publicidad03.jpg" alt="Publicidad 3" className="home-image" />
      </div>

      <div className="middle-section">
        <p>
          <i>
            Si eres profesor certificado o quieres ofrecer cursos innovadores, este es tu espacio.
            Aquí algunos de nuestros cursos:
          </i>
        </p>
      </div>

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
