import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'

import SplashPage from './components/SplashPage.js'
import UserPage from './components/users/UserPage';
import NewUserForm from './components/users/NewUserForm';
import EditUserForm from './components/users/EditUserForm';
import UserProfile from './components/users/UserProfile';

import GamePage from './components/game/GamePage.js'

// import Auth from './auth/Auth.js'; const auth = new Auth(); const
// handleAuthentication = ({location}) => {   if
// (/access_token|id_token|error/.test(location.hash)) {
// auth.handleAuthentication();   } }

const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={SplashPage}/>
        <Route exact path="/users" component={UserPage}/>
        <Route exact path="/users/new" component={NewUserForm}/>
        <Route exact path="/users/:userId/edit" component={EditUserForm}/>
        <Route exact path="/users/:userId/show" component={UserProfile}/>
        <Route exact path="/users/:userId/game" component={GamePage}/>
      </div>
    </ConnectedRouter>
  </Provider>
)
export default Root
