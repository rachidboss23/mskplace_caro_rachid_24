// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AutoCompleteInput from './AutoCompleteInput';
import '../assets/styles/Navbar.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { ProductContext } from '../context/ProductProvider';

function Navbar() {
  const { carrito } = useContext(ProductContext);

  const totalProductosCarrito = carrito.reduce((total, item) => total + item.count, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MusaikaPlace</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registro">Registrarse</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria">Galería</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/perfil">Mi Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crear-post">Crear Publicación</Link>
            </li>
          </ul>
          <AutoCompleteInput className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </AutoCompleteInput>
          
          <div className="nav-item carrito-container">
            <Link className="nav-link carrito-link" to="/carrito">
              <ShoppingCartOutlined className="shopping-cart-icon" />
              {totalProductosCarrito > 0 && (
                <span className="carrito-count">{totalProductosCarrito}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
