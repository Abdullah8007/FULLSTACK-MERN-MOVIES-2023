# FULLSTACK MERN MOVIES (2023)

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)
![Dependencies](https://img.shields.io/badge/Dependencies-Up%20to%20Date-brightgreen.svg)

A full-stack MERN (MongoDB, Express, React, Node.js) application for browsing and managing movies. This project includes features like movie search, movie details, user authentication, and a favorites list.

---

## Features

- **Browse Movies**: View a list of movies with details like title, description, and ratings.
- **Movie Search**: Search for movies by title or genre.
- **Movie Details**: View detailed information about a specific movie.
- **User Authentication**: Sign up, log in, and manage user profiles.
- **Favorites**: Add movies to your favorites list (protected route).
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

---


## Live Demo

Check out the live demo of the project:  
👉 [MovieMetropolis](https://movie-metropolis.vercel.app)

---

## Technologies Used

### Frontend
- **React** - JavaScript library for building user interfaces.
- **React Router** - For handling routing in the application.
- **Axios** - For making API requests.
- **Tailwind CSS** - For styling the application.
- **Redux** - For state management.
- **Vite** - For fast frontend development.

### Backend
- **Node.js** - JavaScript runtime for the backend.
- **Express.js** - Web framework for building APIs.
- **MongoDB** - NoSQL database for storing data.
- **Mongoose** - For MongoDB object modeling.
- **JSON Web Tokens (JWT)** - For user authentication.

---

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

2. Navigate to the project directory:
   ```bash
   cd FULLSTACK-MERN-MOVIES-2023

3. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install

4. Set up environment variables:
   Create a .env file in the backend folder and add the following:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   
5. Start the backend server:
   ```bash
   cd backend
   npm start

6. Start the frontend development server:
   ```bash
   cd ../frontend
   npm run dev

7. Open your browser and navigate to http://localhost:127.0.0.1 to view the application.

---

## Usage

- **Home Page**: Browse the list of movies.
- **Search**: Use the search bar to find movies by title or genre.
- **Movie Details**: Click on a movie to view its details.
- **Authentication**: Sign up or log in to access protected features like favorites.
- **Favorites**: Add movies to your favorites list (requires login).

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
   
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"

4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName

5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- TMDB API for providing movie data.

- React and Node.js for building the application.

- Tailwind CSS for styling the frontend.

- Vite for fast frontend development.

---

## Folder Structure

Here’s the full tree structure of the project:
   ```bash
      FULLSTACK-MERN-MOVIES-2023/
      ├── backend/ ## Backend code (Node.js, Express, MongoDB)
      │ ├── config/ ## Configuration files
      │ │ └── db.js ## Database connection setup
      │ ├── controllers/ ## Route controllers
      │ │ ├── authController.js ## Authentication logic
      │ │ ├── movieController.js ## Movie-related logic
      │ │ └── userController.js ## User-related logic
      │ ├── middleware/ ## Custom middleware
      │ │ └── authMiddleware.js ## Authentication middleware
      │ ├── models/ ## MongoDB models
      │ │ ├── Movie.js ## Movie schema
      │ │ └── User.js ## User schema
      │ ├── routes/ ## API routes
      │ │ ├── authRoutes.js ## Authentication routes
      │ │ ├── movieRoutes.js ## Movie-related routes
      │ │ └── userRoutes.js ## User-related routes
      │ ├── utils/ ## Utility functions
      │ │ └── errorHandler.js ## Error handling utility
      │ ├── .env ## Environment variables
      │ ├── .gitignore ## Files to ignore in Git
      │ └── server.js ## Entry point for the backend
      ├── frontend/ ## Frontend code (React)
      │ ├── public/ ## Static assets
      │ │ ├── index.html ## Main HTML file
      │ │ └── favicon.ico ## Favicon
      │ ├── src/ ## React source code
      │ │ ├── assets/ ## Static assets (images, icons, etc.)
      │ │ ├── components/ ## Reusable components
      │ │ │ ├── Header.jsx ## Header component
      │ │ │ ├── MovieCard.jsx ## Movie card component
      │ │ │ └── SearchBar.jsx ## Search bar component
      │ │ ├── pages/ ## Page components
      │ │ │ ├── HomePage.jsx ## Home page
      │ │ │ ├── MovieDetail.jsx ## Movie details page
      │ │ │ ├── Favorites.jsx ## Favorites page
      │ │ │ └── SearchResults.jsx ## Search results page
      │ │ ├── redux/ ## Redux state management
      │ │ │ ├── slices/ ## Redux slices
      │ │ │ │ ├── authSlice.js ## Authentication slice
      │ │ │ │ └── movieSlice.js ## Movie slice
      │ │ │ └── store.js ## Redux store
      │ │ ├── services/ ## API services
      │ │ │ └── api.js ## Axios instance and API calls
      │ │ ├── App.jsx ## Main application component
      │ │ ├── main.jsx ## Entry point for React
      │ │ └── routes.jsx ## Application routes
      │ ├── .env ## Frontend environment variables
      │ ├── .gitignore ## Files to ignore in Git
      │ ├── package.json ## Frontend dependencies
      │ └── vite.config.js ## Vite configuration
      ├── screenshots/ ## Screenshots for the README
      │ ├── home-page.png ## Home page screenshot
      │ ├── movie-details.png ## Movie details screenshot
      │ └── search.png ## Search functionality screenshot
      ├── .gitignore ## Global .gitignore file
      ├── LICENSE ## License file
      ├── package.json ## Root package.json (if using a monorepo setup)
      └── README.md ## Project README (you are here!)
