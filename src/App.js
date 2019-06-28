import React, { Component } from 'react';
import Player from './components/Player';

class App extends Component {

  state = {
    players: [
      {
        name: "Player X",
        score: 0
      },
      {
        name: "Player Y",
        score: 0
      }
    ]
  };

  render() {
    console.log(this.state.players);
    return (
      <div className="App">
        <h1>Scores!</h1>
        <ul>
          {this.state.players.map((player) => {
            return (
              <Player name={player.name} score={player.score} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
