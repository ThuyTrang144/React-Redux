import React, { Component } from 'react';
import logo from '../logo.svg';

const renderTitle = (title) => {
  return (
    <h1 className="App-title">Welcome to React</h1>
  )
}

const renderLogo = () => {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  )
}
const Header = (props) => {
  return (
    <header className="App-header">
      {renderLogo(props.header)}
      {renderTitle(props.header)}
    </header>
  )
}

export default Header
