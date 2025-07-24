// ✅ src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: "https://mskplace-caro-rachid-2024.onrender.com/api",
  withCredentials: true
});

export default api;
