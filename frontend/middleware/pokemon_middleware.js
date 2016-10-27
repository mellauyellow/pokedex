import { fetchAllPokemon,
         fetchPokemonDetail,
         postNewPokemon } from '../util/api_util';

import { REQUEST_ALL_POKEMON,
         REQUEST_POKEMON_DETAIL,
         receivePokemonDetail,
         receiveAllPokemon,
         CREATE_POKEMON,
         receiveNewPokemon } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receivePokemonDetailSuccess = data => dispatch(receivePokemonDetail(data));
  const createPokemonSuccess = data => dispatch(receiveNewPokemon(data));

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_POKEMON_DETAIL:
      fetchPokemonDetail(action.id, receivePokemonDetailSuccess);
      return next(action);
    case CREATE_POKEMON:
      postNewPokemon(action.pokemon, createPokemonSuccess);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
