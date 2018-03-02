import React, {Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import GameBoard from './GameBoard.js'
// import Scoreboard from './Scoreboard.js' import Timer from './Timer.js'
// import DifficultySetting from './DifficultySetting.js'

class GamePage extends Component {
  render() {
    return (
      <Container>
        <Title>Memory Game v2</Title>
        {/* <div>
          <Timer/>
        </div>
        <div>
          <DifficultySetting/>
        </div>*/}
        <div>
          <GameBoard/>
        </div>
        {/* <div>
          <Scoreboard/>
        </div> */}
        <footer>Made by Josh
          <button onClick={() => this.props.push(`/`)}>home
          </button>
        </footer>

      </Container>
    );
  }
}

export default connect(null, {push})(GamePage);

const Title = styled.div `
font-size: 95px;
`

const Container = styled.div `
    display: flex;
    flex-direction:column;
    justify-content:space-between;
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