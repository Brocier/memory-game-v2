import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getScoresRoute} from '../../actions/thunk.scores.js'
import styled from 'styled-components'

class Scoreboard extends Component {
  componentWillMount() {
    this
      .props
      .getScoresRoute()
  }
  render() {

    console.log("SCORES", this.props.scores)
    return (
      <ScoreBoardContainer>Scoreboard {this
          .props
          .scores
          .map((score, i) => {
            return (
              <div key={i}>
                &#9679;{score.score}
              </div>
            )
          })}
      </ScoreBoardContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {scores: state.score}
}

export default connect(mapStateToProps, {getScoresRoute})(Scoreboard);

const ScoreBoardContainer = styled.div `
display: flex;
flex-wrap: wrap;
`