import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useApi } from "./hooks/use-api";
import { useState } from "react"
import { SearchBar } from "./SearchBar"
import { SearchResultsList} from "./SearchResultsList";
import PatientsPage from "./PatientsPage"; // Ensure the import path is correct
// Import other components/pages if necessary
import ExamTable from './ExamTable'
function App() {
  const [results, setResults] = useState([]);


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <p>{response}</p> */}
        </header>
        <SearchBar setResults={setResults} results={results}/>
        <SearchResultsList results={results}/>
        <ExamTable/>
        {/* Define routes within Routes component */}
        <Routes>
          {/* Define a route for PatientsPage */}
          <Route path="/patients" element={<PatientsPage />} />
          {/* You can define more routes for other pages/components here */}
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
