import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { requestAllPokemon, requestPokemonDetail } from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';


const Root = ({store}) => {
  const requestOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  const requestSinglePokemonOnEnter = (nextState) => {
    store.dispatch(requestPokemonDetail(nextState.params.pokemonId));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/"
               component={PokemonIndexContainer}
               onEnter={requestOnEnter}>
          <IndexRoute component={PokemonFormContainer} />
          <Route path="pokemon/:pokemonId"
                 component={PokemonDetailContainer}
                 onEnter={requestSinglePokemonOnEnter}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
