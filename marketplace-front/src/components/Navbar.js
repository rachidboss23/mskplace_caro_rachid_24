// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AutoCompleteInput from './AutoCompleteInput';
import '../assets/styles/Navbar.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { ProductContext } from '../context/ProductProvider';

function Navbar() {
  const { carrito } = useContext(ProductContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalProductosCarrito = carrito.reduce((total, item) => total + item.count, 0);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleCloseMenu}>MusaikaPlace</Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleToggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={handleCloseMenu}>Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registro" onClick={handleCloseMenu}>Registrarse</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria" onClick={handleCloseMenu}>Galería</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/perfil" onClick={handleCloseMenu}>Mi Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crear-post" onClick={handleCloseMenu}>Crear Publicación</Link>
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
            <Link className="nav-link carrito-link" to="/carrito" onClick={handleCloseMenu}>
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
