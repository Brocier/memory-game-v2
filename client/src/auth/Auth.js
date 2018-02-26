import history from './history.js'
import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'fhwdgads.auth0.com',
    clientID: 'Qv392jvitoTKcdjWh5wzSChu3hWZpqPe',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://fhwdgads.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this
      .auth0
      .authorize();
  }
}