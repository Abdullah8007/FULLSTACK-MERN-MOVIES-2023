# FULLSTACK MERN MOVIES (2023)

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)
![Dependencies](https://img.shields.io/badge/Dependencies-Up%20to%20Date-brightgreen.svg)

A full-stack MERN (MongoDB, Express, React, Node.js) application for browsing and managing movies.

## Features

- **Browse Movies**: View a list of movies with details like title, description, and ratings.
- **Movie Search**: Search for movies by title or genre.
- **Movie Details**: View detailed information about a specific movie.
- **User Authentication**: Sign up, log in, and manage user profiles.
- **Favorites**: Add movies to your favorites list (protected route).
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Live Demo

Check out the live demo of the project: [Live Demo](https://movie-metropolis.vercel.app)

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - Axios (for API requests)
  - Tailwind CSS (for styling)
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database)
  - Mongoose (for MongoDB object modeling)
- **Authentication**:
  - JSON Web Tokens (JWT)
- **Other Tools**:
  - Redux (for state management)
  - Vite (for frontend build tool)

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (for database)
- Git (for cloning the repository)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdullah8007/FULLSTACK-MERN-MOVIES-2023.git
Navigate to the project directory:

bash
Copy
cd FULLSTACK-MERN-MOVIES-2023
Install dependencies for both frontend and backend:

bash
Copy
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Set up environment variables:

Create a .env file in the backend folder and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

Start the backend server:

cd backend
npm start
Start the frontend development server:

cd ../frontend
npm run dev
Open your browser and navigate to http://localhost:5173 to view the application.

Usage
Home Page: Browse the list of movies.

Search: Use the search bar to find movies by title or genre.

Movie Details: Click on a movie to view its details.

Authentication: Sign up or log in to access protected features like favorites.

Favorites: Add movies to your favorites list (requires login).

Contributing
Contributions are welcome! Follow these steps to contribute:

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
TMDB API for providing movie data.

React and Node.js for building the application.

Tailwind CSS for styling the frontend.

---
