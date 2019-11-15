import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';

const CharacterList = ( {values, errors, touched,  status}) => {
  const [char, setChar] = useState ([]);
  console.log("input field touched", touched);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    if (status) {
      setChar([...char, status]);
    }
  }, [status]);

  const getChar = () => {
    axios
    .get ('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setChar(response.data);
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }
  return (
    <section className="character-list">
      <h2>Characters</h2>
      {char.map(char => (
        <div key={char.id}>
          <p>Name: {char.name}</p>
          <p>Species: {char.species}</p>
          <p>Picture: {char.image}</p>
        </div>
      ))}
    </section>
  );

  }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  

export default CharacterList;
