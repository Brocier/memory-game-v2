import React, {Component} from 'react';
import styled from 'styled-components'

class Card extends Component {

  render() {
    const src = (this.props.card.clicked)
      ? (this.props.card.cardImage)
      : ('https://i.imgur.com/sBb2shN.png')
    const alt = (this.props.card.clicked)
      ? (this.props.card.description)
      : ('Mystery Card!')

    return (
      <CardHolder
        onClick={() => {
        this
          .props
          .handleCardClick(this.props.index);
      }}>
        <img height='230px' width='150px' src={src} alt={alt}/>
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
}
`