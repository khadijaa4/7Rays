import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./NavBar.css";
import { useApi } from "./hooks/use-api";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList} from "./SearchResultsList";
import PatientsPage from "./PatientsPage"; // Ensure the import path is correct
// Import other components/pages if necessary
import ExamTable from './ExamTable';
import NavBar from './NavBar';

import Header from "./Header"
import PatientsPage from "./PatientsPage";
import CreateExamPage from './CreateExamPage';
import ExamTable from './ExamTable'
import AdminPage from "./Admin";
function App() {
  const [results, setResults] = useState([]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <p>{response}</p> */}
        </header>
        <NavBar />
        {/* Define routes within Routes component */}
        <Routes>
          {/* Define a route for PatientsPage */}
          <Route path="/" element={<ExamTable/>} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          {/* You can define more routes for other pages/components here */}
          {/* Define a default/fallback route if no other route matches */}
          <Route
            path="/" element={<ExamTable />}
            />
            </Routes>
        <SearchBar setResults={setResults} results={results}/>
        <SearchResultsList results={results}/>
        <ExamTable/>
      </div>
    </Router>
  );

}

export default App;
