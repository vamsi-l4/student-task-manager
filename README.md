# Student Task Manager

A full-stack task management web app built with React, Node.js, Express, and MongoDB. Features user authentication, CRUD operations, filtering, sorting, search, drag-and-drop ordering, and overdue notifications.

## Features

- User signup and login with JWT authentication
- Add, edit, delete, and mark tasks as complete
- Filter tasks by status (All, Pending, Completed)
- Sort tasks by date, priority, or due date
- Search tasks by title or description
- Drag-and-drop to reorder tasks
- Notifications for overdue tasks
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend**: React (Vite), CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **Authentication**: JWT
- **Deployment**: Vercel (Frontend), Render (Backend)

## Installation

### Prerequisites
- Node.js
- MongoDB Atlas account
- Git

### Backend Setup
1. Navigate to the `backend` folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with:
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```
4. Start the server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` folder:
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

## Usage

1. Open the app in your browser.
2. Sign up for a new account or log in.
3. Add tasks with title, description, priority, and due date.
4. Use filters, sorting, and search to manage tasks.
5. Drag tasks to reorder them.
6. Receive notifications for overdue tasks.

## API Endpoints

### Auth
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user

### Tasks (Protected)
- `GET /api/tasks` - Get user's tasks (with optional ?status=pending&sort=priority)
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Deployment

### Backend (Render)
1. Push backend code to GitHub.
2. Connect to Render and set environment variables.
3. Deploy.

### Frontend (Vercel)
1. Push frontend code to GitHub.
2. Connect to Vercel and update API base URL to deployed backend.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit changes.
4. Push to the branch.
5. Open a Pull Request.

## License

MIT License