import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'

import SplashPage from './components/SplashPage.js'

import Auth from './Auth/Auth.js';

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={SplashPage}/>

      </div>
    </ConnectedRouter>
  </Provider>
)
export default Root
