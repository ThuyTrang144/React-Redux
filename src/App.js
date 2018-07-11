import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Intro from './Components/Intro.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
