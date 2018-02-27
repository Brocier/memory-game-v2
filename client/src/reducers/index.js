import {combineReducers} from 'redux'
// import auth from './authReducer.js'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router

// Combine all reducers
const rootReducer = combineReducers({router})

export default rootReducer
