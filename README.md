# 🎓 Musaikaplace - Marketplace de Cursos en Línea

Este es el proyecto final de mi carrera de Full Stack JavaScript. Musaikaplace es una plataforma diseñada para que profesores y expertos puedan ofrecer cursos en línea. El proyecto reúne todo lo aprendido durante mi formación y está disponible en producción a través de [Render](https://mskplace-caro-rachid-24-1.onrender.com/).

---

## 🚀 **Descripción General**

Musaikaplace permite a los usuarios registrarse como estudiantes o profesores, publicar cursos y gestionar su contenido de manera sencilla. A continuación, se describe cómo se construyó y qué tecnologías se usaron.

---

## 🛠️ **Tecnologías Utilizadas**

### **Frontend**
- **React.js**: Framework principal para la interfaz.
- **CSS Modules** y **Bootstrap**: Para el diseño y la responsividad.
- **Context API**: Gestión del estado global.
- **Axios**: Comunicación con el Backend.

### **Backend**
- **Node.js**: Plataforma para la lógica del servidor.
- **Express.js**: Framework para construir la API REST.
- **PostgreSQL**: Base de datos relacional con **pgAdmin 4** como herramienta de gestión.
- **JWT (JSON Web Tokens)**: Manejo de autenticación y autorización.
- **Sequelize**: ORM para modelar datos en PostgreSQL.

### **Deployment**
- **Render**: Utilizado para desplegar tanto el Frontend como el Backend.

---

## ⚙️ **Características Principales**

### **Usuarios**
1. **Estudiantes:**
   - Registro e inicio de sesión.
   - Navegación y búsqueda de cursos disponibles.
   - Compra de cursos para acceso exclusivo al contenido.

2. **Profesores:**
   - Registro como profesor.
   - Creación y gestión de cursos propios.
   - Visualización de ventas y retroalimentación.

### **Vistas**
- **Inicio**: Página principal con cursos destacados.
- **Lista de Cursos**: Muestra los cursos disponibles con filtros.
- **Detalle del Curso**: Información detallada del curso y acceso al contenido.
- **Perfil de Usuario**: Datos personales, historial de compras.
- **Panel de Profesor**: Gestión de cursos creados.

### **Componentes**
- Formularios reutilizables.
- Tarjetas dinámicas para cursos.
- Navegación y pie de página responsivos.

---

## 🔗 **Conexión Frontend-Backend**

### **Rutas del API**
El proyecto incluye un **API REST** para gestionar todas las operaciones necesarias entre Frontend y Backend. 

#### **Autenticación**
- `POST /usuarios/registro` - Registro de nuevos usuarios.
- `POST /usuarios/login` - Inicio de sesión.

#### **Cursos**
- `GET /cursos` - Obtener todos los cursos disponibles.
- `POST /cursos` - Crear un curso nuevo (solo profesores).
- `GET /cursos/:id` - Ver los detalles de un curso.

#### **Usuarios**
- `GET /usuarios/miperfil` - Datos del usuario autenticado.

---

## 🌐 **Cómo Probar el Proyecto**

1. Accede a la página en producción: [Musaikaplace en Render](https://mskplace-caro-rachid-24-1.onrender.com/).
2. Regístrate como estudiante o profesor para explorar las funcionalidades.
3. Si eres profesor, publica un curso para probar el flujo completo.

---

## 📂 **Estructura del Proyecto**

### **Frontend**

src/ ├── components/ # Componentes reutilizables ├── pages/ # Vistas principales ├── context/ # Contextos para el manejo de estado global ├── services/ # Funciones para llamadas al API └── styles/ # Archivos de estilos CSS


### **Backend**

src/ ├── modelos/ # Esquemas y modelos de datos (Sequelize con PostgreSQL) ├── rutas/ # Endpoints del API ├── controladores/ # Lógica de negocio └── middlewares/ # Validación y autenticación


---

## 📦 **Dependencias Principales**

### **Frontend**
- `react-router-dom`: Navegación entre páginas.
- `axios`: Realización de solicitudes HTTP al Backend.

### **Backend**
- `bcryptjs`: Hasheo de contraseñas.
- `jsonwebtoken`: Manejo de autenticación con JWT.
- `sequelize`: ORM para modelar datos en PostgreSQL.
- `pg` y `pg-hstore`: Controladores para PostgreSQL.

---

## 📧 **Contacto**
Si tienes preguntas o sugerencias, no dudes en contactarnos:  
**Nombre de integrantes del proyecto :** 
[Rachid Boss Ibarra ]  **LinkedIn:**   https://www.linkedin.com/in/rachid-boss-ibarra/ 
[Carolina Torrejón Nuñez ] **LinkedIn:**  https://www.linkedin.com/in/carolina-torrej%C3%B3n-n%C3%BA%C3%B1ez/
---

¡Espero que disfrutes explorando este proyecto tanto como yo disfruté desarrollarlo! 🚀


