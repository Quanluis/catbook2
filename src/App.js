import React, { Component } from 'react';
import Home from './Pages/Home';
import Profile from './Pages/Profile';  
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        Hello
        <Home />
        <Profile />
      </div>
    );
  }
}

export default App;
