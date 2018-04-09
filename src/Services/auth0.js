import auth0 from 'auth0-js';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'luisgarzon.auth0.com',
    clientID: '1oLt5mFzKHNi9tEhoa3OI72GYqPxgBwi',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://luisgarzon.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
export default Auth;
