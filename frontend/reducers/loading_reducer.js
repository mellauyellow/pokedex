import * as actions from '../actions/pokemon_actions';

const LoadingReducer = (state = false, action) => {
  switch (action.type) {
    case actions.RECEIVE_ALL_POKEMON:
      return false;
    case actions.RECEIVE_NEW_POKEMON:
      return false;
    case actions.RECEIVE_POKEMON_ERRORS:
      return false;
    case actions.RECEIVE_POKEMON_DETAIL:
      return false;
    case actions.REQUEST_ALL_POKEMON:
      return true;
    case actions.REQUEST_POKEMON_DETAIL:
      return true;
    case actions.CREATE_POKEMON:
      return true;
    default:
      return state;
  }
};

export default LoadingReducer;
