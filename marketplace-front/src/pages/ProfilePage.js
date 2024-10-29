// src/pages/ProfilePage.js
import React, { useState, useEffect } from 'react';
import '../assets/styles/ProfilePage.css';

function ProfilePage() {
  const [user, setUser] = useState({
    name: '',
    role: 'profesor',
    email: '',
    profileImage: '',
    courses: [], // Cursos asociados
    totalStudents: 0,
    totalIncome: 0,
    avgRating: 0, // Promedio de calificaciones de los cursos
    messages: [], // Mensajes de estudiantes
  });

  useEffect(() => {
    const fetchUserData = () => {
      const userData = {
        name: 'Juan Pérez',
        role: 'profesor',
        email: 'juanperez@email.com',
        profileImage: '', // URL o placeholder de imagen
        totalStudents: 120, // Total de estudiantes en todos los cursos
        totalIncome: 4500, // Total de ingresos de los cursos
        avgRating: 4.5, // Promedio de calificaciones
        courses: [
          { title: 'Curso de React', students: 40, price: 200, status: 'Activo' },
          { title: 'Curso de JavaScript Avanzado', students: 80, price: 300, status: 'Activo' },
        ],
        messages: [
          { student: 'María López', message: 'Tengo una duda sobre el curso de React.' },
          { student: 'Carlos García', message: '¿Cuándo subes nuevos contenidos?' },
        ],
      };
      setUser(userData);
    };

    fetchUserData();
  }, []);

  return (
    <div
      className="profile-background"  // El contenedor para la imagen de fondo
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/fondo2.jpg'})`, // Imagen desde public
        backgroundSize: 'cover', // Que cubra toda la pantalla
        backgroundPosition: 'center', // Centramos la imagen
        backgroundRepeat: 'no-repeat', // Sin repetición
        minHeight: '100vh', // Asegura que ocupe toda la pantalla
      }}
    >
      <div className="profile-container"> {/* Mantiene el contenido centrado */}
        {/* Información básica del profesor */}
        <div className="profile-header">
          <div className="profile-picture">
            <div className="profile-circle"></div>
          </div>
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <div className="role-toggle">
              <span className={`role-badge ${user.role === 'profesor' ? 'selected' : ''}`}>Profesor</span>
              <span className={`role-badge ${user.role === 'estudiante' ? 'selected' : ''}`}>Estudiante</span>
            </div>
          </div>
        </div>

        {/* Estadísticas rápidas del perfil */}
        <div className="profile-stats">
          <div className="stat-item">
            <h4>Total Estudiantes</h4>
            <p>{user.totalStudents}</p>
          </div>
          <div className="stat-item">
            <h4>Ingresos Totales</h4>
            <p>${user.totalIncome}</p>
          </div>
          <div className="stat-item">
            <h4>Calificación Promedio</h4>
            <p>{user.avgRating} / 5</p>
          </div>
        </div>

        {/* Lista de cursos publicados */}
        <div className="courses-section">
          <h3>Mis Cursos Publicados</h3>
          <div className="courses-list">
            {user.courses.map((course, index) => (
              <div className="course-item" key={index}>
                <h4>{course.title}</h4>
                <p>Estudiantes: {course.students}</p>
                <p>Precio: ${course.price}</p>
                <p>Estado: {course.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Panel de mensajes de estudiantes */}
        <div className="messages-section">
          <h3>Mensajes de Estudiantes</h3>
          <ul>
            {user.messages.map((message, index) => (
              <li key={index}>
                <strong>{message.student}:</strong> {message.message}
              </li>
            ))}
          </ul>
          <a href="/mensajes" className="view-more">Ver todos los mensajes</a>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
