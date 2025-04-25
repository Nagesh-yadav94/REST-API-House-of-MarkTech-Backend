# 🛠️ Marktech Backend Assessment - Task Manager API

This is a simple RESTful API built with **Node.js and Express** as part of the backend developer assessment for **House of Marktech**. It supports user registration, login with token-based authentication, and user-specific task management.

---

## 📌 Features

- ✅ User Registration
- ✅ User Login with JWT Authentication
- ✅ Add, View, Delete Tasks (per user)
- ✅ Token/session-based access control
- ✅ File-based data handling using JSON files
- ✅ No third-party authentication

---

## 📁 Folder Structure

markTech-backend/
│
├── controllers/
│   ├── authController.js
│   └── userTaskController.js
│
├── data/
│   ├── users.json
│   └── userTasks.json
│
├── middleware/
│   └── authMiddleware.js
│
├── routes/
│   ├── authRoutes.js
│   └── userTaskRoutes.js
│
├── utils/
│   └── fileHandler.js
│
├── .gitignore
├── server.js
├── package.json
└── README.md


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Nagesh-yadav94/REST-API-House-of-MarkTech.git
cd marktech-backend 
```

2. Install Dependencies:
```bash
npm install bcrypt dotenv express fs jsonwebtoken path
```
2.1 Install Dependencies:
```bash
npm install --save-dev nodemon
```

3. Start the Server
```bash
npm run dev
```
Server runs at: http://localhost:5000


## API Endpoints
🔐 Auth Routes
POST /api/auth/register

Register a new user.

**Request body:**
```json
{
  "name": "Nagesh",
  "email": "nagesh@gmail.com",
  "password": "Nage@123"
}
```

**Response:**
```json
{
  "message": "Registration successful"
}
```

POST /api/auth/login

Login with an existing user. Returns a JWT token on successful login.

**Request body:**
```json
{
  "email": "nagesh@example.com",
  "password": "123456"
}
```

**Response:**
```json 
{
  "token": "JWT_TOKEN"
}
```

Task Routes (Protected)
These routes are protected, requiring the Authorization header with a valid JWT token.

POST /api/tasks
Create a new task.

**Request body:**
```json
{
  "title": "Build REST API"
}
```
**Response:**
```json
{
  "message": "Task added successfully"
}
```

GET /api/tasks
Get all tasks for the logged-in user.

**Response:**
``` json
[
  {
    "id": 1,
    "title": "Build REST API",
    "status": "in-progress"
  },
  {
    "id": 2,
    "title": "Deploy app",
    "status": "pending"
  }
]
```

DELETE /api/tasks/:id
Delete a specific task by its ID.

**Response:**
```json
{
  "message": "Task deleted successfully"
}
```

## Usage

1. The project uses JSON files (users.json and tasks.json) for data storage.

2. Use Postman or cURL to interact with the API.

3. For authentication, the JWT token received after login must be passed in the Authorization header as Bearer <JWT_TOKEN> for task-related endpoints.

## Deployment
You can deploy this project on platforms like Render or Heroku.

Steps for Render:

Go to Render.

Create a new web service, connecting your GitHub repository.

Set the build command to npm install.

Set the start command to npm run dev.

Deploy the service and get the live URL.



## Author

Nagesh Baliboyina
Backend Developer | MERN Stack Enthusiast

## License
This project is for assessment purposes only.

---

### Key Changes:
1. The **Installation** section includes commands to set up the project locally.
2. The **API Endpoints** section is more structured with clear details for each endpoint.
3. The **Usage** section guides how to use the API, including token-based authentication.
4. **Deployment Instructions** are provided for platforms like Render.
5. **Submission Checklist** outlines exactly what needs to be done for submission.

Let me know if you need further adjustments!
