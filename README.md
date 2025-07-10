# 🚀 Task Manager - Backend API

API REST para la gestión de usuarios y tareas con autenticación basada en JWT.

---

## 🛠️ Tecnologías

- ⚙️ Node.js
- 🚀 Express.js
- 🧠 MongoDB + Mongoose
- 🔐 JSON Web Tokens (JWT)
- 🧂 bcrypt (para el hashing de contraseñas)
---

## 📦 Requisitos

- Node.js (v14 o superior)
- MongoDB (local o en la nube)

---

## ⚙️ Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/backend-task-manager.git
cd backend-task-manager
```
###📦 2.Instala las dependencias
```bash
npm install
```
### 🔐 3.Crea un archivo .env en la raíz con las variables de entorno necesarias, por ejemplo:
La API estará disponible en http://localhost:3000 o el puerto configurado.

```bash
PORT=3000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/dbname
JWT_SECRET=tu_clave_secreta

```
## ▶️ Ejecución
```bash
npm run dev
```

Endpoints principales
---
POST /auth/register - Registrar usuario nuevo.

POST /auth/login - Iniciar sesión y obtener token JWT.

Endpoints /tasks protegidos que permiten crear, leer, actualizar y eliminar tareas (requieren token en header Authorization).

Seguridad
---
Contraseñas almacenadas encriptadas con bcrypt.

Autenticación mediante tokens JWT.

Middleware para proteger rutas que requieren autenticación.
