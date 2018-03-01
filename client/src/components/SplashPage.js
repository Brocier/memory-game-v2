import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
class SplashPage extends Component {
  render() {
    return (
      <SplashPageContainer>
        <h1>
          Memory Game v2
        </h1>
        <button onClick={() => this.props.push(`/users`)}>
          Log In
        </button>
      </SplashPageContainer>
    )
  }
}

export default connect(null, {push})(SplashPage)

const SplashPageContainer = styled.div `
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
    background-color: #B3B3B3;
    color:#000033;
    font-size: 45px;
    text-shadow:4px 4px 8px rgba(0,0,0,0.35);
    background-size: cover;
    background-repeat:no-repeat;
    h1{
      padding: 20px;
      position: absolute;
      top:65px;
      margin:20px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #FFFFFF;
      font-weight: 400;
      font-size: 45px;
      margin: 0;
      background-color: #F15B31;
    }
    img{
      width:10vh;
      height:10vh;
      cursor: pointer;
      margin: 30px;
      &:hover{
        color:white;
        opacity: 0.6;
      transform:translateY(3px);
      }
    }
    button{
      border:1px solid black;
      background:none;
      margin-left: 20px;
      background:rgba(255,255,255,0.35);
      box-shadow:4px 4px 8px rgba(0,0,0,0.35);
      width:100px;
      padding:7.5px;
      font-size: 25px;
      font-family: 'Montserrat', sans-serif;
      align-self:flex-start;
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        color:white;
      background:rgb(0,0,0);
      transform:translateY(2px);
      }
    }
`