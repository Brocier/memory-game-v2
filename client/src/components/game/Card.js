import React, {Component} from 'react';
import styled from 'styled-components'

class Card extends Component {
  state = {
    clicked: false
  }

  handleCardClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    this
      .props
      .cardIsClicked(this.props.card.cardValue)
  }

  render() {
    const src = (this.state.clicked)
      ? (this.props.card.cardImage)
      : ('https://i.imgur.com/sBb2shN.png')
    return (
      <CardHolder onClick={this.handleCardClick}>
        <img
          height='230px'
          width='150px'
          src={src}
          alt={this.props.card.cardDescription}/>
      </CardHolder>
    );
  }
}

export default Card;

const CardHolder = styled.div `
margin: 10px;
padding: 10px;
img{
  border-radius: 14px;
  width:'200px';

  @media (min-width: 412px){
    width:'50px';
  }
}
`