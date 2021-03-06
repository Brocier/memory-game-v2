import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'

import {sendNewUserToDatabase} from '../../actions/thunk.users.js'

class UserForm extends Component {
  state = {
    newUserForm: {}
  }

  handleNewUserChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    const newUserForm = {
      ...this.state.newUserForm
    }
    newUserForm[attributeName] = attributeValue

    this.setState({newUserForm})
  };

  handleAddNewUser = () => {
    this
      .props
      .sendNewUserToDatabase(this.state.newUserForm)
    this
      .props
      .push(`/users`)
    this.setState({
      newUserForm: {
        name: "",
        image: ""
      }
    })
  };

  render() {
    return (
      <Container>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/Home-icon.svg"
          alt="home"
          onClick={() => this.props.push(`/`)}></img>
        <div>
          Username:</div>
        <input
          className="newUser"
          type="text"
          name="name"
          onChange={this.handleNewUserChange}
          value={this.state.newUserForm.name}
          placeholder="Your name"/>
        <br/>
        <div>
          Image-URL:</div>
        <input
          className="newUser"
          type="text"
          name="image"
          onChange={this.handleNewUserChange}
          value={this.state.newUserForm.image}
          placeholder="Profile picture URL"/>
        <br/>
        <button onClick={this.handleAddNewUser}>
          Add User
        </button>

      </Container>
    )
  }
}

export default connect(null, {sendNewUserToDatabase, push})(UserForm)

// /////////////////////////////////////////////////////////////////////////////
// / / STYLED-COMPONENTS
// /////////////////////////////////////////////////////////////////////////////
// / /

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color:black;
    width: 100%;
    position: absolute; 
    /* background-image:linear-gradient(white,transparent,transparent,transparent,transparent),url(https://pbs.twimg.com/media/BzrxuvVIgAAj7YE.jpg:large); */
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
    font-family: 'Montserrat', sans-serif;
    /* background-color: #212121; */
    input{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 0px rgba(0,0,0,0.25);
      border:1px solid black;
      background:none;
      border-radius:3px;
      width: 35vh;
      height: 5vh;
      margin: 3px;
      padding-left: 5px;
      background:rgba(255,255,255,0.65);
    }
    button{
      border:1px solid black;
      background:none;
      width: 125px;
      height: 45px;
      padding:7.5px;
      font-size: 15px;
      text-align: center;
      margin:5px;
      font-family: 'Montserrat', sans-serif;
      background:rgba(255,255,255,0.45);
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        color: white;
      background:rgba(0,0,0,0.15);
      }};
`