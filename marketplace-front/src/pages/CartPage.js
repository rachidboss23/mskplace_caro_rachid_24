// src/pages/CartPage.js
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';
import '../assets/styles/CartPage.css'; // Importación correcta del archivo CSS

function CartPage() {
  const { carrito, incrementar, decrementar } = useContext(ProductContext);

  const sumaTotal = carrito.reduce(
    (acumulador, producto) => acumulador + producto.price * producto.count,
    0
  );

  return (
    <div className="container carrito-page">
      <h3>Detalle del Pedido</h3>
      {carrito.length === 0 ? (
        <div className="empty-cart">
          <p>No hay productos en el carrito</p>
          <img src="/images/Musaika.png" alt="Logo Musaika" className="musaika-logo" />
        </div>
      ) : (
        carrito.map((producto, index) => (
          <div
            className="d-flex justify-content-between align-items-center"
            key={producto.id}
          >
            <div className="d-flex align-items-center">
              <img
                src={producto.img}
                width={100}
                alt={producto.name}
                className="img-carrito"
              />
              <h4 className="mx-3">{producto.name}</h4>
            </div>
            <div>
              <button
                className="btn btn-dark"
                onClick={() => decrementar(index)}
              >
                -
              </button>
              <span className="mx-2">{producto.count}</span>
              <button
                className="btn btn-dark"
                onClick={() => incrementar(index)}
              >
                +
              </button>
            </div>
            <h4 className="mx-3">${producto.count * producto.price}</h4>
          </div>
        ))
      )}
      <h3>Total: ${sumaTotal}</h3>

      {/* Línea imaginaria */}
      <div className="line-simulator"></div>

      {/* Imagen de Musaika, siempre presente */}
      <div className="musaika-logo-container">
        <img src="/images/Musaika.png" alt="Logo Musaika" className="musaika-logo" />
      </div>

    </div>
  );
}

export default CartPage;
