export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const REQUEST_POKEMON_DETAIL = "REQUEST_POKEMON_DETAIL";
export const RECEIVE_POKEMON_DETAIL = "RECEIVE_POKEMON_DETAIL";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

export const requestPokemonDetail = (id) => ({
  type: REQUEST_POKEMON_DETAIL,
  id
});

export const receivePokemonDetail = (pokemonDetail) => ({
  type: RECEIVE_POKEMON_DETAIL,
  pokemonDetail
});

export const receiveNewPokemon = (pokemonDetail) => ({
  type: RECEIVE_NEW_POKEMON,
  pokemonDetail
});

export const createPokemon = (pokemon) => ({
  type: CREATE_POKEMON,
  pokemon
});
