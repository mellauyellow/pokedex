import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = (props) => {
  // debugger
  const handleClick = url => e => props.router.push(url);

  return (
    <li className="pokemon-index-item"
      onClick={handleClick(`/pokemon/${props.poke.id}`)}>
      <div>
        {props.poke.id}
        <img src={props.poke.image_url}></img>
        {props.poke.name}
      </div>
    </li>
  );
};

export default withRouter(PokemonIndexItem);
