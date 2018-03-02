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
        <div className="description">
          General Assembly's Web Development Immersive program experienced remake of the
          Pre-admission work.
          <br/>
          See the README.md for a full list of technologies learned and used.
        </div>
        <div>
          <button onClick={() => this.props.push(`/users`)}>
            Log In
          </button>
        </div>
        <CardAnimation className="wrapper">
          {/* Card animation borrowed from https://codepen.io/kaypooma/pen/dEtxJ?page=9 */}
          <div className="card">
            <div className="club1">&#9827;</div>
            <div className="ace1">
              <div className="ace_a1">A
                <br/>
                <div className="ace_club1">&#9827;</div>
              </div>
              <div className="ace2">
                <div className="ace_a2">A</div>
                <br/>
                <div className="ace_club2">&#9827;</div>
              </div>
            </div>
          </div>
        </CardAnimation>
      </SplashPageContainer>
    )
  }
}

export default connect(null, {push})(SplashPage)

const CardAnimation = styled.div `
.card {
  cursor: default;
  width: 200px;
  height: 350px;
  color: #FFFFFF;
  background-color: #00aab7;
  border-radius: 15px;
  text-align: center;
  line-height: 350px;
  font-size: 100px;
  -webkit-animation: rotate 4s linear infinite;
  -moz-animation: rotate 4s linear infinite;
  animation: rotate 4s linear infinite;
  margin: 0 auto;
  position: relative;
  top: 70px;
}

.ace1 {
  position: relative;
  font-size: 30px;
  top: -340px; 
  left: -80px;
  line-height: 20px;
}

.ace_club1 {
  position: relative;
  left: 0px;
  top: 7px;
}

.ace2 {
  position: relative;
  font-size: 30px;
  top: 233px;
  left: 158px;
  line-height: 20px;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

.ace_club2{
  position: relative;
  left: 0px;
  top: -10px;
}

.wrapper {
  -webkit-perspective: 25em;
  -moz-perspective: 25em;
  perspective: 25em;
}

@-webkit-keyframes rotate {
  100% {-webkit-transform: rotatey(360deg);}
}

@-moz-keyframes rotate {
  100% {-moz-transform: rotatey(360deg);}
}

@keyframes rotate {
  100% {transform: rotatey(360deg);}
}
`

const SplashPageContainer = styled.div `
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
    .description{
      text-align: center;
      width: 70%;
      font-size: 30px;
      @media (max-width: 400px){
          font-size:20px;
      }
    }
    h1{
      padding: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #FFFFFF;
      font-weight: 400;
      font-size: 45px;
      margin: 0;
      width: 100vw;
      text-align: center;
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