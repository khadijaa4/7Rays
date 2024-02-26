# Hack.Diversity Tech Dive Project

Welcome to our MERN stack application for the Hack.Diversity Tech Dive. This project is structured as a full-stack application with a React-based frontend and an Express-based backend.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Client](#client)
  - [API](#api)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Getting Started

This project contains two main applications:

- **Client (Frontend)**: A React application bootstrapped with Create React App.
- **API (Backend)**: An Express server that handles our API logic.

Both applications need to be running simultaneously during development for full-stack integration.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (which comes with [npm](http://npmjs.com/))

## Setup Instructions

### Client

To get the frontend running locally:

```bash
cd client/
npm install
npm start
```

Visit `http://localhost:3000` to view the application in your browser. Any changes made in the `src/App.js` file will hot-reload in the browser.

### API

To get the backend server running locally:

```bash
cd api/
npm install
npm start
```

The server will start on `http://localhost:9000`. API endpoints can be accessed via this base URL.

## Project Architecture

Our project is structured into two main directories: `api` for the backend and `client` for the frontend. Here's a detailed breakdown:

### Backend (API)

- `bin`: Contains the executable files that start your server. `www` is the entry point script setting up the server on a specified port.
- `controllers`: Holds the `exam-controller.js` files and `user-controller.js` files . These handle the business logic of the API endpoints for exams and user operations.
- `models`: Includes `database.js` for database connection setup and `exam.js` for the exam data model.
- `routes`: Contains `exams-route.js` which defines the route endpoints for exam-related operations.
- `uploads`: A directory likely used to store files uploaded through the API, such as images or documents.
- `app.js`: The main application file where middlewares are set up and routes are imported.
- `config.js`: Configuration settings for the application, such as database strings, ports, etc.
- `package.json` & `package-lock.json`: Define the project dependencies and lock down their versions respectively.

### Frontend (Client)

- `node_modules`: Stores all the npm packages that the project depends on.
- `public`: Holds static files like the HTML template, icons, and any other assets that can be accessed publicly.
- `src`: The source directory where the main React application codebase resides.
  - `hooks`: Custom React hooks for shared logic across components.
  - `App.css`: The main stylesheet for the React application.
  - `App.js`: The root React component that bootstraps the application.
  - `CreateExamPage.js`: A React component for the exam creation interface.
  - `ExamTable.jsx`: A React component that likely renders exam data in a tabular format.
  - `index.css` & `index.js`: Entry point CSS and JS files for the React app, where `ReactDOM.render` is called.
  - `mockPatientsData.js` and `mockPatientsData_2.js`: Mock data files for patient information, possibly used for testing or development.
  - `patientData.json`: A JSON file that likely contains patient data.
  - `PatientsPage.js`: A React component for displaying patient-related information.
  - `reportWebVitals.js`: A file included by Create React App for measuring the performance of the app.
- `package.json` & `package-lock.json`: Manage the frontend dependencies and their versions.

## Contributing

We follow a feature-branch workflow. Please name your branches appropriately and submit pull requests to `main` for code review.

1. Create your feature branch (`git checkout -b feature/AmazingFeature`).
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
3. Push to the branch (`git push origin feature/AmazingFeature`).
4. Open a Pull Request.

## Documentation

Our API documentation is maintained separately and can be found at [API Documentation Link]. We use inline comments to explain complex code segments.

## Contact

- Joseph Defendre - Jchacker5@gmail.com
- Nia McGregor - bob@example.com
- Giordano Rogers - carol@example.com
- Khadija Ali - david@example.com
- Sonny Bizure - 

## Acknowledgments

Include any dependencies, libraries, or other resources that you've used in this project.

