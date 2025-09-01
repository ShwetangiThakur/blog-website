Simple Blog Application with MERN Stack
Description
This is a full-stack application for a simple blog, allowing users to perform CRUD (Create, Read, Update, Delete) operations on blogs. It includes features for creating users, logging in, and managing blog posts.

Tech Stack
Frontend: React, Redux, Material UI

Backend: Node.js, Express.js, MongoDB (Mongoose)

Features
User Management

Create User

Login User

Blog Management

Create Blog

View All Blogs

View Current User's Blogs

Edit and Update a Blog

Delete a Blog

Blog Content

Title

Description

Image

Instructions for Running Locally
Prerequisites:

Node.js and npm installed

MongoDB installed and running locally

1. Backend Setup

Bash

# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the server (runs on port 5000)
npm start
2. Frontend Setup

Bash

# In a new terminal, navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Create a .env file in the 'frontend' directory and add the following line:
# REACT_APP_API_URL=http://localhost:5000/

# Start the client (runs on port 3000)
npm start
