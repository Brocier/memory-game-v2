import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getScoresRoute} from '../../actions/thunk.scores.js'

class Scoreboard extends Component {
  componentWillMount() {
    this
      .props
      .getScoresRoute()
  }
  render() {

    console.log("SCORES", this.props.scores)
    return (
      <div>Scoreboard
        <div>
          {this
            .props
            .scores
            .map((score, i) => {
              return (
                <div key={i}>
                  <div>
                    &#9679;{score.score}
                  </div>
                </div>
              )
            })}
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {scores: state.score}
}

export default connect(mapStateToProps, {getScoresRoute})(Scoreboard);