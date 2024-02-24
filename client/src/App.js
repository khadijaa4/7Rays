import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useApi } from "./hooks/use-api";
import Header from "./Header"
import PatientsPage from "./PatientsPage";
import CreateExamPage from './CreateExamPage';
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
          {/* Define a route for CreateExamPage */}
          <Route path="/create-exam" element={<CreateExamPage />} />
          {/* Define a default/fallback route if no other route matches */}
          <Route
            path="/" element={<ExamTable />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
