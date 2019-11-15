import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';

export default function SearchForm() {
    const [search, setSearch] = useState ([]);
    const [query, setQuery] = useState ("");
    
    // TODO: Add useState to track data from useEffect
  
    useEffect(() => {
      axios
      .get ('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const data = response.data;
        console.log(response)
        const result = data.filter(search =>
          search.search.toLowerCase().includes(query.toLowerCase())
          );
          setSearch(result);
      });
    }, [query]);
    const handleInputChange = event => {
      setQuery(event.target.value);
    };
 
  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          placeholder="Search by name"
          autoComplete="off"
        />
      </form>
    <div>
      {search}
    </div>
     // Add a search form here
    </section>
  );
}
