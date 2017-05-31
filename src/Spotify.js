import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import RoverInfo from './RoverInfo';
import './Spotify.css';

class Spotify extends Component {
  render = () => {
    return (
      <div className="spotify">
        <img className="spotify-logo" src="https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/072015/spotify_2015.png?itok=1MxXaGSs" alt="spotify" />

      </div>
    )
  }
}

export default Spotify;