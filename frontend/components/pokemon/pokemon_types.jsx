import React from 'react';

const PokemonTypes = (props) => {
  // let types = "bug dragon electric fighting fire flying ghost grass ground ice normal poison psychic rock steel water".split(" ");
  let types = window.POKEMON_TYPES;
  let options = types.map((type, idx) => (
    <option value={type} key={idx}>{type}</option>
  ));

  return (
    <select onChange={props.update('type')}>
      {options}
    </select>
  );
};

export default PokemonTypes;
