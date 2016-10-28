import PokemonDetailContainer from './pokemon_detail_container';
import React from 'react';

const PokemonDetail = ({pokemonDetail, loading}) => {

  let pokeball = <div className="loading">
    <div id="pokeball"></div>
  </div>;

  let spinner = loading ? pokeball : <div></div>;

  if (pokemonDetail.items) {
    let allItems = pokemonDetail.items.map((item, idx) => (
      <li key={idx}>
        <img src={item.image_url}></img>
        {item.name}
        <br></br>
        Happiness: {item.happiness}
        <br></br>
        Price: {item.price}
      </li>
    ));
    return (
      <div className="pokemon-detail">
        <section>
          <img src={pokemonDetail.image_url}></img>
          <h1>{pokemonDetail.name}</h1>
          <h2>Type: {pokemonDetail.poke_type}</h2>
          <h2>Attack: {pokemonDetail.attack}</h2>
          <h2>Defense: {pokemonDetail.defense}</h2>
          <h2>Moves: {pokemonDetail.moves.join(", ")}</h2>
        </section>
        <ul className="pokemon-items">
          {allItems}
        </ul>
      </div>
    );
  } else {
    return (<div>Loading...</div>);
  }

};

export default PokemonDetail;
