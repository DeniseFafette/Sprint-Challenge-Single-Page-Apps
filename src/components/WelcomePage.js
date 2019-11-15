import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import SearchForm from "./SearchForm";
import LocationList from "./LocationsList";
import CharacterList from "./CharacterList";
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: grey;
  `;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: red;
  `;

 const WelcomePage = () => {
  return (
    <section className="welcome-page">
      <header>
        <Title>Welcome to the ultimate fan site!</Title>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
        </nav>
        <Route path="/characters" component={CharacterList} />
      </header>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <WelcomePage />
  </Router>,
  rootElement
);

export default WelcomePage;
