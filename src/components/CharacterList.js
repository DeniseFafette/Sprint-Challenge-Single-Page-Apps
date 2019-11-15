import React, { useEffect, useState } from "react";
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

  }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
