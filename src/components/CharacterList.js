import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: grey;
  `;

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  color: white;
  `;

export default function Character() {
  const [char, setChar] = useState ([]);
  const [query, setQuery] = useState ("");
  
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
    .get ('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const data = response.data;
      console.log(response.data.results)
      const result = data.results.filter(char =>
        char.name.toLowerCase().includes(query.toLowerCase())
        );
        setChar(result);
    });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <Wrapper className="character-list">
      <Title>Characters</Title>
      <label htmlFor="name">Search:</label>
      <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        />
      {char.map(char => (
        <div key={char.id}>
          <p>Name: {char.name}</p>
          <p>Species: {char.species}</p>
          <p>Picture: {char.image}</p>
        </div>
      ))}
    </Wrapper>
  );

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
}

