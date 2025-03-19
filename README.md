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

## Screenshots

### Home Page
![Home Page](./screenshots/home-page.png)

### Movie Details
![Movie Details](./screenshots/movie-details.png)

### Search Functionality
![Search](./screenshots/search.png)

---

## Live Demo

Check out the live demo of the project:  
👉 [Live Demo](https://your-project-url.vercel.app)

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

7. Open your browser and navigate to http://localhost:5173 to view the application.

## Usage

**Home Page**: Browse the list of movies.
**Search**: Use the search bar to find movies by title or genre.
**Movie Details**: Click on a movie to view its details.
**Authentication**: Sign up or log in to access protected features like favorites.
**Favorites**: Add movies to your favorites list (requires login).

## Folder Structure

