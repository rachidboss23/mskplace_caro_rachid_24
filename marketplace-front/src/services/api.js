// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api',  // Confirmar que el puerto 5001 es el correcto para tu backend
});

export const obtenerProductos = async () => {
  try {
    const respuesta = await api.get('/products');
    return respuesta.data;  // Retorna los datos recibidos del backend
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};
