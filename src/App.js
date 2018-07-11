import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Intro from './Components/Intro.js'
import Button from './Components/Button.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      status: true
    }
  }

  handleChangeEvent = (name) => {
    const value = this.state.value
    this.setState({
      value: name==='+' ? value+1 : value-1
    })
  }

  handleChangeStatus = (name) => {
    this.setState(preState => ({
      status: !preState.status
    }))
  }
  renderButton = () => {
    const button = [{
      name: '+',
      onClick: (name) => this.handleChangeEvent(name)
    }, {
      name: '-',
      onClick: (name) => this.handleChangeEvent(name)
    },{
      name:  this.state.status.toString(),
      onClick: (name) => this.handleChangeStatus(name)
    }]
    return (
      button.map((btn, index) => (
        <Button
          key={index}
          name={btn.name}
          onClick={btn.onClick}
         />
      ))
    )
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        {this.renderButton()}
        <h2>{this.state.value}</h2>
      </div>
    );
  }
}

export default App;
