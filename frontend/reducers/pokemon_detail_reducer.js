import { RECEIVE_POKEMON_DETAIL, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';

const PokemonDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON_DETAIL:
      return action.pokemonDetail;
    case RECEIVE_NEW_POKEMON:
      return action.pokemonDetail;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
