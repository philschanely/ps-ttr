import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <li className="player">
        <h2 className="player__name">{this.props.name}</h2>
        <ul>
          <li>
            <p className="player__route-score">
              {this.props.score}
            </p>
            <div className="player__route-score-options">
              <button>&minus;</button> <button>+</button>
            </div>
          </li>
        </ul>
      </li>
    );
  }
}

export default Player;
