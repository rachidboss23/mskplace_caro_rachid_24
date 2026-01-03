// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mskplace-caro-rachid-24-1.onrender.com/api',
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
