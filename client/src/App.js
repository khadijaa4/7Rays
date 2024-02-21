import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useApi } from "./hooks/use-api";
import PatientsPage from "./PatientsPage"; // Ensure the import path is correct
import Header from "./Header"
import ExamTable from './ExamTable'
function App() {


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <p>{response}</p> */}
        </header>
        <Header /> 
        {/* Define routes within Routes component */}
        <Routes>
          {/* Define a route for PatientsPage */}
          <Route path="/patients" element={<PatientsPage />} />
          {/* You can define more routes for other pages/components here */}
          {/* Define a default/fallback route if no other route matches */}
          <Route
            path="/" element={<div>element={<ExamTable />}</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
