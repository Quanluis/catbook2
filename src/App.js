import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Auth from './Services/auth0';
//Pages 
import Home from './Pages/Home';
import Profile from './Pages/Profile'; 
import Signup from './Pages/Signup';
import SignIn from './Pages/SignIn'


class App extends Component {
  constructor(){
    super();
      this.auth = new Auth();
  }
  
  render() {
    return (
      <div>
        
        <li>
          <Link to = '/profile' > Profile </Link> 
        </li>
        <li>
          <button onClick = {() => this.auth.login() } > sign up </button>
        </li>
        <li>
          <Link to = '/signin' > Signin </Link>
        </li>
        <h1>Catbook</h1>
        <Route path = '/' exact Component = {Home} />
        <Route path = '/profile' exact component = {Profile} />
        <Route path = '/signup' exact component = {Signup} /> 
        <Route path = '/signin' exact component = {SignIn} /> 
      </div>
    );
  }
}

export default App;
