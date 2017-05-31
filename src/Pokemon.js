import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Pokemon.css';
import PokedexEntry from './PokedexEntry';

class Pokemon extends Component {
  state = {
    number: 1,
  }

  handleChange = (e) => {
    const number = e.currentTarget.value;
    this.setState({number});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/pokemon/${this.state.number}`);
  }

  render = () => {
    return (
      <div className="pokemon">
        <img className="pokemon-logo" src="http://thecraftchop.com/files/others/Pokeball.svg" alt="pokemon" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" value={this.state.number} onChange={this.handleChange}/>
          </div>
          <div>
            <button type="submit">Look up Pokemon</button>
          </div>
        </form>
        <Route path='/pokemon/:number' component={PokedexEntry} />
        <Route exact path='/pokemon' render={() => <h3>Please enter the number of a Pokemon to search</h3>} />
      </div>
    )
  }
}

export default Pokemon;