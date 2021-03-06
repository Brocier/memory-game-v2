function scoreReducer(state = [], action) {

  switch (action.type) {

    case 'GET_SCORES':
      return [...action.scoresFromDatabase]

    case 'CREATE_SCORE':
      return [
        ...state,
        action.newScoreData
      ]

    default:
      return state
  }
}
export default scoreReducer