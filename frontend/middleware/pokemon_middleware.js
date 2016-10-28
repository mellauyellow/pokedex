import { fetchAllPokemon,
         fetchPokemonDetail,
         postNewPokemon } from '../util/api_util';

import { REQUEST_ALL_POKEMON,
         REQUEST_POKEMON_DETAIL,
         receivePokemonDetail,
         receiveAllPokemon,
         CREATE_POKEMON,
         receiveNewPokemon,
         receivePokemonErrors } from '../actions/pokemon_actions';
import { hashHistory } from 'react-router';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receivePokemonDetailSuccess = data => dispatch(receivePokemonDetail(data));
  const createPokemonSuccess = data => {
    dispatch(receiveNewPokemon(data));
    hashHistory.push(`/pokemon/${data.id}`);
  };
  const createPokemonError = error => {
    let errorMessages = error.responseJSON;
    dispatch(receivePokemonErrors(errorMessages));
  };

  // debugger

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_POKEMON_DETAIL:
      fetchPokemonDetail(action.id, receivePokemonDetailSuccess);
      return next(action);
    case CREATE_POKEMON:
      postNewPokemon(action.pokemon, createPokemonSuccess, createPokemonError);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
