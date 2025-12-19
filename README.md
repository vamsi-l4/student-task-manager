# Student Task Manager

A full-stack task management application built as part of internship Project 1. This application allows students to efficiently manage their tasks with features like user authentication, CRUD operations, filtering, sorting, search, drag-and-drop reordering, and overdue notifications.

## Features

- **User Authentication**: Secure signup and login using JWT tokens.
- **Task Management**: Add, edit, delete, and mark tasks as complete.
- **Filtering and Sorting**: Filter tasks by status (All, Pending, Completed) and sort by date, priority, or due date.
- **Search Functionality**: Search tasks by title or description.
- **Drag-and-Drop**: Reorder tasks intuitively with drag-and-drop.
- **Notifications**: Alerts for overdue tasks.
- **Responsive Design**: Optimized for mobile and desktop devices.
- **Persistent Storage**: Data stored securely in MongoDB Atlas.

## Tech Stack

- **Frontend**: React (Vite), CSS Modules
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Vercel (Frontend), Render (Backend)
- **Testing**: Vitest for frontend unit tests

## How to Run

### Prerequisites
- Node.js (version 16 or higher)
- MongoDB Atlas account (for database)
- Git

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the backend root with the following variables:
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```
4. Start the backend server:
   ```
   npx nodemon server.js
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

The application will be accessible at `http://localhost:5173` for the frontend and `http://localhost:5000` for the backend API.

## Usage

1. Open the application in your web browser.
2. Create a new account or log in with existing credentials.
3. Add new tasks by providing title, description, priority level, and due date.
4. Manage tasks using filters, sorting options, and search functionality.
5. Reorder tasks by dragging and dropping them.
6. Receive notifications for tasks that are overdue.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Authenticate and login user

### Tasks (Protected Routes)
- `GET /api/tasks` - Retrieve user's tasks (supports query parameters for status and sorting)
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update an existing task
- `DELETE /api/tasks/:id` - Delete a task

## Deployment

### Backend (Render)
1. Push backend code to GitHub.
2. Connect to Render and set environment variables (MONGO_URI, JWT_SECRET, PORT).
3. Deploy the backend.

### Frontend (Vercel)
1. Push frontend code to GitHub.
2. Connect to Vercel.
3. In Vercel dashboard, go to your project settings > Environment Variables.
4. Add a new environment variable:
   - Name: `VITE_API_URL`
   - Value: `https://student-task-manager-backend.onrender.com/api`
5. Redeploy the frontend.

## Project Structure

```
student-task-manager/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── services/
│   │   ├── styles/
│   │   └── test/
│   ├── index.html
│   └── package.json
├── README.md
└── .gitignore
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built as part of an internship project to demonstrate full-stack development skills.
- Utilizes modern web technologies for a seamless user experience.
