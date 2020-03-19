import axios from "axios"

import React from 'react';
import './App.css';

import PokemonList from "./components/PokemonList"

function App() {
  
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      console.log(res)
    })

  return (
  
    <div className="App">
      <header className = "App-header">
        <h2>Pokemon List</h2>
        <h4
          style={{
          width: "75%",
          margin: "0 auto",
          paddingTop: "25px",
          paddingBottom: "25px",
          color: "white"
          }}
        >List of All Shiny Pokemon</h4>
      </header>

      <PokemonList />

      <h5
        style={{
          fontSize: "8px",
          width: "200px",
          margin: "0 auto",
          paddingTop: "25px",
          paddingBottom: "25px",
          color: "white"
        }}
      ></h5>
    </div>
  );
}

export default App;