# 🚀 Task Manager - Backend API

API REST para la gestión de usuarios y tareas con autenticación basada en JWT.
![App Screenshot](https://github.com/Rodolfo-Chan/tareas-api/blob/main/Screenshot_mongodb.png)
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

---

## 🛠️ Tecnologías
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-7B3F00?style=for-the-badge&logo=security&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-000000?style=for-the-badge&logo=railway&logoColor=white)

---

## 📦 Requisitos

- Node.js (v14 o superior)
- MongoDB (local o en la nube)

---

## ⚙️ Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/Rodolfo-Chan/tareas-api.git
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

🔗 Endpoints principales
---
🧍‍♂️ Autenticación de usuarios
| Método | Ruta             | Descripción                        |
| ------ | ---------------- | ---------------------------------- |
| POST   | `/auth/register` | Registrar nuevo usuario            |
| POST   | `/auth/login`    | Iniciar sesión y obtener token JWT |


📝 Gestión de tareas (requiere token en header Authorization)
---
| Método | Ruta         | Descripción               |
| ------ | ------------ | ------------------------- |
| GET    | `/tasks`     | Obtener todas las tareas  |
| POST   | `/tasks`     | Crear una nueva tarea     |
| PUT    | `/tasks/:id` | Editar una tarea por ID   |
| DELETE | `/tasks/:id` | Eliminar una tarea por ID |
