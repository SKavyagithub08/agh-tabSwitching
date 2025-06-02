# React + Vite# AGH Tab Switching Test App
A full-stack web application for conducting online coding tests with tab-switch detection.

## Features

- **Login page** for test-takers
- **Coding test interface** with Monaco code editor and timer
- **Tab switch detection** with warnings and auto-disconnect after 5 switches
- **Disconnect page** if the user is disqualified
- **MongoDB backend** to store username, test session, and tab switch count


## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)


## Installation

### 1. Clone the repository

```sh
git clone https://github.com/SKavyagithub08/agh-tabSwitching.git
cd AGH-tabSwitching
```

### 2. Install backend dependencies

```sh
cd backend
npm install
```
**Backend dependencies:**
- express
- mongoose
- cors
- dotenv

### 3. Install frontend dependencies

```sh
cd ../frontend
npm install
```
**Frontend dependencies:**
- react
- react-dom
- react-router-dom
- @monaco-editor/react
- react-toastify
- tailwindcss
- @tailwindcss/vite
- @vitejs/plugin-react


## Running the App

### 1. Start MongoDB

If running locally, start MongoDB with:

```sh
mongod
```

### 2. Start the backend server

```sh
cd backend
node server.js (or) 
npm start
```

### 3. Start the frontend dev server

```sh
cd ../frontend
npm run dev
```
