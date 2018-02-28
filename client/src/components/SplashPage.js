import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
class SplashPage extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome to Memory Game v2
        </h1>
        <div>
          {process.env.REACT_APP_SECRETCODE}
        </div>
        <button onClick={() => this.props.push(`/users`)}>
          Log In
        </button>
      </div>
    )
  }
}

export default connect(null, {push})(SplashPage)