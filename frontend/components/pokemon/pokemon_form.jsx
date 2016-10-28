import React from 'react';
import PokemonTypes from './pokemon_types';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '',
                   image_url: '',
                   type: '',
                   attack: '',
                   defense: '',
                   move_1: '',
                   move_2: ''
                 };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => {
      console.log(e.target.value);
      if (property === "Move 1") {
        // debugger
        this.setState({move_1: e.target.value});
      } else if (property === "Move 2") {
        this.setState({move_2: e.target.value});
      } else {
        this.setState({[property]: e.target.value});
      }
    };
  }

  handleSubmit() {
    return (e) => {
      // debugger
      e.preventDefault();
      let pokemon = { pokemon: {
        name: this.state.name,
        image_url: this.state.image_url,
        poke_type: this.state.type,
        attack: this.state.attack,
        defense: this.state.defense,
        moves: [this.state.move_1, this.state.move_2]
      }};
      this.props.createPokemon(pokemon);
    };
  }

  render() {
    console.log('state:', this.state);
    let errors = this.props.errors.length === 0 ? "" : this.props.errors.join(", ");
    return (
      <div className="pokemon-form">
        <h2 className="errors">{errors}</h2>
        <img src="/assets/pokemon-logo.png"></img>

        <form onSubmit={this.handleSubmit()}>
          <input type="text" placeholder="name" value={this.state.name} onChange={this.update("name")}></input>
          <input type="text" placeholder="image_url" value={this.state.image_url} onChange={this.update("image_url")}></input>

          <PokemonTypes update={this.update} />

          <input type="number" placeholder="attack" value={this.state.attack} onChange={this.update("attack")}></input>
          <input type="number" placeholder="defense" value={this.state.defense} onChange={this.update("defense")}></input>
          <input type="text" placeholder="Move 1" value={this.state.move_1} onChange={this.update("Move 1")}></input>
          <input type="text" placeholder="Move 2" value={this.state.move_2} onChange={this.update("Move 2")}></input>
          <input type="submit" value="CreatePokemon"></input>
        </form>
      </div>
    );
  }
}

export default PokemonForm;
