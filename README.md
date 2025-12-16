# Task Manager - MERN Stack Application

A full-stack Task Manager application built with MongoDB, Express.js, React, and Node.js.

## Features

- ✅ Add new tasks
- ✅ View all tasks
- ✅ Delete tasks
- ✅ Input validation
- ✅ Loading and error states
- ✅ Responsive UI

## Tech Stack

**Frontend:**
- React.js
- Axios for API calls
- CSS3 for styling

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

**Database:**
- MongoDB Atlas

## Project Structure

```
task-manager/
├── backend/          # Backend API server
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   ├── server.js     # Entry point
│   └── package.json
├── frontend/         # React application
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## API Endpoints

### Base URL
Development: `http://localhost:5000/api`
Production: `[Your deployed backend URL]`

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create a new task |
| DELETE | `/tasks/:id` | Delete a task by ID |

### Request/Response Examples

**POST /tasks**
```json
Request Body:
{
  "title": "Complete project documentation"
}

Response:
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Complete project documentation",
  "createdAt": "2025-12-16T10:30:00.000Z",
  "__v": 0
}
```

**GET /tasks**
```json
Response:
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Complete project documentation",
    "createdAt": "2025-12-16T10:30:00.000Z",
    "__v": 0
  }
]
```

**DELETE /tasks/:id**
```json
Response:
{
  "message": "Task deleted successfully"
}
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the server:
```bash
npm start
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Deployment

### Frontend Deployment (Vercel/Netlify)
1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Set environment variable: `REACT_APP_API_URL`
4. Deploy

### Backend Deployment (Render/Railway)
1. Push code to GitHub
2. Connect repository to Render/Railway
3. Set environment variables: `MONGODB_URI`, `PORT`
4. Deploy

### Database (MongoDB Atlas)
1. Create a cluster on MongoDB Atlas
2. Add database user
3. Whitelist IP addresses (0.0.0.0/0 for all)
4. Copy connection string
5. Update environment variables

## Live URLs

- **Frontend:** [To be deployed]
- **Backend API:** [To be deployed]
- **GitHub Repository:** [Repository link]

## Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=your_backend_api_url
```

## Development

To run both frontend and backend concurrently during development:

1. Start backend server (in backend directory):
```bash
npm start
```

2. Start frontend (in frontend directory):
```bash
npm start
```

## Author

Built as part of a MERN stack development task.

## License

MIT
