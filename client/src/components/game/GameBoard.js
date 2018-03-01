import React, {Component} from 'react';
import Card from './Card.js'
import styled from 'styled-components'

class GameBoard extends Component {

  state = {
    cardOneClicked: null,
    cardTwoClicked: null,
    cardsToBeMatched: [
      {
        cardValue: 13,
        cardDescription: 'King of Hearts',
        cardImage: 'https://i.imgur.com/Rpq5dGUm.png'
      }, {
        cardValue: 13,
        cardDescription: 'King of Diamonds',
        cardImage: 'https://i.imgur.com/yBIoedqm.png'
      }, {
        cardValue: 12,
        cardDescription: 'Queen of Hearts',
        cardImage: 'https://i.imgur.com/dEIZ9mUm.png'
      }, {
        cardValue: 12,
        cardDescription: 'Queen of Diamonds',
        cardImage: 'https://i.imgur.com/VjRWQU1m.png'
      }
    ]
  }
  cardIsClicked = (clickedCardValue) => {
    if (this.state.cardOneClicked) {
      this.setState({cardTwoClicked: clickedCardValue})
    } else {
      this.setState({cardOneClicked: clickedCardValue})
    }
  }
  render() {
    return (
      <div>
        Game Board
        <img width='200' src="https://i.imgur.com/sBb2shN.png" alt="card back"/>
        <CardHolder>
          {this
            .state
            .cardsToBeMatched
            .map((card, key) => {
              return (<Card cardIsClicked={this.cardIsClicked} card={card} key={key}/>)
            })}
        </CardHolder>
      </div>
    );
  }
}

export default GameBoard;

const CardHolder = styled.div `
display: flex;
`