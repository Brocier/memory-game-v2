import React, {Component} from 'react';

class GamePage extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Memory Game</h1>
        </header>
        <div>
          {process.env.REACT_APP_SECRETCODE}
        </div>
      </div>
    );
  }
}

export default GamePage;