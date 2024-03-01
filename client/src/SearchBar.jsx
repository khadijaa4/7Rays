import React from 'react'
import { useState } from 'react';

export const SearchBar = ({ setResults, results}) => {
    const [input, setInput] = useState("")

    // this will be a function for the search to fetch data from the api
    const fetchData = (value) => {    
       // make call to the api; i used json placeholder to hold fake data/calls
        fetch(`http://localhost:9000/exams/?search=${value}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Filter the results based on exam ID and patient ID
                //TODO: Debug as currently nothing appears in search
                const results = data.filter((exam) =>
                    exam.exam_id.includes(value) || exam.PATIENT_ID.includes(value)
                );
                setResults(results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };


    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
     <div className="input-wrapper">
      <input 
      placeholder="Type to search..." 
      value={input} 
      onChange={(e) => handleChange(e.target.value)}
      />
      {results.length === 0 && <p> No results found</p>}
    </div>
    );
};