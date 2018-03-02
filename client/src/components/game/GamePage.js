import React, {Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getOneUserRoute} from '../../actions/thunk.users.js'
import {push} from 'react-router-redux'

import GameBoard from './GameBoard.js'
import Scoreboard from './Scoreboard.js'
// import Timer from './Timer.js' import DifficultySetting from
// './DifficultySetting.js'

class GamePage extends Component {

  componentWillMount() {
    const userId = this.props.match.params.userId;
    console.log("userId " + userId)
    this
      .props
      .getOneUserRoute(userId)

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      user: {
        id: this.props.match.params.userId,
        name: nextProps.user.name,
        image: nextProps.user.image
      }
    })
  }

  state = {
    user: {
      name: "",
      image: ""
    }
  }
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
          <GameBoard user={this.state.user}/>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/Home-icon.svg"
          alt="home"
          onClick={() => this.props.push(`/`)}></img>
        <div>
          <Scoreboard/>
        </div>
        <footer>Made by Josh with &hearts;
        </footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user[0]}
}

export default connect(mapStateToProps, {getOneUserRoute, push})(GamePage);

const Title = styled.div `
font-size: 95px;
@media (max-width: 400px){
  font-size:42px;
}

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
    footer{
      @media (max-width: 400px){
        font-size:20px;
      }
    }
`