import React, { Component } from 'react';

class Selector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Trang'
    }
  }
  handleChange = (event) => {
    const value = this.state.value
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div className="Selector">
        <select
          className='selectTag'
          onChange={(event) => this.handleChange(event)}
          value={this.state.value}>
          <option value="saab">Trang</option>
          <option value="fairy">fairy</option>
          <option value="angle">angle</option>
        </select>
        <h2>{this.state.value}</h2>
      </div>
    )
  }
}
export default Selector
