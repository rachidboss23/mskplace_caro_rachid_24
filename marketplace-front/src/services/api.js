import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const obtenerProductos = async () => {
  try {
    const respuesta = await api.get('/products');
    return respuesta.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};
