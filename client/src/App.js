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
          <Route path="/patients" element={<PatientsPage />} />
          {/* Define a route for CreateExamPage */}
          <Route path="/create-exam" element={<CreateExamPage />} />
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
