import React, {Component} from 'react';

class SplashPage extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome to Memory Game v2
        </h1>
        <div>
          {process.env.REACT_APP_SECRETCODE}
        </div>
        <button>
          Log In
        </button>
      </div>
    );
  }
}

export default SplashPage;