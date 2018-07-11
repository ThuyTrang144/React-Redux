import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Intro from './Components/Intro.js'
import Selector from './Components/Selector.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Selector />
      </div>
    );
  }
}

export default App;
