import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({pokemon, loading, children}) => {
  let allPokemon = pokemon.map((poke) => (
    <PokemonIndexItem key={poke.id} poke={poke} />
  ));

  let pokeball = <div className="loading">
    <div id="pokeball"></div>
  </div>;

  let spinner = loading ? pokeball : <div></div>;

  return (
    <section className="pokedex">
      <ul className="pokemon-index">
        {allPokemon}
      </ul>
      {spinner}
      {children}
    </section>
  );
};

export default PokemonIndex;
