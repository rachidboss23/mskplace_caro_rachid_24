import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/CreatePostPage.css';

function CreatePostPage() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');

    try {
      const nuevoProducto = { titulo, descripcion, precio };
      await axios.post('http://localhost:5001/api/products', nuevoProducto);
      setMensaje('Producto creado exitosamente');
      setTitulo('');
      setDescripcion('');
      setPrecio('');
    } catch (error) {
      setMensaje('Error al crear el producto');
      console.error(error);
    }
  };

  return (
    <div className="create-post-container">
      <div className="main-content">
        {/* Sidebar izquierda - Curso en Venta */}
        <aside className="sidebar-left">
          <div className="course-info">
            <h3>Curso en Venta</h3>
            <form onSubmit={handleSubmit}>
              <label>Título del curso:</label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
              <label>Descripción:</label>
              <textarea
                rows="3"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
              <label>Precio:</label>
              <input
                type="text"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
              />

              {/* Botón para guardar la información */}
              <button type="submit" className="save-info-button">Guardar información</button>
              {mensaje && <p>{mensaje}</p>}
            </form>
          </div>
        </aside>

        {/* Recuadro de vista previa de la publicación e información del docente */}
        <section className="preview-and-info-section">
          <div className="preview-left">
            <h3>Vista Previa de la Publicación</h3>
          </div>
          <div className="teacher-info-right">
            <h3>Información del Docente</h3>
            <label>Título:</label>
            <input type="text" placeholder="Ejemplo de título" disabled />
            <label>Descripción:</label>
            <textarea rows="3" placeholder="Ejemplo de descripción" disabled />
            <label>Precio:</label>
            <input type="text" placeholder="$0.00" disabled />
            <label>Modalidad:</label>
            <input type="text" placeholder="Online" disabled />
            <label>Número de sesiones:</label>
            <input type="text" placeholder="10 sesiones" disabled />
            <label>Duración de la clase:</label>
            <input type="text" placeholder="2 horas" disabled />
          </div>
        </section>
      </div>

      <div className="line-separator"></div>
    </div>
  );
}

export default CreatePostPage;
