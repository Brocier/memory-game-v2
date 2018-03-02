import axios from 'axios'

// SCORE ACTIONS

export function sendScoresToState(scoresFromDatabase) {
  return {type: 'GET_SCORES', scoresFromDatabase}
}

export function getScoresRoute() {
  return function (dispatch) {
    return axios
      .get(`/api/scores`)
      .then((response) => {
        dispatch(sendScoresToState(response.data))
      })
  }
}

export function sendNewScoreToState(newScoreData) {
  return {type: 'CREATE_SCORE', newScoreData}
}

export function sendNewScoreToDatabase(userId) {
  return function (dispatch) {
    return axios
      .post(`/api/scores`, {user: userId})
      .then((response) => {
        console.log("RESPONSE FROM API", response)
        dispatch(sendNewScoreToState(response.data))
      })
  }
}