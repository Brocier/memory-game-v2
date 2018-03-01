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
        cardValue: 12,
        cardDescription: 'Queen of Hearts',
        cardImage: 'https://i.imgur.com/dEIZ9mUm.png'
      }, {
        cardValue: 13,
        cardDescription: 'King of Diamonds',
        cardImage: 'https://i.imgur.com/yBIoedqm.png'
      }, {
        cardValue: 12,
        cardDescription: 'Queen of Diamonds',
        cardImage: 'https://i.imgur.com/VjRWQU1m.png'
      }
    ]
  }

  doCardsMatch = () => {
    if (this.state.cardOneClicked === this.state.cardTwoClicked) {
      console.log("Cards matched")
      // Leave them showing but make them unclickable
    } else {
      console.log("Not a match")
      // Turn cards back over and make them clickable
    }
  }

  cardIsClicked = (clickedCardValue) => {
    if (this.state.cardOneClicked) {
      this.setState({
        cardTwoClicked: clickedCardValue
      }, this.doCardsMatch)
      console.log("Card two value " + clickedCardValue)
    } else {
      this.setState({cardOneClicked: clickedCardValue})
      console.log("Card one value " + clickedCardValue)
    }
  }

  render() {
    return (
      <GameBoardContainer>
        Game Board Component
        <CardHolder>
          {this
            .state
            .cardsToBeMatched
            .map((card, key) => {
              return (<Card cardIsClicked={this.cardIsClicked} card={card} key={key}/>)
            })}
        </CardHolder>
      </GameBoardContainer>
    );
  }
}

export default GameBoard;

const GameBoardContainer = styled.div `
padding: 5px;
border: .5px goldenrod dotted;
`

const CardHolder = styled.div `
display: flex;
`