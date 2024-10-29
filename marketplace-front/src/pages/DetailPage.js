// src/pages/DetailPage.js
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { productos, addCarrito } = useContext(ProductContext);
  const { id } = useParams();

  // Encuentra el producto correspondiente al id de la URL
  const producto = productos.find((p) => p.id === id);

  return (
    <div className="container">
      {producto ? (
        <>
          <h1>{producto.name}</h1>
          <img src={producto.img} alt={producto.name} />
          <p>{producto.desc}</p> {/* Muestra la descripción del producto */}
          <p>Asignaturas: {producto.asignaturas.join(", ")}</p> {/* Muestra las asignaturas */}
          <p>Duración: {producto.tiempo}</p> {/* Muestra el tiempo */}
          <p>${producto.price}</p>
          <button className="btn btn-success" onClick={() => addCarrito(producto)}>
            Agregar al Carrito
          </button>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

export default DetailPage;
