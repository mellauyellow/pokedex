import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

// class PokemonIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       {this.props.pokemon.map((poke, idx) => (
//         <li className="pokemon-index-item" key={idx}><img src={poke.image_url}></img>{poke.name}</li>
//       ))}
//     );
//   }
// }

const PokemonIndex = ({pokemon, children}) => {

  let allPokemon = pokemon.map((poke) => (
    <PokemonIndexItem key={poke.id} poke={poke} />
  ));
  // debugger
  return (
    <section className="pokedex">
      <ul className="pokemon-index">
        {allPokemon}
      </ul>
      {children}
    </section>
  );
};

export default PokemonIndex;
