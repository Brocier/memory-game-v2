import React, {Component} from 'react';
import styled from 'styled-components'

import GameBoard from './GameBoard.js'
// import Scoreboard from './Scoreboard.js' import Timer from './Timer.js'
// import DifficultySetting from './DifficultySetting.js'

class GamePage extends Component {
  render() {
    return (
      <Container>
        <header>
          <h1>Memory Game v2</h1>
        </header>
        {/* <div>
          <Timer/>
        </div>
        <div>
          <DifficultySetting/>
        </div>
        <div>
          Matches remaining
        </div> */}
        <div>
          <GameBoard/>
        </div>
        {/* <div>
          <Scoreboard/>
        </div> */}
      </Container>
    );
  }
}

export default GamePage;

const Container = styled.div `
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    right:0;
    bottom:0;
    font-family: 'Montserrat', sans-serif;
    color:#000033;
    font-size: 45px;
    text-shadow:4px 4px 8px rgba(0,0,0,0.35);
    background-size: cover;
    background-repeat:no-repeat;
    header{

    }
`