import React, { Component } from 'react';
import Button from './components/Button.js'
import TextInput from './components/TextInput.js'
import './App.css';
import './abstracts/TextInput.css'

class App extends Component {

  state = {
    value: ''
  }

  renderTodos = (todos) => {
  return todos.map((todo, i) => (
    <div key={i}>
      <p onClick={() => this.props.toggleTodo(todo.id)}
         style={todo.isCompleted ? {textDecoration: 'line-through'} : { textDecoration: 'none'}}>
         {todo.text}
      </p>
      <Button
        nameBtn={'Delete'}
        onClick={() => {
        this.props.deleteTodo(todo.id)
      }}/>
    </div>
  ))
}

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    let todos = this.props.list
    let filter = this.props.typeEvent

    if(!isNaN(parseInt(filter, 10)) && filter !== ''){
      let currentState = filter === "1" ? true : false;
      todos = todos.filter((todo) => {
        return todo.isCompleted === currentState;
      });
    }
    console.log(filter);
    console.log(todos);
    return (
      <div className="App">
        <TextInput
         className="inputTodo"
         value={this.state.value}
         onChange={this.handleChange}
         placeholder="type todo"/>
        <Button
          nameBtn={'Add'}
          onClick={() => {
          this.props.addTodo(this.state.value)
          this.setState({
            value: ''
          })
        }}/>
        <Button
          nameBtn={'All'}
          onClick={() => {
          this.props.filterTodo("All")
        }}/>
        <Button
          nameBtn={'Active'}
          onClick={() => {
          this.props.filterTodo("0")
        }}/>
        <Button
          nameBtn={'Completed'}
          onClick={() => {
          this.props.filterTodo("1")
        }}/>
        <ul>{this.renderTodos(todos)}</ul>
      </div>
    );
  }
}

export default App;
