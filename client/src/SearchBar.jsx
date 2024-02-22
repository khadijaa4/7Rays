import React from 'react'
import { useState } from 'react';

export const SearchBar = ({ setResults, results}) => {
    const [input, setInput] = useState("")

    // this will be a function for the search to fetch data from the api
    const fetchData = (value) => {    
        //make call to the api; i used json placeholder to hold fake data/calls
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) =>
                value && 
                user && 
                user.name && 
                user.name.toLowerCase().includes(value)
            );
           setResults(results); 
        });
    }

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