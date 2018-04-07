import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

//Pages 
import Home from './Pages/Home';
import Profile from './Pages/Profile'; 
import Signup from './Pages/Signup';

class App extends Component {
  render() {
    return (
      <div>
        <li>
          <Link to = '/profile' > Profile </Link> 
        </li>
        <li>
          <Link to = '/signup' > Signup </Link>
        </li>
        <Route path = '/' exact Component = {Home} />
        <Route path = '/profile' component = {Profile} />
        <Route path = '/signup' component = {Signup} /> 
      </div>
    );
  }
}

export default App;
