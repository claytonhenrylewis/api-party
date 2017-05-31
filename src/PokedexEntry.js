import React, { Component } from 'react';
import './PokedexEntry.css';

class PokedexEntry extends Component {
  state = {
    mon: {
      id: 0,
      name: '',
      height: 0,
      weight: 0,
      types: [
        {
          type: {
            name: '',
          }
        },
        {
          type: {
            name: '',
          }
        },
      ],
      stats: [],
      sprites: {
        front_default: null,
        front_shiny: null,
      }
    }
  }

  constructor(props) {
    super(props);
    this.fetchUserData(props);
  }

  fetchUserData = (props) => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.number}`)
      .then(response => response.json())
      .then(mon => this.setState({mon}))
      .then(console.log(this.state));
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location;
    if (locationChanged) {
      this.fetchUserData(nextProps);
    }
  }

  render() {
    const {mon} = this.state;
    return (
      <div className="pokedex-entry">
        <h2>no. {mon.id}: {mon.name}</h2>
        <img src={mon.sprites.front_default} alt="pokemon" className="sprite"/>
        <img src={mon.sprites.front_shiny} alt="shiny" className="sprite"/>
        <h3>types: {mon.types.map(type => type.type.name).join(', ')}</h3>
        <h3>height: {mon.height}</h3>
        <h3>weight: {mon.weight}</h3>
        {mon.stats.map(stat => <h3 key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</h3>)}
      </div>
    );
  }
}

export default PokedexEntry;