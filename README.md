🚀 FindMyDocs – Backend

FindMyDocs Backend is a RESTful API built with Node.js, Express, and MongoDB.
It handles authentication, document management, variable storage, and AI-powered features for the FindMyDocs application.

This repository contains only the backend of the application.
The frontend is maintained separately.

🌐 Live API

🔗 Backend Base URL
https://text-editor-backend-5.onrender.com/

⚠️ Note: The backend may take 30–60 seconds to respond on the first request due to cold start (Render free tier).

✨ Features

🔐 User authentication (Signup & Login)

🔑 JWT-based authentication & authorization

📝 CRUD operations for documents

🧩 Variable (key–value) management per user

🔍 Search documents by title/content

🤖 AI assistant API integration

🛡️ Protected routes using middleware

👤 User-specific data isolation

⏱️ Timestamps for documents & variables

🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Tokens)

bcrypt

dotenv

CORS

📂 API Modules

Auth (Signup / Login)

Documents (Create, Read, Update, Delete)

Variables (User-specific key–value storage)

Search

AI Chat Endpoint

▶️ Run Locally
npm install
npm start


or (for development)

npm run dev

🔐 Environment Variables

Create a .env file in the root directory:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

ℹ️ Notes

JWT token is required for protected routes

Each user can store unique variables scoped to their userId

MongoDB compound index ensures data isolation per user

Frontend consumes this API via Axios

👨‍💻 Developer

Bharathikannan
MERN Stack Developer
