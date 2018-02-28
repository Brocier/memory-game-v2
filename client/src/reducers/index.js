import {combineReducers} from 'redux'
// import auth from './authReducer.js'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router
import user from './userReducer'
// Combine all reducers
const rootReducer = combineReducers({user, router})

export default rootReducer
