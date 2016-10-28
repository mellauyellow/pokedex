import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state) => ({
  pokemon: selectAllPokemon(state),
  loading: state.loading
});
//
// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps)(PokemonIndex);
