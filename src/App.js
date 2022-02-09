import React from 'react';
import { Pokedex } from './Pokedex.js';
import { Pokecard } from './Pokecard.js';
import './App.css';

function App() {
  return (
    <div class="container">
    <div class="row">
      {Pokedex.map((p) => {
        return (
              <>
              <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
              </>
              );
 })}
    </div>
    </div>
  );
}

export default App;
