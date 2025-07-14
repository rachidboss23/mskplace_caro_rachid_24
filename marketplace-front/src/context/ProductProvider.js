// src/context/ProductProvider.js
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // Función para obtener datos del archivo JSON
  const getData = async () => {
    const response = await fetch("/productos.json");
    const data = await response.json();
    setProductos(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // Función para agregar productos al carrito
  const addCarrito = (producto) => {
    const productoExistente = carrito.find((p) => p.id === producto.id);
    if (productoExistente) {
      setCarrito(
        carrito.map((p) =>
          p.id === producto.id ? { ...p, count: p.count + 1 } : p
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, count: 1 }]);
    }
  };

  // Función para incrementar la cantidad de un producto en el carrito
  const incrementar = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].count++;
    setCarrito(nuevoCarrito);
  };

  // Función para decrementar la cantidad de un producto en el carrito
  const decrementar = (index) => {
    const nuevoCarrito = [...carrito];
    if (nuevoCarrito[index].count > 1) {
      nuevoCarrito[index].count--;
    } else {
      nuevoCarrito.splice(index, 1);
    }
    setCarrito(nuevoCarrito);
  };

  return (
    <ProductContext.Provider value={{ productos, carrito, addCarrito, incrementar, decrementar }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
