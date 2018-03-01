import React, {Component} from 'react';

class GamePage extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Memory Game v2</h1>
        </header>
        <div>
          {process.env.REACT_APP_SECRETCODE}
        </div>
      </div>
    );
  }
}

export default GamePage;