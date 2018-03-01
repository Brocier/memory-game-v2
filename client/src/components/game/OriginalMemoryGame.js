import React, {Component} from 'react'
import styled from 'styled-components'

class OriginalMemoryGame extends Component {
  render() {
    return (
      <OriginalGameContainer>
        <div>
          <header>
            <h1>Memory Game</h1>
          </header>
          <nav>
            <a href="#Instructions">Instructions</a>
            <a href="#Game">Game</a>
          </nav>
        </div>
        <div>
          <section>
            <h2 id="Instructions">Instructions</h2>
            <p>Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku,
              Pexeso or simply Pairs, is a card game in which all of the cards are laid face
              down on a surface and two cards are flipped face up over each turn.
              <span class="objective">The object of the game is to turn over pairs of matching cards.</span>
            </p>
          </section>
          <aside>
            <h2>Description</h2>
            <p>This game is an excellent way to enhance your cognitive functions! Just like on
              <a class="lum" href="https://www.lumosity.com">Lumosity</a>
              this game can teach your brain to draw connections faster and more efficiently.
              Keep playing every day to see steady improvement in your abilities!</p>
          </aside>
        </div>
        <div id="game-board" class="board clearfix"></div>

        <div>
          <h3>Social Media</h3>
          <a href="https://www.linkedin.com/in/joshua-schoenfeld-46a32592/">LinkedIn</a>
          <a href="https://www.facebook.com/jschoe04">Facebook
          </a>
        </div>
        <footer class="clearfix">
          <p class="copyright">Copyright 2017</p>
          <p class="message">Created with &hearts; by
            <span class="name">GA</span>
          </p>
        </footer>
      </OriginalGameContainer>
    );
  }
}

export default OriginalMemoryGame

const OriginalGameContainer = styled.div `
  body{
    background-color: #B3B3B3;
    text-align: center;
    margin: 0;
  }
  h1,a,h2 {
    font-family: "Raleway", sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h1 {
    color: #FFFFFF;
    font-weight: 400;
    font-size: 45px;
    margin: 0;
    background-color: #F15B31;
  }
  a {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    margin: 0 20px;
    border-bottom: 2px solid transparent;
  }
  a:hover {
    border-color:white;
  }
  h2{
    color: #0D2C40;
    font-size: 20px;
    font-weight: 600;
    text-decoration: underline;
  }
  .lum{
    margin: 0;	
    color: #F15B31;
  }
  p {
    font-family: "Droid Serif", serif;
    line-height: 26px;
    font-size: 18px;
  }
  main{
    width:850px;
    margin:35px auto;
  }
  img{
    margin:40px 8px 0 8px;
    border-radius: 10px;
  }

  nav{
    background-color: #00A6B3;
    padding:20px 0;
  }
  footer{
    text-transform: uppercase;
    padding: 0 20px;
    background-color: #0D2C40;
    color: white;
    font-size: 14px;
    letter-spacing: .08em;
    font-weight: 500;
    font-family: Raleway, sans-serif;
  }
  .copyright{
    float: left;
  }
  .message{
    float: right;
  }
  .clearfix:after {
  visibility: hidden;
  display: block;
  content: " ";
  clear: both;
  height: 0;
  font-size: 0;
  }
  .name{
    color: #F15B31;
    font-weight: 700;
  }
  h3{
    color: white;
    font-family: Raleway, sans-serif;
  }

  section{
    border: 1px dotted #0D2C40;
    width: 44%;
    float:left;
    margin: 0 1.5%;
    padding: 10px;
  }
  aside{
    float:right;
    margin: 0 1.5%;
    width:44%;
    padding: 10px;
    border: 1px dotted #F15B31;
  }
  .cards{
    clear:both;
  }
  .objective{
    font-weight: 800;
    color: #0D2C40;
    /*text-decoration: none;*/
  }
  button{
    background-color: #0D2C40;
    color: white;
    margin: 30px;
  }
  `

// Original Game Logic initial console logs to know that JS is working
// console.log("JS working!"); //array with my cards in it /* I want to be able
// to make this a lot "dry"er and include all 52 cards. perhaps making an array
// for rank and suit seperate from cards Then I can just have the cardImage
// concatenate with references to those arrays. e.g. cardImage: "images/" + rank
// + "-of-" + suit + ".png" */ var cards = [  {  	rank: "queen",  	suit:
// "hearts",  	cardImage: "images/queen-of-hearts.png"  },  {  	rank: "queen",
// 	suit: "diamonds",  	cardImage: "images/queen-of-diamonds.png"  },  {  	rank:
// "king",  	suit: "hearts",  	cardImage: "images/king-of-hearts.png"  },  {
// 	rank: "king",  	suit: "diamonds",  	cardImage: "images/king-of-diamonds.png"
//  }]; //empty array that is essential for the game logic var cardsInPlay =
// []; //function to check for match var checkForMatch = function(clickedCard,
// cardId){ 	clickedCard.setAttribute('src', cards[cardId].cardImage); 	if
// (cardsInPlay.length === 2) { 		if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert("You found a match!"); 		} else { 		alert("Sorry, try again.") }}};
// //function to simulate a user flipping a card var flipCard = function() {
// 	var cardId = this.getAttribute('data-id'); 	console.log ("User flipped " +
// cards[cardId].rank); 	console.log (cards[cardId].cardImage); 	console.log
// (cards[cardId].suit); 	cardsInPlay.push(cards[cardId].rank);
// 	checkForMatch(this, cardId); }; // function that creates the card elements,
// assigns them images, id's, and puts a click function on them. var
// createBoard = function(){ 	for (var i = 0; i < cards.length; i++){ 		var
// cardElement = document.createElement('img');
// 			cardElement.setAttribute('src', "images/back.png");
// 			cardElement.setAttribute('data-id', i);
// 			cardElement.addEventListener('click', flipCard);
// 			document.getElementById("game-board").appendChild(cardElement); 	} };
// createBoard();