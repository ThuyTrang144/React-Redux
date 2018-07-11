import React , {Component} from 'react'

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
    this.props.updateSearch(event.target.value)
  }

  render () {
    return (
      <input
        type="text"
        placeholder="Search product"
        name = "searchText"
        onChange={this.handleChange}
        value={this.state.searchText}
      />
    )
  }
}

export default SearchBox
