import React, {Component} from 'react';
import Card from './Card.js'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {sendNewScoreToDatabase} from '../../actions/thunk.scores.js'

class GameBoard extends Component {
  state = {
    cardOneClicked: null,
    cardTwoClicked: null,
    cardsToBeMatched: [
      {
        cardValue: 13,
        cardDescription: 'King of Hearts',
        cardImage: 'https://i.imgur.com/Rpq5dGUm.png',
        clicked: false
      }, {
        cardValue: 12,
        cardDescription: 'Queen of Hearts',
        cardImage: 'https://i.imgur.com/dEIZ9mUm.png',
        clicked: false
      }, {
        cardValue: 13,
        cardDescription: 'King of Diamonds',
        cardImage: 'https://i.imgur.com/yBIoedqm.png',
        clicked: false
      }, {
        cardValue: 12,
        cardDescription: 'Queen of Diamonds',
        cardImage: 'https://i.imgur.com/VjRWQU1m.png',
        clicked: false
      }
      // , {   cardValue: 13,   cardDescription: 'King of Spades',   cardImage:
      // 'https://i.imgur.com/iKNrO1Z.png',   clicked: false }, {   cardValue: 12,
      // cardDescription: 'Queen of Spades',   cardImage:
      // 'https://i.imgur.com/Fi2YjcJ.png',   clicked: false }, {   cardValue: 13,
      // cardDescription: 'King of Clubs',   cardImage:
      // 'https://i.imgur.com/CPAx0lW.png',   clicked: false }, {   cardValue: 12,
      // cardDescription: 'Queen of Clubs',   cardImage:
      // 'https://i.imgur.com/rVQbY8F.png',   clicked: false }
    ],
    matchesRemaining: 2,
    wrongGuesses: 0,
    modalOpen: false
  }

  anyMatchesRemaining = () => {
    if (this.state.matchesRemaining === 0) {
      // this   .props   .sendNewScoreToDatabase()
      this.setState({modalOpen: true})
    }
  }

  doCardsMatch = () => {
    const firstCardKey = this.state.cardOneClicked
    const secondCardKey = this.state.cardTwoClicked
    const cardsToBeMatched = [...this.state.cardsToBeMatched]

    const firstCard = cardsToBeMatched[firstCardKey]
    const secondCard = cardsToBeMatched[secondCardKey]

    if (firstCard.cardValue === secondCard.cardValue) {
      this.setState({
        cardOneClicked: null,
        cardTwoClicked: null,
        matchesRemaining: this.state.matchesRemaining - 1
      }, this.anyMatchesRemaining)
      console.log("Cards matched")
    } else {
      cardsToBeMatched[firstCardKey].clicked = false
      cardsToBeMatched[secondCardKey].clicked = false
      this.setState({
        cardOneClicked: null,
        cardTwoClicked: null,
        cardsToBeMatched,
        wrongGuesses: this.state.wrongGuesses + 1
      })
      console.log("Not a match")
    }
  }

  cardIsClicked = (clickedCardValue, cardId) => {
    if (this.state.cardOneClicked !== null) {
      this.setState({
        cardTwoClicked: cardId
      }, () => {
        setTimeout(() => {
          this.doCardsMatch()
        }, 200)
      })
    } else {
      this.setState({cardOneClicked: cardId})
    }
  }

  handleCardClick = (cardId) => {
    //Only allow the card to be clicked if it hasn't been clicked yet this turn
    if (!this.state.cardsToBeMatched[cardId].clicked) {
      //set the state of the card to clicked
      let cardsToBeMatched = [...this.state.cardsToBeMatched]
      cardsToBeMatched[cardId].clicked = true
      this.setState({cardsToBeMatched})
      //sets the card
      this.cardIsClicked(this.state.cardsToBeMatched[cardId].cardValue, cardId)
    }
  }

  closeModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  resetGame = () => {
    const cardsToBeMatched = this
      .state
      .cardsToBeMatched
      .map((card) => {
        card.clicked = false
        return card
      })
    this.setState({cardsToBeMatched, matchesRemaining: 2, wrongGuesses: 0, modalOpen: false})
  }

  render() {
    const modal = (this.state.modalOpen)
      ? (
        <div className="modal">
          <div className="modal-content">
            <span onClick={() => (this.closeModal())} className="close">&times;</span>
            <div>
              <div>
                VICTORY!!! Way to go {this.props.user.name}!
              </div>
              <button onClick={() => (this.resetGame())}>Play Again?</button>
            </div>
          </div>
        </div>
      )
      : ('')

    return (
      <GameBoardContainer>
        {modal}

        Matches Remaining = {this.state.matchesRemaining}
        <CardHolder>
          {this
            .state
            .cardsToBeMatched
            .map((card, key) => {
              return (<Card handleCardClick={this.handleCardClick} card={card} key={key} index={key}/>)
            })}
        </CardHolder>
        Wrong Guesses = {this.state.wrongGuesses}
      </GameBoardContainer>
    );
  }
}

export default connect(null, {sendNewScoreToDatabase})(GameBoard)

const GameBoardContainer = styled.div `

display: flex;
flex-direction:column;
flex-wrap: wrap;
justify-content:space-between;
align-items:center;
top:0;
left:0;
right:0;
bottom:0;
font-family: 'Montserrat', sans-serif;
color:#000033;
padding: 5px;
border: .5px goldenrod dotted;
@media (max-width: 400px){
  font-size:27px;
}
/* The Modal (background) */
.modal {
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
}

@media (min-width: 412px){
  width:'50px';
}
`
const CardHolder = styled.div `
display: flex;
flex-wrap: wrap;
`
