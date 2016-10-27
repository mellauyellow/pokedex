export const fetchAllPokemon = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success
  });
};

export const fetchPokemonDetail = (pokemonId, success) => {
  // debugger
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${pokemonId}`,
    success
  });
};

export const postNewPokemon = (pokemon, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/pokemon',
    data: pokemon,
    success
  });
};
