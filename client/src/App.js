import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useApi } from "./hooks/use-api";
import PatientsPage from "./PatientsPage";
import CreateExamPage from './CreateExamPage';
// Import other components/pages if necessary
import ExamTable from './ExamTable'
function App() {


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <p>{response}</p> */}
        </header>
        
        {/* Define routes within Routes component */}
        <Routes>
          {/* Define a route for PatientsPage */}
          <Route path="/patients" element={<PatientsPage />} />
          {/* Define a route for CreateExamPage */}
          <Route path="/create-exam" element={<CreateExamPage />} />
          {/* Define a default/fallback route if no other route matches */}
          <Route
            path="/"
            element={<div>Home Page or some default content</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
